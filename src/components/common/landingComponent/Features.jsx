import React from 'react'
import { GlobeCheck, Handshake, Backpack, ClipboardClock } from 'lucide-react'

const featuresData =[
  {
    title: "24/7 Availability",
    content: "Our website works 24/7, so you can access it anytime, anywhere.",
    icon: GlobeCheck,
  },

  {
    title: "Baggage Tracking",
    content: "Our website allows you to track your baggage in real-time, so you can always know where your luggage is.",
    icon: Backpack,
    
  },

  {
    title: "Invite Collaborators",
    content: "Our website allows you to invite collaborators to work on your projects together.",
    icon: Handshake,
  },

  {
    title: "Itenirary",
    content: "Our website allows you to create and manage your itinerary, so you can plan your trips easily.",
    icon: ClipboardClock,
  }

]

const Features = () => {
  return (
  
    <div className= " px-20 py-24 ">
        {/* heading */}

        <div>
            <h2 className="text-4xl font-bold text-center ">Features</h2>

        </div>
        
        {/* content */}
        <div className="grid grid-cols-4 gap-4 mt-20 ">
         {
            featuresData.map((feature,index)=>{
              return(
                 <div className="border rounded p-4 border-gray-300">

                  < feature.icon />

                    <h3 className='text-xl font-bold mb-4'>{feature.title}</h3>
                    <p>{feature.content}</p>
                    
                 </div>
              )
            })
         }
         </div>
    </div>
  )
}

export default Features
