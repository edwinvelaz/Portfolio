import React from 'react';
import SkillsSection from '../components/SkillsSection';
import {motion} from 'framer-motion';
import { pageAnimation } from '../animations';


const Skills = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <SkillsSection />
        </motion.div>
    )
}

export default Skills;
