import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // const globalPrefix = 'api'
    // app.setGlobalPrefix(globalPrefix)
    app.use(cookieParser()) // 读取客户端请求携带的 cookie
    const port = process.env.PORT || 3333
    await app.listen(port, () => {
        Logger.log('Listening at http://localhost:' + port + '/')
    })
}

bootstrap()
