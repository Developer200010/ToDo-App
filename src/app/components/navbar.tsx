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
            <Link href='/' className={todoFilter === null ? "active" : ""}>All</Link>
            <Link href='/?todos=active' className={todoFilter === 'active' ? "active" : ""}>Active</Link>
            <Link href='/?todos=completed' className={todoFilter === 'completed' ? "active" : ""}>completed</Link>
        </nav>
  )
}

export default Navbar