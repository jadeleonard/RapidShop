'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'



import { CiSearch } from "react-icons/ci";

import {  NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
const Navbar = () => {
  return (
    <div className='flex items-center justify-center mx-auto p-2 sticky top-0 bg-orange-400 shadow-md'>
        <div className='mx-auto'>



            <Image src={''} width={125} height={40} alt='logo' />
        </div>
        <ul className='hidden sm:inline-flex gap-4 mx-auto text-sm'>
            <li>
                <Link href={''}>Sign Up</Link>
            </li>
            <li>
                <Link href={''}>My Kart</Link>
            </li>
            <li>
                <Link href={''}>Categories</Link>
            </li>
            <li>
                <Link href={''}>Be a Seller</Link>
            </li>
            <li>
                <Link href={''}>About</Link>
            </li>
        </ul>
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant='ghost' className='inline-flex gap-2'>
                        Search <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                <AlertDialogCancel className='absolute top-1 right-1'>
                       X
                    </AlertDialogCancel>
                    <AlertDialogHeader>
                        Search Any Item you Like!!
                    </AlertDialogHeader>
                    <div className='flex items-center justify-center'>
                        <Input />
                    </div>
                    <div className='inline-flex gap-4'>
                    <Button type='submit'>Search</Button>
                    <AlertDialogCancel>
                        cancel
                    </AlertDialogCancel>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
        <div className='sm:hidden mx-auto'>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='ghost'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

                </Button>
            </SheetTrigger>
            <SheetContent>
            <ul className='inline-block'>
            <li>
                <Link href={''}>Sign Up</Link>
            </li>
            <li>
                <Link href={''}>My Kart</Link>
            </li>
            <li>
                <Link href={''}>Categories</Link>
            </li>
            <li>
                <Link href={''}>Be a Seller</Link>
            </li>
            <li>
                <Link href={''}>About</Link>
            </li>
        </ul>
            </SheetContent>
        </Sheet>
        </div>
    </div>
  )
}

export default Navbar
