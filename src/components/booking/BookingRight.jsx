import React from 'react'
import './style.scss'
import avion from './image/avion2.svg'
import price from './image/price.svg'


const BookingRight = () => {
  return (
    <section className='booking__right'>
        <div className='booking__right--detailsPrice'>
            <span className='price'><img src={price} alt="" />Price details</span>
            <hr />
            <div className='booking__right--detailsPrice__price'>
                <div className='booking__right--detailsPrice__price__left'>
                    <span>Adult basic fee</span>
                    <span>Tax</span>
                    <span>Regular total price</span>
                    <span className='save'>Save</span>
                </div>
                <div className='booking__right--detailsPrice__price__right'>
                    <span>$150</span>
                    <span>Included</span>
                    <span>$150</span>
                    <span className='save'>-$1.5</span>
                </div>
            </div>
            <hr className='hr' />
            <div className='booking__right--detailsPrice__price' >
                <span>Total</span>
                <span>$148.5</span>
            </div>
        </div>
        <div className='booking__right--detailsCity'>
            <span className='city'><img src={avion} alt="" />Houston - Los Angeles</span>
            <hr />
            <div className='booking__right--detailsCity__details'>
                <div className='booking__right--detailsCity__details__left'>
                    <div className='aerolina'>
                        <figure>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.0705 9.18257C2.06537 9.14698 2.03987 9.12244 2.00844 9.12244C1.97685 9.12244 1.95071 9.14777 1.94638 9.18257L1.7998 10.5218L1.94638 11.8313C1.95055 11.8664 1.97669 11.8918 2.00844 11.8918C2.03971 11.8918 2.06521 11.8671 2.07034 11.8316L2.23712 10.5218L2.0705 9.18257Z" fill="white" />
                                <path d="M4.38085 7.9473C4.32071 7.9473 4.271 7.99653 4.26812 8.05907L4.15137 10.5229L4.26811 12.1151C4.27116 12.1774 4.32071 12.2264 4.38084 12.2264C4.44066 12.2264 4.49021 12.1772 4.49374 12.1148V12.1153L4.62572 10.5229L4.49374 8.05907C4.49022 7.99653 4.44066 7.9473 4.38085 7.9473Z" fill="white" />
                                <path d="M3.18488 8.80362C3.13869 8.80362 3.101 8.8405 3.09732 8.88974L2.96582 10.5222L3.09732 12.1017C3.10085 12.1506 3.13869 12.1874 3.18488 12.1874C3.23058 12.1874 3.26827 12.1506 3.27227 12.1017L3.42173 10.5222L3.27227 8.88942C3.26827 8.84051 3.23058 8.80362 3.18488 8.80362Z" fill="white" />
                                <path d="M5.59522 12.2263C5.66978 12.2263 5.7304 12.1661 5.73345 12.0892L5.84795 10.5237L5.73361 7.24346C5.73056 7.16649 5.66994 7.10635 5.59537 7.10635C5.52016 7.10635 5.45938 7.16665 5.45698 7.24363L5.35547 10.5235L5.45698 12.0896C5.45939 12.166 5.52016 12.2263 5.59522 12.2263Z" fill="white" />
                                <path d="M8.08286 12.2336C8.18549 12.2336 8.27016 12.1491 8.27209 12.0452L8.35195 10.5246L8.27209 6.73622C8.27032 6.63246 8.18549 6.54779 8.08286 6.54779C7.98006 6.54779 7.89523 6.6323 7.89363 6.73638L7.82227 10.5234C7.82227 10.5258 7.89363 12.0462 7.89363 12.0462C7.89523 12.1491 7.98022 12.2336 8.08286 12.2336Z" fill="white" />
                                <path d="M6.82959 12.2277C6.91891 12.2277 6.99091 12.156 6.99332 12.0646V12.0657L7.0905 10.524L6.99316 7.22003C6.99075 7.12862 6.91875 7.0571 6.82943 7.0571C6.73946 7.0571 6.66746 7.12862 6.66554 7.22003L6.5791 10.5242L6.6657 12.0656C6.66762 12.156 6.73962 12.2277 6.82959 12.2277Z" fill="white" />
                                <path d="M14.3662 8.56935C14.1149 8.56935 13.8752 8.62019 13.6567 8.71175C13.5108 7.05873 12.1246 5.76202 10.4338 5.76202C10.02 5.76202 9.61671 5.84349 9.26055 5.98124C9.12215 6.0348 9.08527 6.08997 9.08398 6.19693L9.08398 12.0181C9.08543 12.1304 9.1725 12.2239 9.28203 12.2349C9.28668 12.2354 14.3333 12.238 14.366 12.238C15.3789 12.238 16.2001 11.4168 16.2001 10.4037C16.2001 9.39073 15.3791 8.56935 14.3662 8.56935Z" fill="white" />
                            </svg>
                        </figure>
                        <span>Cloudy Airlines</span>
                    </div>
                    <span>LAS - LAX</span>
                    <div className='booking__right--detailsCity__details__lef__class'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66699 12.6667L14.3337 12.6667V14L1.66699 14L1.66699 12.6667ZM12.8937 10.5667C13.427 10.7067 13.9737 10.3933 14.1203 9.86001C14.2603 9.32668 13.947 8.78001 13.4137 8.63334L9.87366 7.68668L8.03366 1.67334L6.74699 1.33334L6.74699 6.85334L3.43366 5.96668L2.81366 4.42001L1.84699 4.16001L1.84699 7.60668L12.8937 10.5667Z" fill="#FF912B" />
                        </svg>
                        <span>Economy</span>
                    </div>
                    <span>23:15 - 1:25</span>
                    <div className='booking__left--ticket__timeFlight--time' >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.12 3.875C7.84212 3.59576 7.51175 3.37425 7.1479 3.22323C6.78406 3.0722 6.39394 2.99463 6 2.99499V5.995L3.88 8.115C5.05 9.285 6.95 9.285 8.125 8.115C8.40345 7.83647 8.62423 7.50577 8.77471 7.14181C8.92518 6.77786 9.0024 6.38779 9.00193 5.99396C9.00147 5.60012 8.92333 5.21024 8.772 4.84664C8.62067 4.48304 8.3991 4.15286 8.12 3.875ZM6 0.994995C3.24 0.994995 1 3.235 1 5.995C1 8.755 3.24 10.995 6 10.995C8.76 10.995 11 8.755 11 5.995C11 3.235 8.76 0.994995 6 0.994995ZM6 9.995C3.79 9.995 2 8.205 2 5.995C2 3.785 3.79 1.995 6 1.995C8.21 1.995 10 3.785 10 5.995C10 8.205 8.21 9.995 6 9.995Z" fill="#6C6CFF" />
                        </svg> 2h10m
                    </div>
                </div>
                <div className='booking__right--detailsPrice__price__right'>
                    <span>9</span>
                    <span>Feb, 2023</span>
                    <span>$150</span>
                    <span className='save'>Direct</span>
                </div>
            </div>
            <hr className='hr' />
            <div className='refun'>
                <span>Refundable</span>
                <span>Reschedule Available</span>
            </div>
        </div>
    </section>
    )
}

export default BookingRight