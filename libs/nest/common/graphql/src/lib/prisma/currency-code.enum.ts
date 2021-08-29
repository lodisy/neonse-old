import { registerEnumType } from '@nestjs/graphql';

export enum CurrencyCode {
    USD = "USD",
    CNY = "CNY",
    HKD = "HKD",
    EUR = "EUR",
    GBP = "GBP"
}


registerEnumType(CurrencyCode, { name: 'CurrencyCode', description: "货币" })
