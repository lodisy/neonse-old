import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
    pending = "pending",
    processing = "processing",
    shipped = "shipped",
    delivered = "delivered",
    completed = "completed",
    archived = "archived",
    exchangeRequest = "exchangeRequest",
    returnRequest = "returnRequest",
    requestPending = "requestPending",
    requestAccepted = "requestAccepted",
    requestDenied = "requestDenied",
    returning = "returning",
    received = "received",
    refunded = "refunded",
    cancelled = "cancelled"
}

registerEnumType(OrderStatus, { name: 'OrderStatus' })
