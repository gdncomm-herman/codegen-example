/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
export interface CreateUser {
    response: any
    request: {
        body: User
    }
}
export interface CreateUsersWithArrayInput {
    response: any
    request: {
        body: User
    }
}
export interface CreateUsersWithListInput {
    response: any
    request: {
        body: User
    }
}
export interface LoginUser {
    response: string
    request: {
        query: {
            username: string
            password: string
        }
    }
}
export interface LogoutUser {
    response: any
}
export interface DeleteUser {
    response: void
    request: {
        path: {
            username: string
        }
    }
}
export interface GetUserByName {
    response: User
    request: {
        path: {
            username: string
        }
    }
}
export interface UpdateUser {
    response: void
    request: {
        path: {
            username: string
        }
        body: User
    }
}
export const UserServiceUrl = {
    CreateUser: '/user',
    CreateUsersWithArrayInput: '/user/createWithArray',
    CreateUsersWithListInput: '/user/createWithList',
    LoginUser: '/user/login',
    LogoutUser: '/user/logout',
    DeleteUser: ({
        username,
    }: {
        username: string
    }) => `/user/${username}`,
    GetUserByName: ({
        username,
    }: {
        username: string
    }) => `/user/${username}`,
    UpdateUser: ({
        username,
    }: {
        username: string
    }) => `/user/${username}`,
}

