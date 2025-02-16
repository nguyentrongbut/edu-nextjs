"use server";

import User from "@/app/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { TCreateUserParams } from "@/types";

export default async function createUser(params: TCreateUserParams) {
    try {
        connectToDatabase();
        const newUser = await User.create(params);
        return newUser;
    } catch (error) {

    }
}