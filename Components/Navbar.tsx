'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonComponent from './ButtonComponent'

function Navbar() {
  const handleClick =()=>{}

  return (
    <header className='z-10 w-full mx-auto lg:px-16 '>
      <nav className='flex justify-between items-center py-4'>
           <Link href='/'>
           <h1 className='text-red-900 font-bold' >CARZENITH</h1>
           </Link>
           <ButtonComponent
           btnType="button"
           title="Sign Up"
           handleClick={handleClick}
           containerstyle="bg-white rounded-full text-gray hover:bg-blue-500 hover:text-white px-3 py-2"
        />
      </nav>
    </header>
  )
}

export default Navbar
