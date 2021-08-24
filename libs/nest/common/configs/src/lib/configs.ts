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

export type SMSConfig = {}

export type UploadConfig = {
    cosSecretId: string
    coseSecretKey: string
}

export type Configs = {
    nest: NestConfig
    cors: CorsConfig
    graphql: GraphqlConfig
    security: SecurityConfig
    sms: SMSConfig
    upload: UploadConfig
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
        expiresIn: '2m',
        refreshIn: '7d',
        bcryptSaltOrRound: 10,
    },
    sms: {},
    upload: {
        cosSecretId: '',
        coseSecretKey: '',
    },
}

export default (): Configs => configs
