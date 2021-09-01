import { ContextType, createParamDecorator, ExecutionContext } from '@nestjs/common'

export const Ctx = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    if (ctx.getType<ContextType | 'graphql'>() === 'graphql') {
        return ctx.getArgByIndex(2)[''] //todo
    } else {
        return ctx.switchToHttp().getRequest()[''] //todo
    }
})
