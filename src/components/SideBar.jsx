import React, { useState } from 'react';
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion, useAnimation } from 'framer-motion';

function SideBar() {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();

  const handleToggle = () => {
    setOpen(prev => !prev);
    controls.start(open ? "closed" : "open");
  };

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        duration: 1
      }
    },
    closed: {
      clipPath: "circle(22px at 42px 50px)",
      transition: {
        duration: 0.5
      }
    }
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    },
    closed: {
      opacity: 0,
      y: 50 // Move child down to hide it
    }
  };

  return (
    <motion.div className='flex flex-col items-center justify-center bg-white text-black'>
      <motion.div
        animate={controls}
        initial="closed"
        variants={variants}
        className=" z-[51] bg fixed top-0 left-0 bottom-0  w-[300px] md:w-[400px] bg-white"
      >
        <motion.div className="links absolute w-full h-full flex flex-col justify-center items-center gap-[20px]"
          variants={{
            open: {
              transition: {
                staggerChildren: 0.4
              },
            },
            closed:{
              transition:{
                staggerChildren:0.4,
                staggerDirection:-1,
              }
            }
          }}
        >
          <motion.div variants={childVariants}>
            <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='text-3xl'><a href="#HomePage">Home</a></motion.h2>
          </motion.div>
          <motion.div variants={childVariants}>
            <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='text-3xl'><a href="#Services">Services</a></motion.h2>
          </motion.div>
          <motion.div variants={childVariants}>
            <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='text-3xl'><a href="#Contact">Contact</a></motion.h2>
          </motion.div>
          <motion.div variants={childVariants}>
            <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='text-3xl'><a href="#Projects">Projects</a></motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.button
        onClick={handleToggle}
        className='z-[51] md:w-[50px] md:h-[50px] w-[25px] h-[25px]   rounded-[50%] fixed md:top-[25px] md:left-[25px] top-[34px] left-[28px] bg-transparent border-none md:text-4xl text-3xl'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {open ? (
          <motion.div transition={{ duration: 0.2 }}>
            <IoClose />
          </motion.div>
        ) : (
          <motion.div transition={{ duration: 0.2 }}>
            <MdMenuOpen />
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
}

export default SideBar;
