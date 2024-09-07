import React, { useRef } from 'react'
import { motion,useScroll,useTransform } from 'framer-motion'

function Parallax({Type}) {
    const ref= useRef();
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["start start","end start"],
    })
    console.log(ref)
    const Y_bg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const Text_bg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  return (
    <div ref={ref} className="relative w-[100%] h-[100%] flex justify-center items-center" style={{ background: Type === "Services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)" }}>

        <motion.h1 style={{ y:Text_bg }} className='md:text-7xl text-[32px] font-bold font-serif'>{Type=="Services"?"What We Do":"What We Did"}</motion.h1>
        <motion.div className="absolute Mountains bg-[url(https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/mountains.png?raw=true)] h-screen w-full bg-bottom bg-contain md:bg-cover bg-no-repeat z-10">

        </motion.div>
        <motion.div style={{x:Y_bg}} className="absolute Stars bg-[url(https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/stars.png?raw=true)] h-screen w-full bg-bottom md:bg-cover z-8">

</motion.div>
<motion.div style={{y:Y_bg}} className="Planets absolute bg-[url(https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/planets.png?raw=true)] h-screen w-full bg-contain bg-no-repeat bg-bottom  md:bg-cover z-6">

</motion.div>
    </div>
  )
}

export default Parallax