/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Order = {
    complete?: boolean;
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    /**
     * Order Status
     */
    status?: 'placed' | 'approved' | 'delivered';
};

