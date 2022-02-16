import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

const NavLink = ({children, active = false}) => {
  return (
    <Link href="/">
      <a
        className={`flex rounded px-4 items-center text-sm min-h-[36px] ${
          active
            ? 'bg-background-600 font-semibold text-primary'
            : 'font-medium text-secondary'
        }`}
      >
        {children}
      </a>
    </Link>
  )
}

const Navbar = () => {
  const spanStyle = [
    'absolute top-0 md:bottom-0 md:top-auto left-0 w-full h-[1px] md:h-[2px]',
    style.gradient,
  ].join(' ')
  return (
    <div
      className="flex items-center justify-between px-4
                 fixed bottom-0 md:top-0 md:bottom-auto
                 w-full h-[72px]
               bg-background-900/90 backdrop-blur-xl"
    >
      <span className={spanStyle}></span>
      <Image src="/logo.svg" alt="Doutro Logo" width={64} height={33} />
      <div className="flex space-x-[2px]">
        <NavLink active>Home</NavLink>
        <NavLink>About</NavLink>
      </div>
    </div>
  )
}

export {Navbar}
