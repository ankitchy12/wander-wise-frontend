import React from 'react'
import CustomButton from '../CustomButton'

const Hero = () => {
  return (
    <div className="relative">
        {/* image */}
        <div className="w-full h-[87.5vh] overflow-hidden flex items-center">
            <img src="/heroImage.jpg" alt=" Wander wise Hero Image" 
            className="w-full"></img>
        </div>

            {/* overlay */}
            <div className="w-full h-[87.5vh] bg-black absolute top-0 opacity-40  ">  

            </div>

            {/* content */}
            <div className='absolute top-0 w-full h-[87.5vh] flex items-center 
            justify-center'>
              <div className="w-1/2 mx-auto text-center">

              <h1 className="text-5xl font-bold text-white tracking-wide">Plan your trips with wanderwise</h1>

              <p className="text-white mt-4 text-lg leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, 
                minima! Quas sunt dolorum magni eaque, optio hic culpa reiciendis 
                et pariatur fugiat ratione nostrum, fugit illo? Adipisci a rerum pariatur.
              </p>

              <CustomButton text= 'Get started' />
              </div>
            </div>
        
      

    </div>
  )
}

export default Hero
