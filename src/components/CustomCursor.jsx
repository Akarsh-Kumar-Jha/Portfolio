import React, { useState } from 'react';
import { motion } from 'framer-motion';
import _ from 'lodash';

function CustomCursor() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const updatePosition = _.throttle((e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    }, 16); // Limit updates to approximately 60 frames per second

    React.useEffect(() => {
        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <motion.div
            animate={{ x: position.x, y: position.y, transition: { duration: 0.2 } }}
            className='size-[50px] hidden md:block rounded-[50%] border border-white z-[99999] bg-transparent fixed'
        ></motion.div>
    );
}

export default CustomCursor;
