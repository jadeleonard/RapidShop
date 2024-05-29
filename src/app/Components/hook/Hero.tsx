
'use client'
import React from 'react'
import useFetch from './useFetch'
import { apiHero } from '@/app/lib/api'
type heroProps ={
    title:string
    image:string
    id:string
}
const Hero = () => {
const {error,data,loading} = useFetch<heroProps[]>(apiHero!);
if(error){
    return <div>Error</div>
}
if(loading){
    return <div>Loading .....</div>
}
  return (
    <div>
      {
        data && data?.map((items) =>(
            <div key={items.id}>
                <img src={items.image} width={600} height={600} />
                
            </div>
        ))
      }
    </div>
  )
}

export default Hero
