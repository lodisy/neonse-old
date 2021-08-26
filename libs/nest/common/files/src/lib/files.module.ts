import { COSModule } from '@neonse/nest-common-cos'
import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { FilesResolver } from './files.resolver'
import { FilesService } from './files.service'

@Module({
    imports: [PrismaModule, COSModule],
    controllers: [],
    providers: [FilesService, FilesResolver],
    exports: [FilesService],
})
export class FilesModule {}
