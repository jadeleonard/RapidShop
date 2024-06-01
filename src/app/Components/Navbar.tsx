import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Navbar :React.FC = () => {
  return (
    <div className='flex item-scenter justify-center mx-auto bg-slate-900 sticky top-0 py-2 px-4 shadow-md'>
      <div className='mx-auto items-center '>
                <img src='' width={125} height={40} alt='logo' />



      </div>
      <ul className='hidden sm:inline-flex gap-2 mx-auto text-sm items-center text-slate-100'>
            <li>
                <Link href={''}>
                    Sign Up
                </Link>
            </li>
            <li>
                <Link href={''}>
                    Sign In
                </Link>
            </li>
            <li>
                <Link href={''}>
                    My Inbox 
                </Link>
            </li>
            <li>
                <Link href={''}>
                    My Profile
                </Link>
            </li>
      </ul>
    </div>
  )
}

export default Navbar
