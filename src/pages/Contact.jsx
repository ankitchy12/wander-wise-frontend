import React from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



const Contact = () => {
  return (
    <div>
        <Navbar />

         <Button>Button</Button>
         <Button variant='destructive'>clickme</Button>

         <HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
    <img src='/heroImage.jpg' alt='hero'/>
  </HoverCardContent>
</HoverCard>
         

      
    </div>
  )
}

export default Contact
