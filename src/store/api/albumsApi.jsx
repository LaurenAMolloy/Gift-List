import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
            //This defines the name of the hook
            fetchGifts: builder.query({
                query: (user) =>({
                    url: '/albums',
                    params: {
                        userId: user.id
                    },
                    method: 'GET'
                })
            })
            //Add post request to add a gift here
         
        }
    }
});

//Export hooks
//This is the hook inside the albumsApi object
//albumsApi.useFetchAlbumsQuery
export const { useFetchAlbumsQuery } = albumsApi
//This allows us to add the api to the store
export { albumsApi } 