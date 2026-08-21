import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({text, className, link}) => {

    const navigate = useNavigate();


  return (
    <div>
      <button onClick={()=>{navigate(link)}} className={` rounded-4xl px-4 py-1 bg-amber-400
         text-black cursor-pointer hover:bg-amber-200 ${className}` }>{text}</button>
    </div>
  )
}

export default CustomButton
