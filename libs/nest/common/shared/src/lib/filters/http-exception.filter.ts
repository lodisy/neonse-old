/**
 * TODO
 */

import { parseContext } from '@neonse/nest-common-shared'
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { I18nService } from 'nestjs-i18n'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(private i18n: I18nService) {}

    async catch(exception: HttpException, host: ArgumentsHost) {
        const { req, res, isGraphQL } = parseContext(host)

        const statusCode = exception.getStatus()

        let message = exception.getResponse() as {
            key: string
            args: Record<string, any>
        }

        // 如果是 rest 统一异常格式 如果是 graphql 交给 apollo
        message = await this.i18n.translate(message.key, {
            lang: host.switchToHttp().getRequest().i18nLang, //TODO
            args: message.args,
        })
        // GraphQL 没有路径，交由 Apollo 处理
        // if (!isGraphQL) {
        res.status(statusCode).json({
            code: statusCode,
            timestamp: new Date().toISOString(),
            path: req.url,
            ip: req.ip,
            lang: req.headers['accept-language'],
            message,
        })
        //}
    }
}
