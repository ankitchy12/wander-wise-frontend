import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({text, className, link}) => {

    const navigate = useNavigate();


  return (
    <div>
      <button onClick={()=>{navigate(link)}} className={`border-2 rounded-xl  px-2 py-1 bg-amber-400
         text-white cursor-pointer hover:bg-green-700 ${className}` }>{text}</button>
    </div>
  )
}

export default CustomButton
