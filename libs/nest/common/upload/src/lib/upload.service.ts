import { File } from '@neonse/nest-common-graphql'
import { Injectable } from '@nestjs/common'
import * as COS from 'cos-nodejs-sdk-v5'
import * as path from 'path'
import { getPlaiceholder } from 'plaiceholder'

@Injectable()
export class UploadService {
    async fileUpload(file: File): Promise<string> {
        console.log(file, '上传的文件')

        const { type, name } = file

        // 获取文件的扩展名
        const extname = path.extname(name).toLocaleLowerCase()

        const isImage = extname === 'jpg' || extname === 'png' || extname === 'jpeg'

        const filePath = ''

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

        // https://cloud.tencent.com/document/product/436/36119

        cos.uploadFile(
            {
                Bucket: 'neonse',
                Region: 'COS_REGION',
                Key: name,
                FilePath: filePath,
                SliceSize: 1024 * 1024 * 5 /* 触发分块上传的阈值，超过5MB使用分块上传，非必须 */,
                onTaskReady: function (taskId) {
                    /* 非必须 */
                    console.log(taskId)
                    if (isImage) {
                        //  sharp(file)
                    }
                },
                onProgress: function (progressData) {
                    /* 非必须 */
                    console.log(JSON.stringify(progressData))
                },
                onFileFinish: function (err, data, options) {
                    console.log(options.Key + '上传' + (err ? '失败' : '完成'))
                },
            },
            function (err, data) {
                console.log(err || data)
                if (data) {
                    try {
                        getPlaiceholder(data.Location).then(({ base64 }) => console.log(base64))
                    } catch (error) {
                        console.log(error)
                    }
                }
            },
        )
    }
}
