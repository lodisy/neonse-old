export type NestConfig = {
    port: number
}

export type CorsConfig = {
    enabled: boolean
}

export type GraphqlConfig = {
    playgroundEnabled: boolean
    debug: boolean
    schemaDestination: string
    sortSchema: boolean
}

export type SecurityConfig = {
    expiresIn: string
    refreshIn: string
    bcryptSaltOrRound: string | number
}

export type SMSConfig = {
    TemplateSign: string
    TemplateID: string
    SmsSdkAppid: string
    credential: {
        secretId: string
        secretKey: string
    }
    region: string
    profile: {
        httpProfile: {
            endpoint: string
        }
    }
}

export type COSConfig = {
    SecretId: string
    SecretKey: string
    Bucket: string
    Region: string
    /** 同一个实例下上传的文件并发数，默认值3 */
    FileParallelLimit?: number
    /** 同一个上传文件的分块并发数，默认值3 */
    ChunkParallelLimit?: number
    /** 分块上传时，每片的字节数大小，默认值1048576（1MB） */
    ChunkSize?: number
    /** 使用 uploadFiles 批量上传时，文件大小大于该数值将使用按分块上传，否则将调用简单上传，单位 Byte，默认值1048576（1MB） */
    SliceSize?: number
    Protocol?: string
    /** 301/302 回源跟随配置。 */
    FollowRedirect?: boolean
    /** 是否使用全球加速域名。开启该配置后仅以下接口支持操作：putObject、getObject、headObject、optionsObject、multipartInit、multipartListPart、multipartUpload、multipartAbort、multipartComplete、multipartList、sliceUploadFile、uploadFiles */
    UseAccelerate?: boolean
}

export type WechatConfig = {
    wechatRedirectUrl: string
    wechatToken: string
    appId: string
    appSecret: string
    card: boolean //开启卡券支持，默认关闭
    payment: boolean //开启支付支持，默认关闭
    merchantId: string //商户ID
    paymentSandBox: boolean //沙箱模式，验收用例
    paymentKey: string //必传，验签密钥，TIP:获取沙箱密钥也需要真实的密钥，所以即使在沙箱模式下，真实验签密钥也需要传入。
    paymentNotifyUrl: string
    miniProgram: {
        appId: string
        appSecret: string
    }
}

export type Configs = {
    nest: NestConfig
    cors: CorsConfig
    graphql: GraphqlConfig
    security: SecurityConfig
    sms: SMSConfig
    cos: COSConfig
    wechat: WechatConfig
}

const configs: Configs = {
    nest: {
        port: 3333,
    },
    cors: {
        enabled: true,
    },
    graphql: {
        playgroundEnabled: true,
        debug: true,
        schemaDestination: '',
        sortSchema: true,
    },
    security: {
        expiresIn: '3d', // access token expire time
        refreshIn: '7d', // refresh token expire time
        bcryptSaltOrRound: 10,
    },
    sms: {
        TemplateSign: 'admin...',
        TemplateID: '47...',
        SmsSdkAppid: '140....',
        credential: {
            secretId: 'AKI...',
            secretKey: 'R5S....',
        },
        region: '',
        profile: {
            httpProfile: {
                endpoint: 'sms.tencentcloudapi.com',
            },
        },
    },
    cos: {
        SecretId: process.env.COS_SECRET_ID,
        SecretKey: process.env.COS_SECRET_KEY,
        Bucket: process.env.COS_BUCKET,
        Region: process.env.COS_REGION,
        FileParallelLimit: 3, // 并发三张
        ChunkParallelLimit: 3,
        ChunkSize: 1024 * 1024 * 5,
        SliceSize: 1024 * 1024 * 10,
        Protocol: 'https:',
        UseAccelerate: true,
    },
    wechat: {
        wechatRedirectUrl: 'http://yourdomain.com/wechat/oauth-callback',
        wechatToken: 'xxx',
        appId: 'xxx',
        appSecret: 'xxx',
        card: false,
        payment: true,
        merchantId: '',
        paymentSandBox: true,
        paymentKey: '',
        paymentNotifyUrl: `http://your.domain.com/api/wechat/payment/`,
        miniProgram: {
            appId: 'mp_appid',
            appSecret: 'mp_app_secret',
        },
    },
}

export default (): Configs => configs
