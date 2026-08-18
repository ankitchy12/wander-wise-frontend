import React from 'react'
import { useNavigate } from 'react-router-dom'

const tripsData =[
  {
    title: "Bhatbhateni",
    content: "Our Shopping center opens 24/7, so you can access it anytime.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFtrUDldo2EfKRCl7bOIr4IcXW5htCluDZ1r0viGkow&s=10"
  },

  {
    title: "Arnapurna Base Camp",
    content: "Annapurna Base Camp (ABC) sits in a high glacial basin at an elevation of 4,130 meters (13,550 feet) in central Nepal.",
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmNrCvoAdZ1teae-8ZKXz8ii186n4FNYN45TD7ijIS1qOf7GBSckDTwzxn_Fqh2gxsusW2oScQBbpCOdN6QXLo0jVYva515ML001MhPf2WhWEyv5lcEbuuo82l3qxDuGNyTzvdKrI4zIZ0xW=w326-h312-n-k-no",
    
  },

  {
    title: "Ama Yangri",
    content: "Our website allows you to invite collaborators to work on your projects together.",
    image: "https://travellingnepaltips.com/wp-content/uploads/2018/02/26815069_1594937403932618_5439460490865958001_n.jpg",
  },

  {
    title: "Biratnagar",
    content: "Our website allows you to create and manage your itinerary, so you can plan your trips easily.",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Biratnagar_Jaljala_Chowk.jpg/250px-Biratnagar_Jaljala_Chowk.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
  }

]

const FamousTrips = ({link}) => {

  const navigate = useNavigate();
  return (
  
    <div className= " px-20 py-24 ">
        {/* heading */}

        <div>
            <h2 className="text-4xl font-bold 
            text-center ">Famous Trips</h2>

        </div>
        
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 ">
         {
            tripsData.map((feature,index)=>{
              return(
                 <div onClick={()=>{navigate(feature.link)}} className="border rounded p-4 border-gray-300 bg-red-50 md:bg-amber-200 lg:bg-amber-200">

                  <div className='w-full h-40 overflow-hidden'>
                    <img className="w-full" src={feature.image} alt={feature.title} />
                  </div>

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

export default FamousTrips

