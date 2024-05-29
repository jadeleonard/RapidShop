'use client'
import React from 'react'
import useFetch from './useFetch'

type heroProps = {
    id:string
    title:string
    description:string
    image:string
}
const Hero : React.FC = () => {
    const {data,error,loading} = useFetch<heroProps[]>(process.env.NEXT_PUBLIC_API_HERO_CONTENT!,);
    if(loading){
        return <div>Loading....</div>
    }
    if(error){
        return <div>Error</div>
    }
  return (
    <div className='flex justify-center pt-10 sm:p-14 lg:pt-14'>
      

        {
            data && data?.map((items) =>(
                <div key={items.id}>
                        
                    <p>{items.title}</p>
                    <p>{items.description}</p>
                    <img src={items.image} />
                </div>
            ))
        }



    </div>
  )
}

export default Hero
