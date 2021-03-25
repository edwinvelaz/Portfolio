import React, {useState} from 'react';
import { StyledMain } from '../styles';
import {WorkData} from './WorkData';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {lineAnim, photoAnim, fade} from '../animations';
import {motion} from 'framer-motion';

library.add(faGithub)


function WorkSection() {
    const [workData] = useState(WorkData)

    const Work = ({title, mainImg, description, url}) => {
        return(
            <StyledWork>
            <motion.h1 variants={fade}>{title}</motion.h1>
            <motion.img variants={photoAnim} src={mainImg} alt=""/>
            <motion.p variants={fade}>{description}</motion.p>
            <motion.h2 variants={fade}>Click here!</motion.h2>
            <motion.div variants={fade}>
            <FontAwesomeIcon icon={faArrowDown} size='6x'/>
            </motion.div>
            <motion.a target='_blank' variants={fade} href={url}><FontAwesomeIcon icon={faGithub} size='6x' /></motion.a>
            <motion.div variants={lineAnim} className='line'></motion.div>
            </StyledWork>
        )
    }

    return (
        <motion.div>
            {workData.map((item) => (
                <Work title={item.title} mainImg={item.mainImg} description={item.description} url={item.url}/>
            ))}
        </motion.div>
    )
}


const StyledWork = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    flex-direction: column;
    h2{
        color: white;
        font-size: 4rem;
        margin-top: 2rem;
    }
    h1{
        margin-bottom: 2rem;
        font-size: 5rem;
    }
    p{
        font-size: 2rem;
        margin-top: 2rem;
    }
    a{
        margin-top: 2rem;
    }
    .line{
        height: 0.5rem;
        background: white;
        margin-top: 5rem;
    }
`


export default WorkSection
