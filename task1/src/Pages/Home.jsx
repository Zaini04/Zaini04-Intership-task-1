import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ForYou from '../Components/ForYou'
import Youtube from '../Components/Youtube'
import Challenges from '../Components/Challenges'
import News from '../Components/News'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='bg-[#FFFFFF]'>
        <Navbar />
        <Hero />
        <ForYou />
        <Youtube />
        <Challenges />
        <News />
        <Footer />
    </div>
  )
}

export default Home