'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'

type CardProps = {
   
    name:string
    content:string
    header:string
    price:string
    sold:string
    url:string
    id:string
    
}
export default function CardForm ({name,content,header,sold,url,id}:CardProps){

    return(
        <Link href={`/item-page/${url}/${id}`}>
        <Card>
            <CardHeader>
                {header}
            </CardHeader>
            <CardContent>
                
                    <CardTitle>
                        {name}
                    </CardTitle>
                    <CardDescription>
                        {content}
                    </CardDescription>
                    <CardDescription>
                        {sold}
                    </CardDescription>
            </CardContent>
        </Card>
        </Link>
    )
}



