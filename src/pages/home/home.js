import React from 'react'
import Destination from '../../components/destination/destination'
import HeroSection from '../../components/hero/hero'
import NewsSection from '../../components/info-home/NewsSection'
import MemberShip from '../../components/memberShip/memberShip'

function home() {
  return (
    <>
      <HeroSection /> 
      {/* <NewsSection /> */}
      <MemberShip />
      {/* <Destination /> */}
    </>
  )
}

export default home
