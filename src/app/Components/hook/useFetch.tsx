'use client'
import React, { useEffect, useState } from 'react'
type useFetchProps<T> ={
     data: T | null;
     error:string | null;
     loading:boolean;
}



const useFetch = <T,>(url:string) => {
    const [state,setState] = useState<useFetchProps<T>>({
        data:null,
        error:null,
        loading:true,
    });
    useEffect(() =>{
        const dataFetch = async () =>{
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Network Error')
                }else{
                    const data: T = await response.json();
                    setState({data,error:null,loading:false});
                }
            } catch (err) {
                setState({data:null,error:err instanceof Error ? err.message:'Unknown error',loading:false});

            }
        };
        dataFetch();    



    },[
            url
    ]);
    return state;
}

export default useFetch
