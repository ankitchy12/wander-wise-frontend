import React from 'react'

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

            <button className='border-2 rounded-xl  px-2 py-1 bg-amber-400 text-white cursor-pointer hover:bg-green-700' >Log in</button>
        </div>
    </header>
  )
}

export default Navbar
