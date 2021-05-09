import React from 'react'
import styled from 'styled-components'

const input = ({type, placeholder}) => {
    return (
        <Container>
            <StyledInput placeholder = {placeholder && placeholder} type={type ? type : "text"} required autocomplete="off"/>
            <Status/>
        </Container>
    )
}

const StyledInput = styled.input`
    width: 200px;
    max-width: 350;
    min-width: 250;
    height: 38px;
    border: none;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 20px -10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover{
        transform: translateY(-3px);
    }
`

const Status = styled.div`
    height: 10px;
    width:10px;
    background-color: #9d9d9d;
    border-radius:10px;
    margin-left: 1rem;

    ${StyledInput}:focus + & {
        background-color: #ffa689;
    }

    ${StyledInput}:invalid + & {
        background-color: #fe2f75;
    }
`

const Container = styled.div`
    display:flex;
    justify-content:center; 
    align-items:center;
`

export default input
