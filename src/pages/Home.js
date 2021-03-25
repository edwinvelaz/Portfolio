import React from 'react';
import HomeSection from '../components/HomeSection';
import {motion} from 'framer-motion';
import { pageAnimation } from '../animations';

const Home = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <HomeSection  />
        </motion.div>
    )
}

export default Home;
