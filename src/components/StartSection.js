import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function StartSection() {
    return (
        <StyledStart>
            <Link to='/home'>
                <button>Start</button>
            </Link>
        </StyledStart>
    )
}

const StyledStart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    width: 100%;
    button {
        height: 4rem;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        width: 250px;
        background: gray;
        border-radius: 10%;
    }
`

export default StartSection
