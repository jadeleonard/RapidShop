import { NextResponse,NextRequest } from "next/server";
import prisma from "../lib/db";


type heroProps = {
    title:string


    description:string
    image:string
}

export async function GET(req:NextRequest,res:NextResponse) {
    try {
        const response = await prisma.herui.findMany();
        if(
            !response || response.length === 0 
        ){
            console.log('error');
            return NextResponse.json({ error: 'No users found' }, { status: 404 });
        }else{
            return NextResponse.json(response)
        }
        
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}