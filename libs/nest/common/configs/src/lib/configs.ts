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

export type Configs = {
    nest: NestConfig
    cors: CorsConfig
    graphql: GraphqlConfig
    security: SecurityConfig
    sms: SMSConfig
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
}

export default (): Configs => configs
