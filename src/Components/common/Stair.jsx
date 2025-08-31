import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
const Stair = (props) => {
       const Currentpath = useLocation().pathname
       console.log(Currentpath)
       const Stairref = useRef(null)
       const Homeref = useRef(null)
       useGSAP(() => {
              const tl = gsap.timeline()
              tl.to(Stairref.current, {
                     display: "block"
              })
              tl.to(".Stair", {
                     height: "100%",
                     duration: 0.3,
                     stagger: {
                            amount: -0.3,
                     },
              })
              tl.to(".Stair", {
                     y: "100%",
                     duration: 0.2,

                     stagger: {
                            amount: -0.2,
                     },
              })
              tl.to(Stairref.current, {
                     display: "none"
              })
              tl.to(".Stair", {
                     y: "0%",
              })
              gsap.from(Homeref.current, {
                     opacity: 0,
                     delay: 1.2,
                     scale: 1.2,



              }

              )

       }, [Currentpath])
       return (
              <div className="">
                     <div ref={Stairref} className="h-screen w-full fixed  z-20 top-0 bg-white overflow-hidden">
                            <div className="h-full w-full fixed flex z-20 top-0  ">
                                   <div className="Stair w-1/7 h-[0%] bg-black"></div>
                                   <div className="Stair w-1/7 h-[0%] bg-black"></div>
                                   <div className="Stair w-1/7 h-[0%] bg-black"></div>
                                   <div className="Stair w-1/7 h-[0%] bg-black"></div>
                                   <div className="Stair w-1/7 h-[0%] bg-black"></div>
                                   <div className="Stair w-1/7 h-[0%] bg-black"></div>
                                   <div className="Stair w-1/7 h-[0%] bg-black"></div>
                            </div>
                     </div>
                     <div ref={Homeref}>
                            {props.children}
                     </div>
              </div>
       )
}

export default Stair
