import { ArgumentsHost, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Request, Response } from 'express'
import { GraphQLResolveInfo } from 'graphql'

export type RestContext = { req: Request; res: Response; isGraphQL: false; info: undefined }
export type GraphQLContext = {
    req: Request
    res: Response
    isGraphQL: true
    info: GraphQLResolveInfo
}

/**
 * 判断是 rest 还是 graphql
 */
export function parseContext(context: ExecutionContext | ArgumentsHost): RestContext | GraphQLContext {
    const graphQlContext = GqlExecutionContext.create(context as ExecutionContext)
    const info = graphQlContext.getInfo()

    let req: Request
    let res: Response

    if (info) {
        // 是 graphql
        const ctx = graphQlContext.getContext()
        req = ctx.req
        res = ctx.res
    } else if (context.getType() === 'http') {
        // 是 rest
        req = context.switchToHttp().getRequest()
        res = context.switchToHttp().getResponse()
    }
    return {
        req,
        res,
        info,
        isGraphQL: !!info,
    }
}
