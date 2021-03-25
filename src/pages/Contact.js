import React from 'react';
import ContactSection from '../components/ContactSection';
import {motion} from 'framer-motion';
import { pageAnimation } from '../animations';


const Contact = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <ContactSection />
        </motion.div>
    )
}

export default Contact;
