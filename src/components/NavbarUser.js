import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'

const NavbarUser = () => {
  return (
    <div className='flex items-center justify-between mx-auto p-2 shadow-md sticky top-0'>
      <div className='mx-auto items-center p-1'>



        <img src='' width={125} height={40} alt='logo' />
      </div>
      <ul className='hidden sm:inline-flex mx-auto gap-6 text-sm'>

        <li>


            <Drawer>
            <DrawerTrigger asChild>
            <Link href={''}>My Kart</Link>
            </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <UserButton />
                </DrawerHeader>
                <DrawerTitle>
                  My Kart
                </DrawerTitle>
                <DrawerDescription>
                  This
                </DrawerDescription>
                <Card>
                  <CardHeader>
                    Header
                  </CardHeader>
                  <CardTitle>title</CardTitle>
                  <CardDescription>
                    description
                  </CardDescription>
                  <CardFooter>
                    footer
                  </CardFooter>
                </Card>
                <DrawerClose>
                  X
                </DrawerClose>
              </DrawerContent>
            </Drawer>
       
      
            
             
           
            
        </li>
        <li>
            <Link href={''}>Be a Seller</Link>
        </li>
        <li>
            <Link href={''}>My Returns</Link>
        </li>
        <li>
            <Link href={''}>My Succes</Link>
        </li>
      </ul>
      <div className='mx-auto '>
        <UserButton />
      </div>
      <div className='inline-block sm:hidden'>
      <Sheet className='mx-auto'>
        <SheetTrigger asChild>
      <Button variant='ghost'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
      </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className='inline-block sm:hidden'>

        <li>
          <Sheet>
            <SheetTrigger asChild>
            <Link href={''}>My Kart</Link>
            </SheetTrigger>
            <SheetContent>
            <SheetHeader>
              <UserButton />
              
            </SheetHeader>
            <SheetTitle>
              My Kart
            </SheetTitle>
             
            </SheetContent>
            </Sheet>
        </li>
        <li>
            <Link href={''}>Be a Seller</Link>
        </li>
        <li>
            <Link href={''}>My Returns</Link>
        </li>
        <li>
            <Link href={''}>My Succes</Link>
        </li>
      </ul>
      </SheetContent>
      </Sheet>
      </div>
    </div>
  )
}

export default NavbarUser
