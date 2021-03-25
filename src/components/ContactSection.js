import React, {useState} from 'react'
import styled from 'styled-components'
import  { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {titleAnim, fade} from '../animations';
import {motion} from 'framer-motion';

library.add(faFacebookSquare)


function ContactSection() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const onNameChange = (event) => {
        setName(event.target.value)
      }
    
    const onEmailChange = (event) => {
        setEmail(event.target.value)
      }
    
     const onMessageChange = (event) => {
        setMessage(event.target.value)
      }
    
      const handleSubmit = (event) => {
          event.preventDefault();
        setName('')
        setEmail('')
        setMessage('')
      }
    return (
        <StyledContact>
            <motion.h1 variants={titleAnim}>Send me a message!</motion.h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            <StyledName>
                <motion.label variants={fade} htmlFor="name">Name</motion.label>
                <motion.input variants={fade} type="text" className="form-control" value={name} onChange={onNameChange} />
            </StyledName>
            <StyledEmail>
                <motion.label variants={fade} htmlFor="exampleInputEmail1">Email address</motion.label>
                <motion.input variants={fade} type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange} />
            </StyledEmail>
            <StyledMessage>
                <motion.label variants={fade} htmlFor="message">Message</motion.label>
                <motion.textarea variants={fade}className="form-control" value={message} onChange={onMessageChange} />
            </StyledMessage>
            <motion.button variants={fade}type="submit">Submit</motion.button>
            </form>
            <StyledFooter>
                <motion.h1 variants={fade}>Connect With Me!</motion.h1>
                <StyledSocial>
                    <motion.a variants={fade} target='_blank' href="https://www.facebook.com/edwin.velazquez3" className='facebook'>        
                    <FontAwesomeIcon size='6x' icon={faFacebookSquare} />
                    </motion.a>
                    
                    <motion.a variants={fade} target='_blank' href="https://www.instagram.com/itsyaboyblink/?hl=en"
                    className='instagram'>   
                    <FontAwesomeIcon size='6x' icon={faInstagram} />
                    </motion.a>
                    
                    <motion.a variants={fade} target='_blank' href="https://www.linkedin.com/in/edwin-velazquez-2a61771b4/"
                    className='linkedin'>
                    <FontAwesomeIcon size='6x' icon={faLinkedin} />
                    </motion.a>

                    <motion.a variants={fade} target='_blank' href="https://twitter.com/itsyaboyblink"
                    className='twitter'>
                    <FontAwesomeIcon size='6x' icon={faTwitter} />
                    </motion.a>
                </StyledSocial>
            </StyledFooter>
        </StyledContact>
    )
}

const StyledContact = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;
    padding: 5rem 10rem;
    h1{
        margin-bottom: 6rem;
        font-size: 8rem;
    }
    button{
        font-size: 1rem;
        background: green;
        width: 100%;
        height: 5vh;
    }
`

const StyledName = styled.div`
    margin-bottom: 1.5rem;
    label{
        font-size: 4rem;
    }
    input {
        width: 100%;
        height: 5vh;
        font-size: 30px;
        margin-bottom: 1rem;
    }
`

const StyledEmail = styled.div`
    margin-bottom: 1.2rem;
    label{
        font-size: 4rem;
    }
    input {
        width: 100%;
        height: 5vh;
        font-size: 30px;
        margin-bottom: 1rem;
    }
`

const StyledMessage = styled.div`
    label{
        font-size: 4rem;
    }
    textarea {
        font-size: 20px;
        height: 10vh;
        width: 100%;
        margin-bottom: 2rem;
        margin-top: .5rem;
    }
`

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    h1{
        font-size: 4rem;
        margin-bottom: 5rem;
        align-self: center;      
    }
    width: 100%;
`
const StyledSocial = styled.div`
    /* border: 2px solid gray; */
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    .facebook{
        color: #4267B2;
    }
    .instagram{
        color: #C2239E;
    }
    .twitter{
        color: lightblue;
    }
    .linkedin{
        color: #0E76A8;
    }
`

export default ContactSection
