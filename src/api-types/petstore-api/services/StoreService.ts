/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from '../models/Order';
export interface GetInventory {
    response: Record<string, number>
}
export interface PlaceOrder {
    response: Order
    request: {
        body: Order
    }
}
export interface DeleteOrder {
    response: void
    request: {
        path: {
            orderId: number
        }
    }
}
export interface GetOrderById {
    response: Order
    request: {
        path: {
            orderId: number
        }
    }
}
export const StoreServiceUrl = {
    GetInventory: '/store/inventory',
    PlaceOrder: '/store/order',
    DeleteOrder: ({
        orderId,
    }: {
        orderId: number
    }) => `/store/order/${orderId}`,
    GetOrderById: ({
        orderId,
    }: {
        orderId: number
    }) => `/store/order/${orderId}`,
}

