import React from 'react'
import './style.scss'
import BookingLeft from './BookingLeft'
import BookingRight from './BookingRight'

const Booking = () => {
   
    return (
        <main className='booking'>
            <BookingLeft />
            <BookingRight />
        </main>
    )
}

export default Booking