import React from 'react'
import BgImage from '../assets/bg-shorten-desktop.svg';

const GetStarted = () => {
  return (
    <div className='md:pt-0 pt-60'>
        <div style={{backgroundImage: `url(${BgImage})`}}
        className='w-full h-40 bg-[#716b84] flex-grow'>
            <div className='flex items-center justify-center flex-col py-8 gap-4'>
                <h2 className='text-3xl font-bold text-white'>Boost your links today</h2>
                <button className='bg-cyan-400 px-10 py-3 rounded-full font-bold text-white'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted