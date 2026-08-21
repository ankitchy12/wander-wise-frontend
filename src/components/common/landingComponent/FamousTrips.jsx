import React from 'react'
import { useNavigate } from 'react-router-dom'

const tripsData =[
  {
    title: "Tillicho Lake",
    content: "Tilicho Lake is one of the world’s highest lakes, located in Nepal’s Manang district and famous for its stunning Himalayan scenery.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnfpDE5UxbV33b62w69KEGWTzaP5UiIQZy3BDu_If1v15V-s-JF-T_DbOp92c4Dl6-Vt84XuCUCUEMCSwCboxiPHmtNEQlteBVdqiD6X7yJoJds6hBpTiHkIqXhduApf_z4OCWlvfizJ9UK=s680-w680-h510-rw"
  },

  {
    title: "Arnapurna Base Camp",
    content: "Annapurna Base Camp (ABC) sits in a high glacial basin at an elevation of 4,130 meters (13,550 feet) in central Nepal.",
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmNrCvoAdZ1teae-8ZKXz8ii186n4FNYN45TD7ijIS1qOf7GBSckDTwzxn_Fqh2gxsusW2oScQBbpCOdN6QXLo0jVYva515ML001MhPf2WhWEyv5lcEbuuo82l3qxDuGNyTzvdKrI4zIZ0xW=w326-h312-n-k-no",
    
  },

  {
    title: "Ama Yangri",
    content: "Ama Yangri is a beautiful high-altitude hill in Nepal, famous for its breathtaking mountain views and peaceful natural surroundings.",
    image: "https://travellingnepaltips.com/wp-content/uploads/2018/02/26815069_1594937403932618_5439460490865958001_n.jpg",
  },

  {
    title: "Chitwan National Park",
    content: "Chitwan National Park is a famous wildlife reserve in Nepal, known for its rich biodiversity and beautiful forests.",
    image : "https://photos.smugmug.com/Asia/Nepal-travel/i-K5vRHt9/0/XL/chitwan-national-park-12-XL.jpg"
  }

]

const FamousTrips = ({link}) => {

  const navigate = useNavigate();
  return (
  
    <div className= " px-20 py-24 ">
        {/* heading */}

        <div>
            <h2 className="text-4xl font-bold 
            text-center text-green-900">Famous Trips</h2>

        </div>
        
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 ">
         {
            tripsData.map((feature,index)=>{
              return(
                 <div onClick={()=>{navigate(feature.link)}} className="border rounded p-4 border-stone-200 bg-stone-100 md:bg-stone-100 lg:bg-stone-100">

                  <div className='w-full h-40 overflow-hidden'>
                    <img className="w-full" src={feature.image} alt={feature.title} />
                  </div>

                    <h3 className='text-xl font-bold mb-4 text-green-900'>{feature.title}</h3>
                    <p className='text-stone-600'>{feature.content}</p>
                    
                 </div>
              )
            })
         }
         </div>
    </div>
  )
}

export default FamousTrips

