import React from 'react'
import video from '../assets/Video/video.mp4'

function Youtube() {
  return (
    <div className='bg-[#FFFFFF] flex flex-col justify-center items-center mt-10'>
      <div className='bg-[#000000] w-11/12 lg:h-10/12 flex flex-col justify-center items-center'>
          <h1 className='text-white font-bold   md:text-3xl text-center  '>Watch This Short Video Below to Find Out More:</h1>
          <video className='w-full h-full' controls src={video} type="video/mp4"></video>
          
      </div>
      <div className='text-[#000000] flex flex-col justify-center items-center gap-y-2'>
          <h1 className=' font-bold text-[1.65rem] md:text-3xl mt-2 '>How the Challenge Works:</h1>
          <p className='text-2xl md:text-3xl w-11/12 text-center'>Over 5 days: Each morning at 7 AM EST we release a 1-hour video lesson you can watch at any time. Then at 8 PM EST we go live with our VIPs for a Q&A zoom call.</p>
          <p className='text-2xl md:text-3xl w-11/12 text-center mt-8'>
We also have cash prize giveaways for those who are active and doing the homework each day in the community!</p>
          <div className="flex flex-col justify-center items-center py-3 w-10/12 sm:w-6/12 md:w-7/12 lg:w-6/12 px-5 text-white mb-4 mt-4 bg-[#188BF6] cursor-pointer"> 
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">Register My Seat Now</h1>
            <p className='mt-2 font-bold'>Limited Seats Available</p>
          </div>
          </div>
    </div>
  )
}

export default Youtube