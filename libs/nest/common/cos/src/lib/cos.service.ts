import { COSConfig } from '@neonse/nest-common-configs'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as COS from 'cos-nodejs-sdk-v5'

@Injectable()
export class COSService {
    private cos: COS
    constructor(private configService: ConfigService) {
        const cosConfig = this.configService.get<COSConfig>('cos')
        this.cos = new COS({
            SecretId: cosConfig.SecretId,
            SecretKey: cosConfig.SecretKey,
            FileParallelLimit: cosConfig.FileParallelLimit,
            ChunkSize: cosConfig.ChunkSize,
            SliceSize: cosConfig.SliceSize,
            Protocol: cosConfig.Protocol,
            UseAccelerate: cosConfig.UseAccelerate,
        })
    }

    /**上传单个文件 */

    async uploadFile(file: COS.Key): Promise<string> {
        const cosConfig = this.configService.get<COSConfig>('cos')

        const folder = file.split('.')[1] === 'webp' ? 'image' : file.split('.')[1]

        const result = await this.cos.uploadFile({
            Bucket: cosConfig.Bucket,
            Region: cosConfig.Region,
            Key: file,
            FilePath: `uploads/${folder}/${file}`,
            SliceSize: cosConfig.SliceSize,
            onTaskReady: function (taskId) {
                console.log(taskId)
            },
            onProgress: function (progressData) {
                console.log(JSON.stringify(progressData))
            },
        })

        return `https://${result.Location}`
    }

    /**上传多个文件*/

    async uploadFiles(files: COS.UploadFileItemParams[]) {
        try {
            const result = await this.cos.uploadFiles({
                files,
                SliceSize: this.configService.get<number>('SliceSize'),
                onProgress: function (info: COS.ProgressInfo) {
                    const percent = Math.floor(info.percent * 10000) / 100
                    const speed = Math.floor((info.speed / 1024 / 1024) * 100) / 100
                    console.log('进度：' + percent + '%; 速度：' + speed + 'Mb/s;')
                },
                onFileFinish: async (err: COS.CosSdkError) => {
                    console.log(' 上传' + (err ? '失败' : '完成'))
                },
            })

            return result.files.map((file) => `https://${file.data.Location}`)
        } catch (err) {
            console.log(err)

            throw new HttpException(
                {
                    key: 'cos.UPLOAD_FAILED',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    /** 删除单个文件 */

    async deleteFile(file: COS.Key) {
        return this.cos.deleteObject({
            Bucket: this.configService.get<string>('Bucket'),
            Region: this.configService.get<string>('Region'),
            Key: file,
        })
    }

    /**删除多个文件*/

    async deleteFiles(files: { Key: COS.Key }[]) {
        try {
            await this.cos.deleteMultipleObject({
                Bucket: this.configService.get<string>('Bucket'),
                Region: this.configService.get<string>('Region'),
                Objects: files,
            })
        } catch (err) {
            console.log(err)
        }
    }
}
