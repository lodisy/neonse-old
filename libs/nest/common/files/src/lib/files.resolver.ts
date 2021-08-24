import { File, FileCreateManyInput } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus } from '@nestjs/common'
import { Args, Info, Mutation, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import * as COS from 'cos-nodejs-sdk-v5'
import { GraphQLResolveInfo } from 'graphql'
import * as path from 'path'

@Resolver(() => File)
export class FilesResolver {
    constructor(private prisma: PrismaService) {}

    /**
     * 上传文件
     */
    @Mutation(() => [File], { description: '上传文件', nullable: true })
    async uploadFiles(
        @Args('files', { type: () => FileCreateManyInput }) files: FileCreateManyInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info).value

        await this.prisma.file.createMany({
            data: files,
            skipDuplicates: true,
        })

        // upload to cos based on service

        const cos = new COS({
            // 必选参数
            SecretId: '',
            SecretKey: '',
            // 可选参数
            FileParallelLimit: 3, // 控制文件上传并发数
            ChunkParallelLimit: 8, // 控制单个文件下分片上传并发数，在同园区上传可以设置较大的并发数
            ChunkSize: 1024 * 1024 * 8, // 控制分片大小，单位 B，在同园区上传可以设置较大的分片大小
            Proxy: '',
            Protocol: 'https:',
            FollowRedirect: false,
        })

        // todo
        const filesToUpload = files.map((file) => {
            const filename = path.relative('../uploads', file.name)
            const key = filename
            return {
                Bucket: '',
                Region: '',
                Key: key,
                FilePath: filename,
            }
        })

        cos.uploadFiles(
            {
                files: filesToUpload,
                SliceSize: 1024 * 1024 * 10 /* 设置大于10MB采用分块上传 */,
                onProgress: function (info: COS.ProgressInfo) {
                    const percent = Math.floor(info.percent * 10000) / 100
                    const speed = Math.floor((info.speed / 1024 / 1024) * 100) / 100
                    console.log('进度：' + percent + '%; 速度：' + speed + 'Mb/s;')
                },
                onFileFinish: async (err: COS.CosSdkError) => {
                    console.log(' 上传' + (err ? '失败' : '完成'))
                },
            },
            async (err: COS.CosSdkError, data: COS.UploadFilesResult) => {
                if (err) {
                    throw new HttpException(`上传失败: ${err.message}`, HttpStatus.INTERNAL_SERVER_ERROR)
                } else {
                    await this.prisma.file.updateMany({
                        data: data.files.map((file) => ({
                            url: `https://${file.data.Location}`,
                        })),
                        ...select,
                    })
                }
            },
        )
    }
}
