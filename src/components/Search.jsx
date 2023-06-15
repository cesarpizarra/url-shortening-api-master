import React, { useState } from 'react'
import BgSearch from '../assets/bg-shorten-desktop.svg';
import { links } from '../api/api';
const Search = () => {

    const [inputFocused, setInputFocused] = useState(false);
    const handleInputFocused = () =>{
        setInputFocused(true);
    }

    const handleInputBlur = () =>{
        setInputFocused(false);
    }

  return (
    <div className='w-full min-h-screen'>
        <div className='max-w-[1200px] px-8 mx-auto h-screen'>
            <div className='rounded-lg w-full h-32 bg-[#716b84] flex items-center justify-center'
            style={{backgroundImage: `url(${BgSearch})`, backgroundSize: 'cover'}}>

                <div className='flex items-center justify-center gap-4 w-full max-w-[700px] px-4'>
                    <input type="text"
                    placeholder='Shorten a link here'
                    className={`w-full p-2 rounded-lg outline-none ${inputFocused ? 'border-2 border-red-400 ': ""}`} 
                    onClick={handleInputFocused}
                    onBlur={handleInputBlur}/>
                    <button className='bg-cyan-400 text-white py-2 px-7 rounded-lg'>Shorten!</button>
                </div>
            </div>

            <div className='grid md:grid-cols-2 px-4 py-10'>
                <ul className='flex justify-center flex-col'>
                    {links.map((link, index) =>(
                        <li className='py-3 text-cyan-700'
                        key={index}>
                            {link.links}
                        </li>
                    ))}
                </ul>
                <ul className='flex md:place-items-end flex-col'>
                    {links.map((link, index) =>(
                        <li className='py-3 text-cyan-700'
                        key={index}>
                            {link.links}
                            <button className='bg-cyan-400 px-4 rounded text-white ml-4'>Copy</button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    </div>
  )
}

export default Search