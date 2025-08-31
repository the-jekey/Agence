import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Agence = () => {
       gsap.registerPlugin(ScrollTrigger)
       const Imgref = useRef(null)
       const Imageref = useRef(null)

       const Imagearry = [
              'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
              'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',

       ]

       useGSAP(() => {
              gsap.to(Imgref.current, {

                     scrollTrigger: {
                            trigger: Imgref.current,
                            start: "top 33%",
                            end: "top -80%",
                            scrub: true,
                            pin: true,
                            pinSpacing: true,
                            pinReparent: true,
                            pinType: "transform",
                            anticipatePin: 1,
                            onUpdate: function (elem) {
                                   let imgindex;
                                   if (elem.progress < 1) {
                                          imgindex = Math.round(elem.progress * Imagearry.length)
                                   }
                                   else {
                                          imgindex = Imagearry.length - 1
                                   }
                                   Imageref.current.src = Imagearry[imgindex]

                            }

                     }
              })
       })
       return (
              <div className="bg-black w-full h-full py-0.5">

                     <div className="section1 ">

                            <div ref={Imgref} className=" h-80 absolute top-60 left-[30vw] w-60 rounded-3xl overflow-hidden ">
                                   <img ref={Imageref} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
                            </div>
                            <div className='relative font-[font2]'>
                                   <div className="mt-[53vh]">
                                          <h1 className='text-[18vw] text-center  uppercase leading-[85%]'>Soixan7e <br />
                                                 Douze</h1>
                                   </div>
                                   <div className="text-4xl leading-[100%] tracking-tighter pl-[45%] ">
                                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                                   </div>
                            </div>
                     </div>
                     <div className="section2 h-screen">


                     </div>
              </div>
       )
}

export default Agence
