'use client'
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Link from "next/link"

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        console.log(`login attempt with:`, { email, password });

    }

    return (
        <Card className="w-[350px] m-auto bg-gray-100 shadow-md shadow-blue-700">
            <CardHeader>
                <CardTitle className="text-center text-2xl text-blue-800 pb-4">Login</CardTitle>
                <CardDescription className="text-center">Enter Your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handelSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                         />

                    </div>

                    <div className="space-y-2">
                        <Input
                        type="password"
                        placeholder="Type your password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                         />

                    </div>
                    <Button type="submit" className="w-full text-black bg- text-xl" onClick={()=>{alert("Thanks for login")}}>Login</Button>
                  
                </form>
            </CardContent>

        </Card>
    )
}

export default LoginForm

