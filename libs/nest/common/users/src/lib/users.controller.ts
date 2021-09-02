/**
 * TODO
 */

import { JwtAuthGuard, RequestWithUser } from '@neonse/nest-common-shared'
import { Body, Controller, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Prisma } from '@prisma/client'
import * as multer from 'multer'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('avatar')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: multer.memoryStorage(),
            fileFilter: (req, file, cb) => {
                if (file.mimetype.startsWith('image')) {
                    cb(null, true)
                } else {
                    cb(new Error('仅支持图片文件'), false)
                }
            },
        }),
    )
    @UseGuards(JwtAuthGuard)
    async changeAvatar(@Req() request: RequestWithUser, @UploadedFile() image: Express.Multer.File) {
        const { user } = request

        await this.usersService.updateAvatar(user.id, image)

        return user
    }

    @Post('changepass')
    @UseGuards(JwtAuthGuard)
    async changePassword(
        @Req() request: RequestWithUser,
        @Body() data: { currentPassword: string; newPassword: string },
    ) {
        const { user } = request
        return this.usersService.changePassword(user.id, data.currentPassword, data.newPassword)
    }

    @Post('update')
    @UseGuards(JwtAuthGuard)
    async updateUser(@Req() request: RequestWithUser, @Body() data: Prisma.UserUpdateInput) {
        const { user } = request
        return this.usersService.updateUser({ id: user.id }, data)
    }
}
