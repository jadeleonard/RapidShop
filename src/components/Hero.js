'use client'
import React from 'react'
import useFetch from '@/app/(hooks)/useFetch'
import Loading from './Loading/Loading';

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
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          alt=""
        />
      </div>
      <div className='grid grid-cols-5 gap-4'>
        
          {data && data.map((item) => (
            <div key={item.id}>
              <img src={item.image} className='h-auto max-w-full rounded-lg' />
              <p>{item.name}</p>
              <p></p>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default Hero;
