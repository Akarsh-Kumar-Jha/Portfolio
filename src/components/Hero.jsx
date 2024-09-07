import React from 'react'
import { motion} from 'framer-motion';

const TextVariants={
initial:{
  left:-500,
  opacity:0,
},
animate:{
  left:["10%","30%"],
  opacity:1,
  transition:{
    duration:0.8,
    staggerChildren:0.6,
  }
}

}

const SmTextVariants={
  initial:{
    left:"0",
    opacity:0,
  },
  animate:{
    left:"50%",
    opacity:1,
    transition:{
      duration:0.8,
      staggerChildren:0.9,
    }
  }
  
  }
const SliderVariants = {
  initial: {
    x: "20%",
  },
  animate: {
    x: "-99%", 
    opacity: 1,
    transition: {
      duration: 50,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

<motion.div variants={SliderVariants} initial="initial" animate="animate" className='whitespace-nowrap overflow-x-auto overflow-y-hidden absolute md:bottom-[20%] z-10'>
  <h1 className='font-mono text-xl md:text-8xl text-gray-700 font-semibold opacity-60 inline-block '>"Transforming ideas into interactive masterpieces – Frontend Developer dedicated to blending design with flawless functionality.".</h1>
</motion.div>




function Hero() {
  return (
    <div className='relative h-screen bg-gradient-to-b from-[#0c0c1d] to-[#111132] flex flex-col md:flex-row overflow-x-hidden'>
        <motion.div variants={TextVariants} initial="initial" animate="animate" className="TextContainer hidden md:flex absolute left-[10%] transform -translate-x-1/2 bottom-[25%] md:bottom-[15%] md:h-[100%] flex-col justify-center items-center md:gap-[35px] gap-[25px] md:mx-0 mx-auto">

            <motion.h1 variants={TextVariants} className=' font-semibold text-[40px] md:text-4xl text-purple-800'>Akarsh Jha</motion.h1>
            <motion.h1 variants={TextVariants} className='text-4xl md:text-6xl text-center'>Front End Developer</motion.h1>
            <motion.div variants={TextVariants} className="buttons flex flex-col md:flex-row gap-2">
                <button className=' p-[10px] md:p-[20px] border rounded-[10px] bg-transparent mr-5'><a href="#Projects">See The Latest Works</a></button>
                <button className='p-[10px] md:p-[20px] border rounded-[10px] bg-transparent mr-5'><a href="#Contact">Contact Me</a></button>
            </motion.div>
        </motion.div>
        <div className="smTextContainer">
        <motion.div variants={SmTextVariants} initial="initial" animate="animate" className="TextContainer md:hidden absolute bottom-[25%] left-1/2 w-full transform -translate-x-1/2 md:h-[100%] flex flex-col justify-center items-center gap-[25px]">
  <motion.h1 variants={SmTextVariants} initial="initial" animate="animate" className='font-semibold text-[5vh] text-purple-800'>Akarsh Jha</motion.h1>
  <motion.h1 variants={SmTextVariants} initial="initial" animate="animate" className='text-[5vh] md:text-6xl text-center'>Front End Developer</motion.h1>
  <motion.div variants={SmTextVariants} initial="initial" animate="animate" className="buttons flex flex-col md:flex-row gap-2">
    <button className='p-[1.5vh] md:p-[20px] border rounded-[10px] bg-transparent mr-5'><a href="#Projects">See The Latest Works</a></button>
    <button className='p-[1.5vh] md:p-[20px] border rounded-[10px] bg-transparent mr-5'><a href="#Contact">Contact Me</a></button>
  </motion.div>
</motion.div>


        </div>
        <img className='absolute hidden md:inline-block w-[220px] h-[220px] top-[30px] md:w-[35%] md:top-0 md:left-[60%] md:h-[90%] z-50' src="https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/Profile.png?raw=true" alt="" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.8 } }} className='absolute md:hidden left-0 right-0 top-[-15px] mx-auto h-[35vh] w-[300px]' src="https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/Profile.png?raw=true" alt="" />









<motion.div variants={SliderVariants} initial="initial" animate="animate" className='whitespace-nowrap overflow-x-auto overflow-y-hidden absolute md:bottom-[20%] bottom-[15%] z-10'>
              <h1 className='font-mono text-2xl md:text-8xl text-gray-700 font-semibold opacity-40 inline-block'>"Transforming ideas into interactive masterpieces – Frontend Developer dedicated to blending design with flawless functionality.".</h1>
            </motion.div>
    </div>

    
  )
}

export default Hero