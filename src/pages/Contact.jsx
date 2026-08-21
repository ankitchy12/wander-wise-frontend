import React from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



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

      <Card className="w-80">
        <CardHeader>
          <CardTitle>
            <h1 className='font-bold'>Trip Detsils</h1>
            <h2>Create new trip</h2>
          </CardTitle>
          <CardDescription>
            <img src='/heroImage.jpg'></img>
            <p>Mountains</p>
            </CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>A mountain is a very tall, steep natural landform that rises high above the surrounding ground and often ends in a sharp peak.</p>
          </CardContent>
        <CardFooter>
          <Button>Book Now</Button>
          </CardFooter>
      </Card>
         

      
    </div>
  )
}

export default Contact
