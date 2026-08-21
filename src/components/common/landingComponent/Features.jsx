import React from 'react'
import { GlobeCheck, Handshake, Backpack, ClipboardClock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const featuresData =[
  {
    title: "24/7 Availability",
    content: "Our website works 24/7, so you can access it anytime, anywhere.",
    icon: GlobeCheck,
    link: "/"
  },

  {
    title: "Baggage Tracking",
    content: "Our website allows you to track your baggage in real-time, so you can always know where your luggage is.",
    icon: Backpack,
    link: "/about"
    
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

const Features = ({link}) => {

  const navigate = useNavigate();
  return (
  
    <div className= " px-20 py-24 bg-stone-100">
        {/* heading */}

        <div>
            <h2 onClick={()=>{navigate("/feature")}} className="text-4xl font-bold 
            text-center text-teal-900">Features</h2>

        </div>
        
        {/* content */}
        <div className="grid grid-cols-4 gap-4 mt-20 ">
         {
            featuresData.map((feature,index)=>{
              return(
                 <div onClick={()=>{navigate(feature.link)}} className="border rounded p-4 border-stone-200 bg-white">

                  < feature.icon size={40} 
                  className=" text-teal-900 mb-4 "/>

                    <h3 className='text-xl font-bold mb-4 text-green-900'>{feature.title}</h3>
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
