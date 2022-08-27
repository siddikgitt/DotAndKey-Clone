import React from 'react'
import Navbar from '../Navbar/Navbar'
import BestSeller from './BestSeller'
import CleanBeauty from './CleanBeauty'
import DownloadApp from './DownloadApp'
import LovedBy from './LovedBy'
import LoveGreat from './LoveGreat'
import LP_Slider from './LP_Slider'
import { NA_Slider_Function } from './NA_Slider'
import NewArrival from './NewArrival'
import Spotlight from './Spotlight'
import TopCategory from './TopCategory'

const LandingPage = () => {
  return (
    <>
        <LP_Slider/>
        <LovedBy/>
        <NewArrival/>
        <BestSeller/>
        <Spotlight/>
        <TopCategory/>
        <DownloadApp/>
        <LoveGreat/>
        <CleanBeauty/>
    </>
  )
}

export default LandingPage