import React from 'react';
import styled from 'styled-components';
import  { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link id='logo' to="/home"><FontAwesomeIcon icon={faHome}/></Link>
            </h1>
            <ul>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Me</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 15rem;
    background: black;
    position: sticky;
    top: 0;
    z-index:10;
    font-family: 'Lobster';
    font-style: normal;
    font-weight: 400;
    a {
        color: white;
        text-decoration: none;
        font-size: 2rem;
    }
    a:hover {
        color: red;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 2.5rem;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`

export default Nav;
