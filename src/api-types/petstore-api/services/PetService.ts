/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { Pet } from '../models/Pet';
export interface AddPet {
    response: void
    request: {
        body: Pet
    }
}
export interface UpdatePet {
    response: void
    request: {
        body: Pet
    }
}
export interface FindPetsByStatus {
    response: Array<Pet>
    request: {
        query: {
            status: Array<string>
        }
    }
}
export interface FindPetsByTags {
    response: Array<Pet>
    request: {
        query: {
            tags: Array<string>
        }
    }
}
export interface DeletePet {
    response: void
    request: {
        path: {
            petId: number
        }
    }
}
export interface GetPetById {
    response: Pet
    request: {
        path: {
            petId: number
        }
    }
}
export interface UpdatePetWithForm {
    response: void
    request: {
        path: {
            petId: number
        }
    }
}
export interface UploadFile {
    response: ApiResponse
    request: {
        path: {
            petId: number
        }
    }
}
export const PetServiceUrl = {
    AddPet: '/pet',
    UpdatePet: '/pet',
    FindPetsByStatus: '/pet/findByStatus',
    FindPetsByTags: '/pet/findByTags',
    DeletePet: ({
        petId,
    }: {
        petId: number
    }) => `/pet/${petId}`,
    GetPetById: ({
        petId,
    }: {
        petId: number
    }) => `/pet/${petId}`,
    UpdatePetWithForm: ({
        petId,
    }: {
        petId: number
    }) => `/pet/${petId}`,
    UploadFile: ({
        petId,
    }: {
        petId: number
    }) => `/pet/${petId}/uploadImage`,
}

