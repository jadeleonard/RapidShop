'use client'
import React from 'react'

import { CiSearch } from "react-icons/ci";

import {  NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,} from '@/components/ui/navigation-menu'
const DropDown = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuItem>
            <NavigationMenuTrigger>
                Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                hELLO
            </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  )
}

export default DropDown
