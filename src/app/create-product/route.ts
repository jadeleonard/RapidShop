import { NextResponse,NextRequest } from "next/server";
import prisma from "../lib/db";

type productProps ={
    name:string
    description:string
    price:string
    image1:string
    image2:string
    image3:string
    image4:string
    image5:string
}

export async function POST(req:NextRequest,res:NextResponse){
    try {
        const response = await req.json() as productProps;
        const {name,description,price,image1,image2,image3,image4,image5} = response;
        const setData = await prisma.createItem.create({
            data:{
                name,
                description,
                price,
                image1,
                image2,
                image3,
                image4,
                image5
            }
            
        });
        return NextResponse.json(setData, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'an error accoured' }, { status: 500 });
    }
}