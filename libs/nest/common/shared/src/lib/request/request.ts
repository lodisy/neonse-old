import { Channel, LanguageCode } from '@prisma/client'
import { Request } from 'express'

export class RequestContext {
    private readonly _languageCode: LanguageCode
    private readonly _channel: Channel
    // private readonly _session?: CachedSession
    private readonly _isAuthorized: boolean
    private readonly _authorizedAsOwnerOnly: boolean
    // private readonly _translationFn: TFunction
    // private readonly _apiType: ApiType
    private readonly _req?: Request

    constructor(options: {
        req?: Request
        //  apiType: ApiType;
        channel: Channel
        //   session?: CachedSession;
        languageCode?: LanguageCode
        isAuthorized: boolean
        authorizedAsOwnerOnly: boolean
        //  translationFn?: TFunction;
    }) {
        const { req, channel, languageCode } = options
        this._req = req
        this._channel = channel
        this._languageCode = languageCode ? languageCode : channel ? channel.defaultLanguageCode : 'en'
        this._isAuthorized = options.isAuthorized
    }
}
