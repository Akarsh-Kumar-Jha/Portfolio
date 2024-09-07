import React from 'react'
import SideBar from './SideBar'

function NavBar() {
  return (
    <div className='md:h-[100px] h-[80px] flex justify-between'>
        {/* sidebar */}
        <div>
        <SideBar/>
        </div>
        <div className=" wrapper h-[100%] w-[95%] m-auto flex items-center justify-between">
        <span className='font-bold text-[18px] md:text-[32px] mx-auto'>
    Akarsh Jha
</span>
<div className="social flex gap-[10px] md:gap-[30px]">
<a href="https://github.com/Akarsh-Kumar-Jha"> <img className='h-[20px] w-[20px] md:h-[25px] md:w-[25px]' src="https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/icons8-github-48.png?raw=true" alt="" /></a>
<a href="https://www.linkedin.com/in/akarsh-kumar-178b19297/"> <img className='h-[20px] w-[20px] md:h-[25px] md:w-[25px]' src="https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/icons8-linkedin-48.png?raw=true" alt="" /></a>
<a href="https://www.instagram.com/akarshjha83/"> <img className='h-[20px] w-[20px] md:h-[22px] md:w-[22px]' src="https://github.com/Akarsh-Kumar-Jha/Portfolio/blob/main/Images/instagram.png?raw=true" alt="" /></a>
    
</div>
        </div>


    </div>
  )
}

export default NavBar