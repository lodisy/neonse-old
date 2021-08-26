import { COSService } from '@neonse/nest-common-cos'
import { File, FileType, FileUpdateInput } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { ConfigService } from '@nestjs/config'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { FileUpload, GraphQLUpload } from 'graphql-upload'
import * as path from 'path'
import { FilesService } from './files.service'

@Resolver(() => File)
export class FilesResolver {
    constructor(
        private prisma: PrismaService,
        private filesService: FilesService,
        private cos: COSService,
        private configService: ConfigService,
    ) {}

    @Mutation(() => File, { description: '上传单个文件', nullable: true })
    async uploadFile(@Args('file', { type: () => GraphQLUpload }) file: Promise<FileUpload>) {
        console.log(file)
        const { filename, mimetype } = await file
        const url = await this.cos.uploadFile(filename)

        return await this.prisma.file.create({
            data: {
                name: filename,
                mimeType: mimetype,
                format: this.filesService.getFileType(filename) as FileType,
                size: this.filesService.getFileSize(filename),
                url: '',
            },
        })
    }

    /**
     * 上传多个文件
     * TODO 需要加入权限 根据权限判断单个上传文件大小
     */
    @Mutation(() => Number, { description: '上传多个文件', nullable: true })
    async uploadFiles(@Args('files', { type: () => GraphQLUpload }) files: FileUpload[]): Promise<Number> {
        console.log(files)

        const filesToUpload = files.map((file) => {
            const { filename } = file

            return {
                Bucket: this.configService.get<string>('Bucket'),
                Region: this.configService.get<string>('Region'),
                Key: filename,
                FilePath: path.resolve(__dirname, filename),
            }
        })

        const urls = await this.cos.uploadFiles(filesToUpload)

        const result = await this.prisma.file.createMany({
            data: files.map((file, i) => {
                const mimeType = file.mimetype
                const format = this.filesService.getFileType(mimeType) as FileType
                const size = this.filesService.getFileSize(file.filename)
                const width = format === 'IMAGE' ? this.filesService.getImageDimensions(file.filename).width : null
                const height = format === 'IMAGE' ? this.filesService.getImageDimensions(file.filename).height : null

                const url =
                    format === 'IMAGE' && mimeType !== 'image/gif' ? `${urls[i]}?imageMogr2/format/webp` : urls[i] // 当文件为非 gif 图片时，返回 webp 格式
                return {
                    mimeType,
                    format,
                    size,
                    url,
                    width,
                    height,
                    name: file.filename,
                }
            }),
            skipDuplicates: true,
        })

        return result.count
    }

    /**
     * 后台修改单个文件信息
     *
     */
    @Mutation(() => File, {
        description: '后台修改单个文件信息',
        nullable: true,
    })
    async updateFile(@Args('id') id: string, @Args('data', { type: () => FileUpdateInput }) data: FileUpdateInput) {
        return await this.prisma.file.update({
            where: {
                id,
            },
            data,
        })
    }

    /**
     * 后台删除文件
     */
    // @Mutation(() => [File], {
    //     description: '后台删除文件',
    //     nullable: true,
    // })
    // async deleteFiles(@Args('files', { type: () => [File] }) files: File[]) {
    //     const Keys = files.map((file) => ({
    //         Key: file.id,
    //     }))

    //     Keys.map(async (file) => {
    //         await this.prisma.file.delete({
    //             where: {
    //                 id: file.Key,
    //             },
    //         })
    //     })

    //     await this.cos.deleteFiles(Keys)
    // }
}
