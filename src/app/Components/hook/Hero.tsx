'use client'
import React from 'react'
import useFetch from './useFetch'
import { apiHero } from '@/app/lib/api'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

type HeroProps = {
    title: string
    image: string
    id: string
    description: string
}

const Hero: React.FC = () => {
    const { error, data, loading } = useFetch<HeroProps[]>(apiHero!);

    if (error) {
        return <div>Error</div>
    }

    if (loading) {
        return <div>Loading ...</div>
    }

    
    return (
        <section className='flex item-center justify-center h-screen py-2 px-2 bg-gradient-to-r from-cyan-200 to-blue-500'>
           {
            data && data?.map((items) =>(
             <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
                <p className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>{items.title}</p>
                <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400'>{items.description}</p>
                <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-5'>
                    
                    <Button variant={'default'} size={'lg'}>
                        <Link href={'/inbox'} className='inline-flex items-center gap-2 p-0'>
                            Get Started
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                        </Link>
                    </Button>

                    <Button variant={'secondary'} size={'lg'}>See documentation</Button>
                </div>
             </div>
            ))
           }
            

        </section>
    )
}

export default Hero
