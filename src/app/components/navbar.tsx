"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const search = useSearchParams();
    const todoFilter = search.get("todos");
    console.log(todoFilter + " navbar")
  return (
        <nav>
            <Link href='/'>All</Link>
            <Link href='/?todos=active'>Active</Link>
            <Link href='/?todos=completed'>completed</Link>
        </nav>
  )
}

export default Navbar