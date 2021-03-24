import React, {useState} from 'react'
import styled from 'styled-components'

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
      }
    return (
        <StyledContact>
            <h1>Send me a message!</h1>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
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
    h1{
        margin-bottom: 6rem;
        font-size: 8rem;
    }
    button{
        font-size: 1rem;
        background: gray;
        width: 100%;
        height: 5vh;
    }
`

const StyledName = styled.div`
    label{
        font-size: 4rem;
    }
    input {
        width: 100%;
        height: 5vh;
        font-size: 20px;
    }
`

const StyledEmail = styled.div`
    label{
        font-size: 4rem;
    }
    input {
        width: 100%;
        height: 5vh;
        font-size: 20px;
    }
`

const StyledMessage = styled.div`
    min-height:10vh;
    width: 100%;
    label{
        font-size: 4rem;
    }
    input {
        font-size: 20px;
        height: 10vh;
    }
`

export default ContactSection
