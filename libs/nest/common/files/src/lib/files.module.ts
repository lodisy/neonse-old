import { COSModule } from '@neonse/nest-common-cos'
import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { FilesController } from './files.controller'
import { FilesService } from './files.service'
@Module({
    imports: [PrismaModule, COSModule],
    controllers: [FilesController],
    providers: [FilesService],
    exports: [FilesService],
})
export class FilesModule {}
