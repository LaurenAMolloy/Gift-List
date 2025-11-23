import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const giftsApi = createApi({
    //Key in redux store
    reducerPath: 'gifts',
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
                    url: '/gifts',
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
export const { useFetchGiftsQuery } = giftsApi
//This allows us to add the api to the store
export { giftsApi } 