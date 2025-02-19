import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface UserInput {
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: UserInput = await req.json();

        console.log("Received body:", body);

        
        const hashedPassword = await bcrypt.hash(body.password, 10);

        
        const existingUser = await prisma.users.findUnique({
            where: { email: body.email },
        });

        if (existingUser) {
            console.error("User with email already exists:", body.email);
            return NextResponse.json(
                { error: "Email is already registered" },
                { status: 400 }
            );
        }

        
        const newUser = await prisma.users.create({
            data: {
                username: body.username,
                email: body.email,
                password: hashedPassword,
                firstname: body.firstname,
                lastname: body.lastname,
            },
        });

        console.log("User successfully created:", newUser);

        return NextResponse.json(
            {
                message: "User registered successfully",
                user: {
                    username: newUser.username,
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                },
            },
            { status: 201 }
        );
        
    } catch{
        console.log("Error")
    }
}
