import React from 'react';
import  { Link } from 'react-router-dom';
import StartSection from '../components/StartSection';
import {motion} from 'framer-motion';
import { pageAnimation } from '../animations';

function Start() {
    return (
        <motion.div
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <StartSection />
        </motion.div>
    )
}

export default Start
