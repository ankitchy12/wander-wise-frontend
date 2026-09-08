import React from 'react'
import CustomButton from './CustomButton'
import useAuth from '../../hooks/useAuth'

const AppNavbar = () => {

    const { onLogout } = useAuth();

  return (
    <header className="flex items-center justify-between py-4 px-20 bg-stone-100">
        {/* left part */}
        <div>
            <h1 className='text-4xl font-semibold text-teal-900 '>Wander wise</h1>
        </div>

        {/* right part */}
        <div className="flex items-center gap-16">
            <nav className="space-x-10 text-lg font-medium [&>a]:hover:text-amber-400 text-teal-900">
                <a href="/dashboard">Dashboard</a>
                <a href="/trips">Trips</a>
                <a href="/itineraries">Itineraries</a>
                <a href="/baggage">Baggage</a>
            </nav>

            <div onClick={()=>{onLogout()}} >
             <CustomButton text="Log out" />
            </div>
        </div>
    </header>
  )
}

export default AppNavbar