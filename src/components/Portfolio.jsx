import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Food Order Web",
        img: "https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/FoodWave2.0.png?raw=true",
        url:"https://foodwave2.000webhostapp.com/",
        desc: "FoodWave 2.0. A Front End Project. Where ordering food meets elegance! 🍽️✨ Explore our upgraded user interface crafted with HTML, TAILWIND-CSS, and JS for a seamless dining experience. Dive into deliciousness with FoodWave 2.0 today!"
    },
    {
        id: 2,
        title: "Music Player",
        img: "https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/MusicPlayer.jpeg?raw=true",
        url:"https://akarsh-kumar-jha.github.io/SimpleMusicPlayer/",
        desc: "🔊 This project features a collection of 6 handpicked songs to enjoy, with more tunes planned for the future. Key Features: 1. Play/Pause functionality. 2. Backward and Forward buttons to navigate through the playlist effortlessly. 3. Purely front-end for easy access and compatibility across devices. 🚀 Building this project was a fantastic learning experience, and I'm excited to continue adding more songs and features in the future."
    },
    {
        id: 3,
        title: "News Web",
        img: "https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/NewsWeb.png?raw=true",
        url:"https://github.com/Akarsh-Kumar-Jha/FRESH-NEWS360",
        desc: "Introducing a news website project, crafted using HTML, Tailwind CSS, and JavaScript, seamlessly integrated with the NewsAPI. This project aggregates real-time news content from diverse sources worldwide, delivering up-to-the-minute updates on a variety of topics."
    },
    {
        id: 4,
        title: "FoodWave",
        img: "https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/FoodWave.png?raw=true",
        url:"https://akarsh-kumar-jha.github.io/FoodWave/",
        desc: "Introducing FoodWave,it's a Front end Project!.FoodWave is your go-to destination for ordering delicious meals online with ease. Our website, crafted with HTML, Tailwind CSS, and JavaScript, offers a seamless experience for users to explore a variety of dishes, add them to their carts, and apply exciting coupons for added savings."
    }
];

const Single = ({ item }) => {
    let ref = useRef();
    const {scrollYProgress} = useScroll({target:ref,})
    let Y = useTransform(scrollYProgress,[0,1],[-10,90]);
    return <motion.section id='Projects' className='flex justify-center items-center' ref={ref}>
        <motion.div style={{y:Y}} variants={{initial:{opacity:0},animate:{opacity:1,transition:{duration:1.5}, staggerChildren: 0.8,}}} initial="initial" whileInView="animate" className="container flex md:flex-row flex-col md:gap-[60px] gap-[50px] justify-center items-center mx-auto px-2">
        <a href={item.url} target="_blank">
    <img className='md:h-[400px] md:w-[800px] h-[30vh] w-full rounded-xl shadow-xl shadow-black hover:translate-y-[-5px] duration-1000' src={item.img} alt="" />
</a>

<div className="textContainer flex flex-col gap-1 px-1">
    <h1 className='md:text-[32px] text-[2.5vh] font-semibold text-orange-500'>{item.title}</h1>
    <p className='md:text-[16px] text-[1.5vh] font-semibold tracking-normal text-gray-500'>{item.desc}</p>

</div>
        </motion.div>

     </motion.section>;
};

function Portfolio() {

    let ref = useRef();
const {scrollYProgress} = useScroll({target:ref,
    offset:["end end", "start start"]})
let ScaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
})

    return (
        <motion.div ref={ref} className="portfolio relative">
          <div className="progress sticky top-0 left-0 pt-[50px] text-center text-orange-500">
          <h1 className='text-[5vh] font-semibold'>Featured Works</h1>
            <motion.div style={{scaleX:ScaleX}} className="ProgressBar h-[10px] bg-white rounded-xl">

            </motion.div>

          </div>
            {
                items.map(item => (
                    <Single item={item} key={item.id} />
                ))
            }
        </motion.div>
    );
}

export default Portfolio;
