import React from 'react'

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
            justify-center text-amber-50'>
              <h1>Plan your trips with wanderwise</h1>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, 
                minima! Quas sunt dolorum magni eaque, optio hic culpa reiciendis 
                et pariatur fugiat ratione nostrum, fugit illo? Adipisci a rerum pariatur.
              </p>

              <button> Get Started</button>
            </div>
        
      

    </div>
  )
}

export default Hero
