import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'

@Module({
    imports: [PrismaModule],
    controllers: [],
    providers: [],
    exports: [],
})
export class FilesModule {}
