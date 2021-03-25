import React, {useState} from 'react'
import styled from 'styled-components'
import  { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons' 

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
            <h1>Send me a message!</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            <StyledName>
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} onChange={onNameChange} />
            </StyledName>
            <StyledEmail>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange} />
            </StyledEmail>
            <StyledMessage>
                <label htmlFor="message">Message</label>
                <textarea className="form-control" value={message} onChange={onMessageChange} />
            </StyledMessage>
            <button type="submit">Submit</button>
            </form>
            <StyledFooter>
                <h1>Connect With Me!</h1>
                <StyledSocial>
                    <a target='_blank' href="https://www.facebook.com/edwin.velazquez3" className='facebook'>        
                    <FontAwesomeIcon size='6x' icon={faFacebookSquare} />
                    </a>
                    
                    <a target='_blank' href="https://www.instagram.com/itsyaboyblink/?hl=en"
                    className='instagram'>   
                    <FontAwesomeIcon size='6x' icon={faInstagram} />
                    </a>
                    
                    <a target='_blank' href="https://www.linkedin.com/in/edwin-velazquez-2a61771b4/"
                    className='linkedin'>
                    <FontAwesomeIcon size='6x' icon={faLinkedin} />
                    </a>

                    <a target='_blank' href="https://twitter.com/itsyaboyblink"
                    className='twitter'>
                    <FontAwesomeIcon size='6x' icon={faTwitter} />
                    </a>
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
