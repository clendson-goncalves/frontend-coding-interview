"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignIn() {
    const [username, setUsername] = useState("testing@testing.com")
    const [password, setPassword] = useState("password")
    const router = useRouter()

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault()
        if (username && password) {
            localStorage.setItem("isAuthenticated", "true")
            router.push("/photos")
        }
    }

    return (
        <div className="flex sm:min-h-screen items-center justify-center px-4 py-10">
            <div className="space-y-6 w-xs">
                <div className="flex justify-center">
                    <img src="/logo.svg" alt="Logo" />
                </div>

                <div className="space-y-6">
                    <h1 className="text-center text-xl font-semibold">Sign in to your account</h1>

                    <form onSubmit={handleSignIn} className="space-y-5">
                        <div>
                            <Label htmlFor="username" className="text-sm font-bold">
                                Username
                            </Label>
                            <Input
                                id="username"
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-2  py-5 border-gray-400"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-sm font-bold ">
                                    Password
                                </Label>
                                <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
                                    Forgot password?
                                </a>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-2 py-5 border-gray-400"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 rounded-md">
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
