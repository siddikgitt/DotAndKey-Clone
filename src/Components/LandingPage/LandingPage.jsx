import React from 'react'
import Navbar from '../Navbar/Navbar'
import LovedBy from './LovedBy'
import LP_Slider from './LP_Slider'
import NewArrival from './NewArrival'

const LandingPage = () => {
  return (
    <>
        <LP_Slider/>
        <LovedBy/>
        <NewArrival/>
    </>
  )
}

export default LandingPage