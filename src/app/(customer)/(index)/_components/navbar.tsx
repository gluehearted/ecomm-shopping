import { getUser } from '@/lib/auth'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import NavigationMenu from './navigation-menu'

export default async function Navbar() {
    const {session, user} = await getUser()

  return (
    <nav className="container max-w-[1130px] mx-auto flex items-center justify-between bg-[#0D5CD7] p-5 rounded-3xl">
            <div className="flex shrink-0">
                <Link href="/">
                    <Image src="/logos/logo.svg" alt="icon" width={120} height={40} />
                </Link>
            </div>
            <NavigationMenu />
            <div className="flex items-center gap-3">
                <Link href="/carts">
                    <div className="w-12 h-12 flex shrink-0">
                        <Image src="/icons/cart.svg" alt="icon" width={40} height={40} />
                    </div>
                </Link>
                {session && user.role === "customer" ? (
                    <>
                    <p className="text-white">Hi, {user.name}</p>
                <div className="w-[48px] h-[48px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                    <Image src="/photos/p4.png" className="w-full h-full object-cover rounded-full" alt="photo" width={48} height={48} />
                </div>
                    </>
                ) : (
                    <>
                    <Link href="/sign-in" className="p-[12px_20px] bg-white rounded-full font-semibold">
                    Sign In
                </Link>
                <Link href="/sign-up" className="p-[12px_20px] bg-white rounded-full font-semibold">
                    Sign Up
                </Link>
                    </>
                )}
            </div>
        </nav>
  )
}
