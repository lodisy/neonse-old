import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { COSService } from './cos.service'
import { FilesService } from './files.service'
@Module({
    imports: [PrismaModule],
    controllers: [],
    providers: [COSService, FilesService],
    exports: [FilesService],
})
export class FilesModule {}
