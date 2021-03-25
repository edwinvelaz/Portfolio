import React, {useState} from 'react';
import styled from 'styled-components';
import {SkillsData} from './SkillsData';
import {lineAnim, photoAnim, skillsAnim} from '../animations';
import {motion} from 'framer-motion';


function SkillsSection() {
    const [data] = useState(SkillsData)

    const Skills = ({mainImg, title, description}) => {
        return(
            <StyledCard>
                 <motion.img variants={photoAnim} src={mainImg} alt="Avatar"/>
            <StyledContainer>
                <motion.h4 variants={skillsAnim}>{title}</motion.h4>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <motion.p variants={skillsAnim}>{description}</motion.p>
            </StyledContainer>
            </StyledCard>
        )
    }

    return (
        <StyledMain>
            {data.map((item) => (
                <Skills title={item.title} mainImg={item.mainImg} description={item.description}  />
            ))}
        </StyledMain>
    )
}

const StyledMain = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem;
    width: 100%;
`
const StyledCard = styled(motion.div)`
`

const StyledContainer = styled(motion.div)`
    h4, p{
        color: white;
        margin-top: 2rem;
    }
    h4{
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    p{
        font-size: 3rem;
    }
    margin-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: yellow;
        margin-top: 1rem;
    }
`


export default SkillsSection
