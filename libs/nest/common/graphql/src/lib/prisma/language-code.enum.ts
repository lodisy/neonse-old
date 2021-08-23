import { registerEnumType } from '@nestjs/graphql';

export enum LanguageCode {
    zh_Hans = "zh_Hans",
    zh_Hant = "zh_Hant",
    en = "en",
    de = "de"
}

registerEnumType(LanguageCode, { name: 'LanguageCode',
        description: "语言"
    })
