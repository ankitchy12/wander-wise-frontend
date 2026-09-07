import React from 'react'
import * as z from 'zod'


const formschema = z.object({
    title: z.string().min(5, 'must be at least 5 characters long'),
    description: z.string().optional(),
})

const TripForm = () => {
  return (
    <div>
      
    </div>
  )
}

export default TripForm
