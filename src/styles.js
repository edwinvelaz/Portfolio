import styled from 'styled-components';
import './App.css';
import {motion} from 'framer-motion';


export const StyledMain = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    flex-direction: column;
    h1{
        font-size: 3.5rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
    h2{
        font-size: 2.5rem;
        margin-bottom: 1.3rem;
    }
    flex-wrap: wrap;
    img{
        border-radius: 40%;
    }
    h3{
        font-weight: lighter;
        line-height: 2;
        font-size: 3rem;
    }
    font-family: 'Yanone Kaffeesatz';
    font-style: normal;
    font-weight: 400;
`

export const StyledDescription = styled(motion.div)`
    border: 1px solid white;
    border-radius: 1%;
    padding: 2rem;
    margin-top: 1rem;
`

