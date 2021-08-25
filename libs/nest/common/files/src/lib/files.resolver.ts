import { File, FileCreateManyInput, FileUpdateInput } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { ConfigService } from '@nestjs/config'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import * as path from 'path'
import { COSService } from './cos.service'
import { FilesService } from './files.service'

@Resolver(() => File)
export class FilesResolver {
    constructor(
        private prisma: PrismaService,
        private filesService: FilesService,
        private cos: COSService,
        private configService: ConfigService,
    ) {}

    /**
     * 上传文件 需要判断是否图片
     */
    @Mutation(() => [File], { description: '上传文件', nullable: true })
    async uploadFiles(@Args('files') files: FileCreateManyInput[]) {
        const filesToUpload = files.map((file) => {
            const filepath = path.resolve(__dirname, file.name)

            return {
                Bucket: this.configService.get<string>('Bucket'),
                Region: this.configService.get<string>('Region'),
                Key: file.id,
                FilePath: filepath,
            }
        })

        const urls = await this.cos.uploadFiles(filesToUpload)

        return await this.prisma.file.createMany({
            data: files.map((file, i) => {
                const mimetype = this.filesService.getMimeType(file.name) as string
                const format = this.filesService.getFileType(mimetype)
                const size = this.filesService.getFileSize(file.name)

                const url =
                    format === 'IMAGE' && mimetype !== 'image/gif' ? `${urls[i]}?imageMogr2/format/webp` : urls[i] // 当文件为非 gif 图片时，返回 webp 格式
                return {
                    mimetype,
                    format,
                    size,
                    url,
                    ...file,
                }
            }),
            skipDuplicates: true,
        })
    }

    /**
     * 后台修改单个文件信息
     *
     */
    @Mutation(() => File, {
        description: '后台修改单个文件信息',
        nullable: true,
    })
    async updateFile(
        @Args('id') id: string,
        @Args('data') data: Pick<FileUpdateInput, 'name' | 'title' | 'alt' | 'caption' | 'customFields' | 'source'>,
    ) {
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
    @Mutation(() => [File], {
        description: '后台删除文件',
        nullable: true,
    })
    async deleteFiles(@Args('files') files: File[]) {
        const Keys = files.map((file) => ({
            Key: file.id,
        }))

        Keys.map(async (file) => {
            await this.prisma.file.delete({
                where: {
                    id: file.Key,
                },
            })
        })

        await this.cos.deleteFiles(Keys)
    }
}
