"use server";

import User from "@/app/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export default async function createUser(params: any) {
    try {
        connectToDatabase();
        const newUser = await User.create(params);
        return newUser;
    } catch (error) {

    }
}