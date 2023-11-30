import React from 'react'
import { NavPage } from '../components/NavPage'
import { Event } from '../components/Event.jsx'
import { Calender } from '../components/Calender'

export const EventPage = () => {
  return (
    <>
        <NavPage elementId='props-filter' margin='props-margin'/>

        <div className='flex sm:flex-row flex-col justify-start'>
            <Event/>
            <Calender/>
        </div>
        
    
    </>
  )
}
