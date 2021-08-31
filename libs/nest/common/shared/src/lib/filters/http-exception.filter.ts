import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'
import { I18nService } from 'nestjs-i18n'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(private i18n: I18nService) {}

    async catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()
        const statusCode = exception.getStatus()

        let message = exception.getResponse() as {
            key: string
            args: Record<string, any>
        }

        message = await this.i18n.translate(message.key, {
            lang: ctx.getRequest().i18nLang,
            args: message.args,
        })

        response.status(statusCode).json({
            code: statusCode,
            timestamp: new Date().toISOString(),
            path: request.url,
            message,
        })
    }
}
