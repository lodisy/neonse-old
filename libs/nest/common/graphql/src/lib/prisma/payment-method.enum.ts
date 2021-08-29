import { registerEnumType } from '@nestjs/graphql';

export enum PaymentMethod {
    Alipay = "Alipay",
    WechatPay = "WechatPay",
    Stripe = "Stripe",
    PayPal = "PayPal"
}


registerEnumType(PaymentMethod, { name: 'PaymentMethod', description: undefined })
