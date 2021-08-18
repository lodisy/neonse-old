import { Module } from '@nestjs/common'
import { I18nJsonParser, I18nLang, I18nModule as NestI18nModule, I18nService } from 'nestjs-i18n'
import * as path from 'path'

@Module({
    imports: [
        NestI18nModule.forRoot({
            fallbackLanguage: 'en',
            parser: I18nJsonParser,
            parserOptions: {
                path: path.join(__dirname, '/locales/'),
            },
        }),
    ],
    controllers: [],
    providers: [I18nService],
    exports: [I18nService, I18nLang],
})
export class I18nModule {}
