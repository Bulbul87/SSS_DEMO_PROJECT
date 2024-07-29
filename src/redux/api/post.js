//implement end points and fetch data 

import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi=createApi({
    reducerPath:'postApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/',
    }),
    endpoints:(builder)=>({
        getAllPost:builder.query({
        query:() => ({
           url:'posts' ,
           method:'GET'
        })  
        }),
        getPostById: builder.query({
            query:(id)=>({
               url:`posts/${id}` ,
               method:'GET'
            })
        }),
        getPostBylimit: builder.query({
            query:(num)=>({
               url:`posts?_limit=${num}`,
               method:'GET'
            })
        }),
        deletepost: builder.mutation({
            query:(id)=>({
                url:`posts/${id}`,
                method:'DELETE'
             })
        }),
        createpost:builder.mutation({
           query:(newpost) =>{
            console.log("create post:",newpost)
            return{
                url:`posts`,
                method:'POST',
                body:{
                    title:'test title ',
                    body:'this is new body',
                    userid:'1',
                },
                headers:{
                  'content-type' :'application/json; charset=UTF-8' ,
                }
            }
           }
        }),
        updatepost: builder.mutation({
            query:(updatepostdata) =>{
                console.log("Update post:",updatepostdata)
                const {id,...data}=updatepostdata
                console.log("Actual update post:",data)
                return{
                    url:`posts/${id}`,
                    method:'PUT',
                    body:updatepostdata,
                    headers:{
                      'content-type' :'application/json; charset=UTF-8' ,
                    }
                }
               } 
        })
    }),
})
export const {useGetAllPostQuery,useGetPostByIdQuery,useGetPostBylimitQuery,useDeletepostMutation,useCreatepostMutation,useUpdatepostMutation}=postApi