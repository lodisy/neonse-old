import { COSModule } from '@neonse/nest-common-cos'
import { Module } from '@nestjs/common'
import { FilesController } from './files.controller'
import { FilesService } from './files.service'
@Module({
    imports: [COSModule],
    controllers: [FilesController],
    providers: [FilesService],
    exports: [FilesService],
})
export class FilesModule {}
