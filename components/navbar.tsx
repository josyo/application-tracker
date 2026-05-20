"use client"

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import SignOutBtn from "./ui/sign-out-btn";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuGroup,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useSession } from "@/lib/auth/auth-client";


export default function Navbar() {
    const {data: session} = useSession();
    
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4">
                <Link href="/" className="flex items-center gap-2 text-xl px-4 font-semibold text-primary">
                    <Briefcase />
                    CareerForge
                </Link>
                <div className="flex items-center gap-4 ml-auto">
                    {session?.user ? (
                        <>
                            <Link href="/dashboard">
                                <Button
                                    variant="ghost"                       className="hover:text-black">
                                    Dashboard
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                        <Avatar className="w-8 h-8">
                                            <AvatarFallback
                                                className="bg-primary text-white">
                                                {session.user.name[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                </DropdownMenuTrigger>
                                    
                                <DropdownMenuContent className="w-56" align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel className="font-normal">
                                            <div className="flex flex-col space-y-1">
                                                <p className="font-medium leading-none text-sm">{session.user.name}</p>
                                                <p className="text-xs leading-none text-muted-foreground">
                                                    {session.user.email}
                                                </p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <SignOutBtn />
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in">
                                <Button variant="ghost" className="hover:text-black">Sign In</Button>
                            </Link>
                            <Link href="/sign-up" >
                                <Button className="bg-primary hover:bg-primary/90">Start for Free</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}