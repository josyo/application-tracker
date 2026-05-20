'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    {/* Error and Loading States */}
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    const router = useRouter();
  
    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
  
      setError("");
      setIsLoading(true);
  
        try {
          const result = await signIn.email({
            email,
            password
          });
  
            if (result.error) {
              setError(result.error.message ?? "Failed to sign in.");
            } else {
              router.push("/dashboard");
            }
        } catch (err) {
          setError("An error occurred while signing in.");
        } finally {
          setIsLoading(false);
        }
    }



  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-10">
      <Card className="w-full max-w-md rounded-3xl border border-gray-200 bg-white/90 shadow-2xl backdrop-blur">
        
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-black">
            Sign In
          </CardTitle>

          <CardDescription className="text-sm text-gray-500">
            Enter your credentials to access your job application dashboard
          </CardDescription>
        </CardHeader>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <CardContent className="space-y-5">

            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  
                className="h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/10"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                className="h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/10"
                required
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-5">
            <Button
              type="submit"
              className="h-12 w-full rounded-xl bg-black text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-900 active:scale-[0.98]"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>

            <p className="text-center text-sm text-gray-500">
              Dont have an account?{""}
              <Link
                href="/sign-up"
                className="font-semibold text-black transition hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}