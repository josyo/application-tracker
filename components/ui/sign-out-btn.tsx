"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./dropdown-menu";
import { useRouter } from "next/navigation";

export default function SignOutBtn() {
    const router = useRouter();

    return (
        <DropdownMenuItem
            onClick={async () => {
                const result = await signOut();
                if (result.data) {
                    router.push("/sign-in");
                } else {
                    alert("Error signing out. Please try again.");
                }
            }}
            className="hover:bg-red-600 hover:text-white rounded-md px-4 py-2 text-sm font-medium text-red-600"
        >
            Sign Out
        </DropdownMenuItem>
    );
}