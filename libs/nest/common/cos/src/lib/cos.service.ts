import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as COS from 'cos-nodejs-sdk-v5'
import * as fs from 'fs'

@Injectable()
export class COSService {
    private cos: COS
    constructor(private configService: ConfigService) {
        this.cos = new COS({
            SecretId: this.configService.get<string>('SecretId'),
            SecretKey: this.configService.get<string>('SecretKey'),
            FileParallelLimit: this.configService.get<number>('FileParallelLimit'),
            ChunkSize: this.configService.get<number>('ChunkSize'),
            SliceSize: this.configService.get<number>('SliceSize'),
            Protocol: this.configService.get<string>('Protocol'),
            UseAccelerate: this.configService.get<boolean>('UseAccelerate'),
        })
    }

    /**上传单个文件 */

    async uploadFile(file: COS.Key) {
        try {
            this.cos.putObject(
                {
                    Bucket: this.configService.get<string>('Bucket'),
                    Region: this.configService.get<string>('Region'),
                    Key: file,
                    Body: fs.createReadStream(`./${file}`),
                },
                function (err, data) {
                    if (err) {
                        console.log(err)
                    } else return data.Location
                },
            )
        } catch (err) {
            console.log(err)
        }
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

            return result.files.map((file) => file.data.Location)
        } catch (err) {
            console.log(err)

            throw new HttpException('上传失败', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    /**删除文件*/

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
