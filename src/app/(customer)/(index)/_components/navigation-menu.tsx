"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavigationMenu() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/catalogs') {
            return pathname === '/catalogs'
        }
        if (path === '/categories') {
            return pathname === '/categories'
        }
        if (path === '/testimonials') {
            return pathname === '/testimonials'
        }
        if (path === '/rewards') {
            return pathname === '/rewards'
        }
        return false
    }

    return (
        <ul className="flex items-center gap-[30px]">
            <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300">
                <Link 
                    href="/catalogs" 
                    className={`${isActive('/catalogs') ? 'font-bold text-[#FFC736]' : 'text-white'}`}
                >
                    Shop
                </Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300">
                <Link 
                    href="/categories" 
                    className={`${isActive('/categories') ? 'font-bold text-[#FFC736]' : 'text-white'}`}
                >
                    Categories
                </Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300">
                <Link 
                    href="/testimonials" 
                    className={`${isActive('/testimonials') ? 'font-bold text-[#FFC736]' : 'text-white'}`}
                >
                    Testimonials
                </Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300">
                <Link 
                    href="/rewards" 
                    className={`${isActive('/rewards') ? 'font-bold text-[#FFC736]' : 'text-white'}`}
                >
                    Rewards
                </Link>
            </li>
        </ul>
    )
}
