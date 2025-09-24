/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Tag } from './Tag';
export type Pet = {
    tags?: Array<Tag>;
    category?: Category;
    id?: number;
    name: string;
    photoUrls: Array<string>;
    /**
     * pet status in the store
     */
    status?: 'available' | 'pending' | 'sold';
};

