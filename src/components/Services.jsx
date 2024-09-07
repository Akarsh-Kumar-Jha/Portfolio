import React, { useRef } from 'react'
import { motion,useInView } from 'framer-motion'

function Services() {
    const variants={
        initial:{
            x:-200,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1.5,
                staggerChildren: 0.8,
            }
        }
    }

    const ref = useRef();
    let isInView = useInView(ref,{
        margin:"-120px",
    })
  return (
    <motion.div initial="initial" animate={isInView && "animate"} ref={ref} className='flex flex-col justify-between py-6 gap-4 h-screen '>
<div className="textContainer self-end flex flex-row md:gap-[20px] gap-[10px] justify-center items-center w-[50%]">
<p className='font-semibold text-gray-500 text-right text-[2vh]'>I focus On helping your brand grow <br /> and move forward</p>
<hr className='w-[62%]' />

</div>
<motion.div variants={variants} className="tittleContainer mx-auto flex flex-col gap- justify-center items-center max-w-[1366px]">
    <div className="tittle flex flex-row md:gap-5 gap-2 justify-center items-center">
        <img className="md:w-[260px] md:h-[80px] w-[100px] h-[5.5vh] object-top rounded-[40px]" src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1 className='md:text-[80px] text-[2.5vh] text-gray-500 font-light'><motion.b whileHover={{color:"orange"}} className='text-white font-bold'>Unique</motion.b> Ideas</h1>
    </div>
    <div className="tittle flex flex-row md:gap-5 gap-2 justify-center items-center">
        <h1 className='md:text-[80px] text-[2.5vh] text-gray-500 font-light'><motion.b whileHover={{color:"orange"}} className='text-white font-bold'>For your</motion.b> business</h1>
        <motion.button whileHover={{rotate:"-2deg",scale:1.1}} className='md:w-[200px] md:h-[70px] w-[100px] h-[5.5vh] bg-yellow-600 rounded-[40px] p-2 md:text-lg text-sm'>What We Do</motion.button>
    </div>
</motion.div>
<div className="smtextContainer flex md:hidden flex-col gap-2 w-full max-h-[65%] px-2">
<div className="boxContainer1 flex flex-row w-[100%] max-h-[100%] gap-2">
<div className="box relative w-[50%] border-2 h-[30vh] rounded-xl shadow-xl shadow-black flex flex-col">
  <h1 className='text-[2.5vh] font-semibold mx-auto'>Front End Development</h1>
  <p className='text-[1.5vh] font-medium text-center mt-1'>Crafting visually stunning websites with React, ensuring your online presence mirrors your brand and yields results. From concept to launch, I utilize UI/UX best practices to create engaging sites that drive conversions and captivate users.</p>
  <button className='bg-yellow-400 absolute w-full bottom-0 h-[40px] p-2 text-semibold text-black text-[15px] rounded-lg'>
    Go
  </button>
</div>

<div className="box relative w-[50%] border-2 h-[30vh] rounded-xl shadow-xl shadow-black flex flex-col">
<h1  className='text-[2.5vh] font-semibold mx-auto text-wrap'>Brand Identity <span>Development</span></h1>
        <p className='text-[1.5vh] font-medium text-center mt-2'>I create captivating React websites, aligning with your brand identity to drive results. Employing top UI/UX practices, I craft engaging experiences from conception to launch, maximizing conversions and user engagement.</p>
        <button className='bg-yellow-400 absolute bottom-0 h-[40px] p-2 w-full text-semibold text-black text-[15px] rounded-lg'>
        Go
    </button>
</div>
</div>

<div className="boxContainer2 flex flex-row w-[100%] max-h-[100%] gap-2">
<div className="box relative w-[50%] border-2 h-[30vh] rounded-xl shadow-xl shadow-black flex flex-col">
<h1  className='text-[2.5vh] font-semibold mx-auto'>E-commerce Solutions</h1>
        <p className='text-[1.5vh] font-medium text-center mt-[2px]'>Empowering your online business with robust e-commerce solutions tailored to your specific needs. From customizing shopping experiences to optimizing checkout processes, I ensure seamless transactions and enhanced user satisfaction, driving growth and profitability.</p>
        <button className='bg-yellow-400 absolute w-full  bottom-0 h-[40px] p-2 text-semibold text-black text-[15px] rounded-lg'>
        Go
    </button>
</div>
<div className="box relative w-[50%] border-2 h-[30vh] rounded-xl shadow-xl shadow-black flex flex-col">
<h1  className='text-[2.5vh] font-semibold mx-auto'>Responsive Design</h1>
        <p className='text-[1.5vh] font-medium text-center mt-2'>Ensuring your website looks exceptional and functions flawlessly across all devices and screen sizes. With a focus on responsive design principles, I guarantee that your website provides a consistent and optimal user experience, regardless of the device used.</p>
        <button className='bg-yellow-400 absolute w-full  bottom-0 h-[40px] p-2 text-semibold text-black text-[15px] rounded-lg'>
        Go
    </button>
</div>
</div>
</div>
<motion.div variants={variants} className="listContainer hidden max-w-[1366px] border-2 md:flex flex-row flex-wrap mx-auto">
    <motion.div whileHover={{backgroundColor:"lightgray",color:"black",fontSize:"18px",transition: { duration: 0.6 }}} className="relative box md:h-[380px] md:w-[300px] w-[50%] py-2 px-1 text-center border-r-2 flex flex-col gap-6 items-center">
        <h1  className='md:text-[20px] text-[15px] text-gray-400 font-semibold'>Front End Development</h1>
        <p className='w-[80%] font-medium'>Crafting visually stunning websites with React, ensuring your online presence mirrors your brand and yields results. From concept to launch, I utilize UI/UX best practices to create engaging sites that drive conversions and captivate users.</p>
        <a href="https://foodwave2.000webhostapp.com/" className='block absolute bottom-5 w-[80%] bg-yellow-500 h-[40px] p-2 text-semibold text-black text-[15px]'>
  Go
</a>


    </motion.div>
    <motion.div whileHover={{backgroundColor:"lightgray",color:"black",fontSize:"17px",fontWeight:"800",transition: { duration: 0.6 }}} className="relative box md:h-[380px] md:w-[300px] w-[50%] py-2 px-1 text-center border-r-2 flex flex-col gap-6 items-center">
        <h1  className='md:text-[20px] text-gray-400 font-semibold'>Brand Identity Development</h1>
        <p className='w-[80%] font-medium'>I create captivating React websites, aligning with your brand identity to drive results. Employing top UI/UX practices, I craft engaging experiences from conception to launch, maximizing conversions and user engagement.</p>
        <a href="https://foodwave2.000webhostapp.com/" className='block absolute bottom-5 w-[80%] bg-yellow-500 h-[40px] p-2 text-semibold text-black text-[15px]'>
  Go
</a>
    </motion.div>
    <motion.div whileHover={{backgroundColor:"lightgray",color:"black",fontSize:"17px",transition: { duration: 0.6 }}} className="relative box md:h-[380px] md:w-[300px] w-[50%]] py-2 px-1 text-center border-r-2 flex flex-col gap-6 items-center">
        <h1  className='md:text-[20px] text-[15px] text-gray-400 font-semibold'>E-commerce Solutions</h1>
        <p className='w-[80%] font-medium'>Empowering your online business with robust e-commerce solutions tailored to your specific needs. From customizing shopping experiences to optimizing checkout processes, I ensure seamless transactions and enhanced user satisfaction, driving growth and profitability.</p>
        <a href="https://foodwave2.000webhostapp.com/" className='block absolute bottom-5 w-[80%] bg-yellow-500 h-[40px] p-2 text-semibold text-black text-[15px]'>
  Go
</a>
    </motion.div>
    <motion.div whileHover={{backgroundColor:"lightgray",color:"black",fontSize:"18px",transition: { duration: 0.6 }}} className="relative box md:h-[380px] md:w-[300px] w-[50%] py-2 px-1 text-center border-r-2 flex flex-col gap-6 items-center">
        <h1  className='md:text-[20px] text-[15px] text-gray-400 font-semibold'>Responsive Design</h1>
        <p className='w-[80%] font-medium'>Ensuring your website looks exceptional and functions flawlessly across all devices and screen sizes. With a focus on responsive design principles, I guarantee that your website provides a consistent and optimal user experience, regardless of the device used.</p>
        <a href="https://foodwave2.000webhostapp.com/" className='block absolute bottom-5 w-[80%] bg-yellow-500 h-[40px] p-2 text-semibold text-black text-[15px]'>
  Go
</a>
    </motion.div>
    
</motion.div>
    </motion.div>
  )
}

export default Services