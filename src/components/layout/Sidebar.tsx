"use client";
import { menuItems } from "@/constants";
import React from "react";
import { TMenuItem } from "@/types";
import { ActiveLink } from "@/components/common";
import { useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/common/ModeToggle";
import Link from "next/link";
import { IconUsers } from "@/components/icons";

const Sidebar = () => {
    const { userId } = useAuth();
    return (
        <div className="p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white flex flex-col dark:bg-grayDarker">
            <a href="/" className="font-bold text-3xl inline-block mb-10">
                <span className="text-primary">U</span>
                cademy
            </a>
            <ul className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        url={item.url}
                        title={item.title}
                        icon={item.icon}
                    ></MenuItem>
                ))}
            </ul>
            <div className="mt-auto flex items-center justify-end gap-5">
                <ModeToggle></ModeToggle>
                {!userId ? (
                    <Link
                        href="/sign-in"
                        className="size-10 rounded-lg bg-primary text-white justify-center p-2"
                    >
                        <IconUsers></IconUsers>
                    </Link>
                ) : (
                    <UserButton></UserButton>
                )}
            </div>
        </div>
    );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
    return (
        <li>
            <ActiveLink url={url}>
                {icon}
                {title}
            </ActiveLink>
        </li>
    );
}

export default Sidebar;
