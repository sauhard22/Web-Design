import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Input from './Input'

const Sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} />
                <h3>
                    Eli <span>Codes</span>
                </h3>
            </LogoWrapper>
                <Form>
                    <h3>Sign Up</h3>
                    <Input placeholder = "Full Name"/>
                    <Input placeholder = "Email" type="email"/>
                    <Input placeholder = "Password" type="password"/>
                    <Input placeholder = "Confirm Password" type="password"/>
                </Form>
        </Container>
    )
}

const Form = styled.form`
    h3{
        color : #666666;
        margin-bottom:2rem;
    }
`

const LogoWrapper = styled.div`
    img{
        height: 6rem;
    }
    h3{
        text-align:center;
        color: #FF8D8D;
    }
    span{
        color: #5dc399;
        font-weight:300;
    }
`

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(48px);
    background: rgba(255, 255, 255, 0.87);
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    padding: 0 2rem;
`

export default Sidebar
