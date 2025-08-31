import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
       return (
              <div className='text-center'>
                     <div className="text-[9vw] leading-[85%] uppercase font-[font1]">L'étincelle</div>
                     <div className="text-[9vw] leading-[85%] uppercase font-[font1] flex items-center justify-center overflow-hidden">qui <div className="mb-4 h-[15vh] overflow-hidden bg-red-50 rounded-full "><Video /></div>génère</div>
                     <div className="text-[9vw] leading-[85%] uppercase font-[font1]">la créativité</div>
              </div>
       )
}

export default HomeHeroText
