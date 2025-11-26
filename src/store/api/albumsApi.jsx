import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

const albumsApi = createApi({
    //Key in redux store
    reducerPath: 'albums',
    //BaseQuery is a wrapper around fetch that will handle JSON
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    //Endpoints define a set of API Operations
    endpoints(builder) {
        return {
            //Adding a user
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{type: AlbumsList, id: user.id}]
                },
                query: (user) => {
                    return {
                    url: '/albums',
                    method: 'POST',
                    body: {
                        userId: user.Id,
                        title: faker.commerce.prod
                    }
                    } 
                }
            }),
            //This defines the name of the hook
            fetchAlbums: builder.query({
                invalidatesTags: (result, error, user) => {
                    return [{type: AlbumsList, id: user.id}]
                },
                query: (user) =>({
                    url: '/albums',
                    params: {
                        userId: user.id
                    },
                    method: 'GET'
                })
            })
        }
    }
});

//Export hooks
//This is the hook inside the albumsApi object
//albumsApi.useFetchAlbumsQuery
export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi
//This allows us to add the api to the store
export { albumsApi } 