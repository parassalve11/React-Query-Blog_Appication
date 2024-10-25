'use client'

import {  useMutation, useQueryClient } from "react-query";
import { addBlog } from "./actions";
import { QueryFilters } from "react-query/types/core/utils";



export default function useAddBlogMuataion(){
    const queryClient = useQueryClient();
    const mutations = useMutation({
        mutationFn: addBlog,
        onSuccess:async() =>{
            const queryFliters:QueryFilters = {queryKey:['blog-feed']};

            await queryClient.cancelQueries(queryFliters);

            queryClient.invalidateQueries(queryFliters);

            queryClient.invalidateQueries({
                queryKey:queryFliters.queryKey,
                predicate(query) {
                    return !query.state.data
                },
            })
        },

        onError:(error) => {
            console.log(error);
            
        }
    });

    return mutations;
}