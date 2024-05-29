import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import prisma from "../lib/db";


interface UserProps {
    id: string; // UUIDs are represented as strings
    name: string;
    email: string;
    password: string; // In practice, passwords should be hashed and never stored in plaintext
    city?: string | null; // Allow null
    birthday?: Date | null; // Allow null
}

export async function GET(req: NextRequest,res:NextResponse) {
    try {
        const users: UserProps[] = await prisma.users.findMany();
        if (!users || users.length === 0) {
            console.log('No users found');
            return NextResponse.json({ error: 'No users found' }, { status: 404 });
        } else {
            return NextResponse.json(users);
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
