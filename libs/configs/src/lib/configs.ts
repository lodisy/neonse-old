export type NestConfig = {
    port: number
}

export type CorsConfig = {
    enabled: boolean
}

export type SwaggerConfig = {
    enabled: boolean
    title: string
    description: string
    version: string
    path: string
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

export type Config = {
    nest: NestConfig
    cors: CorsConfig
    swagger: SwaggerConfig
    graphql: GraphqlConfig
    security: SecurityConfig
}

export const config: Config = {
    nest: {
        port: 3333,
    },
    cors: {
        enabled: true,
    },
    swagger: {
        enabled: true,
        title: 'Nestjs FTW',
        description: 'The nestjs API description',
        version: '1.5',
        path: 'docs',
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
}
