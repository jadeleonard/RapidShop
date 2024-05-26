'use client'
import React from 'react'
import { Card,CardTitle,CardDescription,CardHeader,CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast,Toaster } from 'sonner'
const ProductPage = () => {
  return (
    <div>
      <section className='bg-gray-100 dark:bg-gray-800 py-8'>


        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='md:flex-1 px-4'>
                <div className='h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4'>
                    <img src=''  className='w-full h-full object-cover'/>
                </div>
                <div className='flex -mx-2 mb-4'>
                <div className='w-1/2 px-2'>
            
                </div>
            
                </div>
                <Button variant={'default'} onClick={()=>toast('Added',{
                        action:{
                            label:'Added'
                        }
                        
                })}>Add to Cart</Button>
                <Toaster position='top-center' />
            </div>
        </div>
        <div className='md:flex-1 px-4'>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
        </div>  
      </section>
    </div>
  )
}

export default ProductPage
