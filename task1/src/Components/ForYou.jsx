import React from 'react'
import image1 from '../assets/Task-Images/tmp94mja6yi.webp'
import image2 from '../assets/Task-Images/tmp3ezpozay.webp'
import image3 from '../assets/Task-Images/tmpc7os5jfj.webp'
import image4 from '../assets/Task-Images/tmpm9s3h9i2.webp'

function ForYou() {
  return (
    <div className='bg-[#000000] '>
        <div className='text-center py-11 '>
            <h1 className='text-white font-bold text-3xl  md:text-4xl lg:text-5xl'>This Is For You If..</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 mx-auto mt-16 ml-5 py-8'>
                <div className='flex justify-center flex-col items-center'>
                    <img src={image1} alt="" className='w-10/12 '/>
                    <p className='text-white text-[1.1rem] md:text-2xl text-center  font-semibold'>You're stressed about money every end of the month</p>
                </div>
                 <div className='flex justify-center flex-col items-center'>
                    <img src={image2} alt="" className='w-10/12 '/>
                    <p className='text-white text-[1.1rem] md:text-2xl text-center  font-semibold'>You're wanting the best for your family but don't have extra money to do so</p>
                </div>
                 <div className='flex justify-center flex-col items-center'>
                    <img src={image3} alt="" className='w-10/12 '/>
                    <p className='text-white text-[1.1rem] md:text-2xl text-center  font-semibold'>You're wanting to leave your 9 to 5 and gain more free time to be with your loved ones whenever you want</p>
                </div>
                 <div className='flex justify-center flex-col items-center'>
                    <img src={image4} alt="" className='w-10/12 ' />
                    <p className='text-white text-[1.1rem] md:text-2xl text-center  font-semibold'>You have at least 1 hour a day of free time to pursue this business</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForYou


