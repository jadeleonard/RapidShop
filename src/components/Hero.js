'use client'
import React from 'react'
import useFetch from '@/app/(hooks)/useFetch'
import Loading from './Loading/Loading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link';
import {HoverCard, HoverCardTrigger, HoverCardContent} from '@/components/ui/hover-card'

const Hero = () => {
  const apiUrl = 'http://localhost:3000/shoes';
  const { data, error, loading } = useFetch(apiUrl);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>Error</div>
      </div>
    );
  }
  
  return (
    <div className='grid gap-4'>
        <div>
      <div className='justify-center items-center flex'>
        {
          data && data.map((items) =>(
            <div key={items.id}>
                 <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
       <CarouselContent>
        <CarouselItem>
        <img src={items.image} width={600} height={600} alt={items.name} />
        </CarouselItem>
       </CarouselContent>
    </Carousel>
            </div>
          ))
        }
      </div>
      </div>
      <div className='grid grid-cols-5 gap-4'>

          {data && data.map((item) => (
            <HoverCard>
              <HoverCardTrigger>
            <Link key={item.id} href={`/items-page/${item.id}`}>
              <img src={item.image} className='h-auto max-w-full rounded-lg' />
              <p>{item.name}</p>
              <p></p>
            </Link>
            </HoverCardTrigger>
            <HoverCardContent>
              <div>
                <img src={item.image} />
              </div>
            </HoverCardContent>
            </HoverCard>
          ))}
        
      </div>
    </div>
  );
}

export default Hero;
