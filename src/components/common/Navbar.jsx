import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-2 border-gray-200 py-4 px-20">
        {/* left part */}
        <div>
            <h1 className='text-4xl font-semibold text-stone-600 '>Wander wise</h1>
        </div>

        {/* right part */}
        <div className="flex items-center gap-16">
            <nav className="space-x-10 text-lg font-medium [&>a]:hover:text-amber-400">
                <a href="/">Home</a>
                <a href="/about">about</a>
                <a href="/contact">contact</a>
            </nav>

            <CustomButton text='log in' link="/login"/>
        </div>
    </header>
  )
}

export default Navbar
