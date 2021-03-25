import React, {useState} from 'react';
import styled from 'styled-components';
import {SkillsData} from './SkillsData'

function SkillsSection() {
    const [data] = useState(SkillsData)

    const Skills = ({mainImg, title, description}) => {
        return(
            <StyledCard>
                 <img src={mainImg} alt="Avatar"/>
            <StyledContainer>
                <h4>{title}</h4>
                <p>{description}</p>
            </StyledContainer>
            </StyledCard>
        )
    }
    return (
        <StyledMain>
            {data.map((item) => (
                <Skills title={item.title} mainImg={item.mainImg} description={item.description}/>
            ))}
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem;
    width: 100%;
`
const StyledCard = styled.div`
`

const StyledContainer = styled.div`
    h4, p{
        color: white;
        margin-top: 2rem;
    }
    h4{
        font-size: 4rem;
    }
    p{
        font-size: 3rem;
    }
    margin-bottom: 10rem;
`


export default SkillsSection
