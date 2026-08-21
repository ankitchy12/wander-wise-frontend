import { Star } from 'lucide-react'
import React from 'react'

const OurMission = () => {
  return (
    <section className='px-80 py-24 bg-teal-900 text-white '>
        <h2 className='text-4xl font-bold text-center mb-10'>Our Mission</h2>

        <p className='text-xl italic text-center font-medium mb-20 text-stone-200'>Our mission is to make sure users <br/>can plan trips with their 
            friends and family. plan their itineary, manage <br/>their baggage, and discover new experiences together.
        </p>

        <div className='grid grid-cols-3 gap-10 '>
            <div className='text-center border-r border-white/30 text-stone-300'>
                <p className='text-4xl font-black text-amber-400'>300+</p>
                <p className='text-xl mt-2 italic'>Clients Served</p>
            </div>
            <div className='text-center text-stone-300'>
                <p className='text-4xl font-black flex justify-center items-center gap-2 text-amber-400 '>4.8 < Star size={36} className='text-amber-400 fill-amber-400' /> </p>
                <p className='text-xl mt-2 italic'>Overall Rating </p>
            </div>
            <div className='text-center border-l border-white/30 text-stone-300'>
                <p className='text-4xl font-black text-amber-400'>20+</p>
                <p className='text-xl mt-2 italic'>Countries Linked</p>
            </div>
        </div>
    </section>
    
  )
}

export default OurMission
