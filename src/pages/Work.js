import React from 'react';
import WorkSection from '../components/WorkSection';
import {motion} from 'framer-motion';
import { pageAnimation } from '../animations';

const Work = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <WorkSection />
        </motion.div>
    )
}

export default Work;
