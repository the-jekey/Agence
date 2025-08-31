import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
       return (
              <div className='flex justify-center gap-8 uppercase font-[font2]'>
                     <Link to="/project" className=' hover:text-[#d3fd50] hover:border-[#d3fd50] text-[6vw] border-5 border-white rounded-full px-6 pt-1'>Projects</Link>
                     <Link to="/agence" className=' hover:text-[#d3fd50] hover:border-[#d3fd50] text-[6vw] border-5 border-white rounded-full px-6 pt-1'>Agence</Link>
              </div>
       )
}

export default HomeBottomText
