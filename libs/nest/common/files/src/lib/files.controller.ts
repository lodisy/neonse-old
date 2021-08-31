/**
 * TODO 权限
 */

import { JwtAuthGuard } from '@neonse/nest-common-auth'
import { COSService } from '@neonse/nest-common-cos'
import { PrismaService } from '@neonse/nest-common-prisma'
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UploadedFile,
    UploadedFiles,
    UseGuards,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Prisma } from '@prisma/client'
import { FilesService } from './files.service'

@Controller('files')
export class FilesController {
    constructor(
        private prisma: PrismaService,
        private filesService: FilesService,
        private cos: COSService,
        private configService: ConfigService,
    ) {}

    /** 上传单张图片，例如头像图 */

    @Post('upload/image')
    @UseGuards(JwtAuthGuard)
    async uploadImage(@UploadedFile() image: Express.Multer.File) {
        return await this.filesService.uploadImage(image)
    }

    /** 上传多张图片，例如商品图等 */

    @Post('upload/images')
    @UseGuards(JwtAuthGuard)
    async uploadImages(@UploadedFiles() images: Array<Express.Multer.File>) {
        return await this.filesService.uploadImages(images)
    }

    /**
     * 上传非图片类文件
     */

    @Post('upload')
    @UseGuards(JwtAuthGuard)
    async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
        return await this.filesService.uploadFiles(files)
    }

    /**
     * 获取所有文件
     */

    @Get()
    async findFiles(@Query() query: Prisma.FileFindManyArgs) {
        return await this.filesService.findFiles(query)
    }

    /**
     * 获取单个文件
     */
    @Get(':id')
    async findOne(@Param('id') id: string) {
        await this.filesService.isExisting(id)
        return await this.filesService.findFile({
            id,
        })
    }

    /**
     * 修改单个文件
     */
    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateFile(@Param('id') id: string, @Body() data: Prisma.FileUpdateInput) {
        await this.filesService.isExisting(id)
        return await this.filesService.updateFile(
            {
                id,
            },
            data,
        )
    }

    /**
     * 删除单个文件
     */
    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteFile(@Param('id') id: string) {
        await this.filesService.isExisting(id)

        const { name } = await this.filesService.deleteFile({
            id,
        })

        await this.cos.deleteFiles([
            {
                Key: name,
            },
        ])

        return {
            status: 'OK',
            message: 'Deleted',
        }
    }

    // /**
    //  * 删除多个文件
    //  */
    // @Delete('delete')
    // async deleteFiles(ids: string[]) {
    //     var names = []

    //     ids.map(async (id) => {
    //         const name = await this.prisma.file.findFirst({
    //             where: { id },
    //             select: {
    //                 name: true,
    //             },
    //         })
    //         names.push({ Key: name })
    //     })

    //     const { count } = await this.prisma.file.deleteMany({
    //         where: {
    //             id: {
    //                 in: ids,
    //             },
    //         },
    //     })

    //     await this.cos.deleteFiles(names)

    //     return {
    //         status: 'OK',
    //         message: `已成功删除 ${count} 份文件`,
    //     }
    // }
}
