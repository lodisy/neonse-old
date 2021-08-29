import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AccessService } from './access.service'

@Injectable()
export class AccessGuard implements CanActivate {
    constructor(
        private accessService: AccessService,
        private reflector: Reflector, // 通过 reflector 去读取 setmeta 的数据
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        //const request = ContextProxy.create(context).getRequest(); 根据 request 中携带的信息（需要自定义）进行验证 通过返回 true
    }
}
