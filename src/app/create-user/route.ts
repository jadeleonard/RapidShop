import { NextResponse,NextRequest } from "next/server";
import prisma from '@/app/lib/db';







type createUserProps = {
    name:string
    email:string
    password:string
    birthday:string
    city:string
}

export async function POST(req:NextRequest,res:NextResponse){
    try {
        const body = await req.json() as createUserProps;
        const {name,email,password,birthday,city} = body;
        const user = await prisma.users.create({
            data: {
              name,
              email,
              password,
              birthday: new Date(birthday), // Assuming birthday is in a format that can be parsed by Date
              city,
            },
          });
          return NextResponse.json(user, { status: 201 });
    } catch (error) {   
        console.error('Error creating user:', error);

        // Return an error response with a 500 status
        return NextResponse.json({ error: 'An error occurred while creating the user' }, { status: 500 });
    }
}