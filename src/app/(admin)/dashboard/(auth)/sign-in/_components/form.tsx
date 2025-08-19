'use client'

import { Button } from "@/components/ui/button"
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
import { ActionResult } from "@/types"
import { SignIn } from "../lib/action"
import { useFormState, useFormStatus } from "react-dom"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const initialState: ActionResult = {
    error: ''
}

function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <Button type='submit' className="w-full" disabled={pending}>
            {pending ? "Loading..." : "Sign In"}</Button>
    )
}

export default function FormSignIn() {
    const [ state , formAction] = useFormState(SignIn, initialState);

    return (
        <form action={formAction}>
        <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle className="text-2x1">Login</CardTitle>
            <CardDescription>
                Enter your email below to login to your account.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            {state.error !== "" && (
                <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
                </Alert>
            )}
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name='email' id="email" type="email" placeholder="m@example.com"/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input name='password' id="password" type="password"/>
                </div>
        </CardContent>
        <CardFooter>
            <SubmitButton />
        </CardFooter>
        </Card>
        {/* <Card>
            <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
                Enter your email below to login to your account
            </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                        Forgot your password?
                    </a>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                    Login
                    </Button>
                    <Button variant="outline" className="w-full">
                    Login with Google
                    </Button>
                </div>
                </div>
                <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign up
                </a>
                </div>
            </CardContent>
        </Card> */}
        </form>
    )
}