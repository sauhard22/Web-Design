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
                    <h3>Sign Un</h3>
                    <Input placeholder = "Full Name"/>
                    <Input placeholder = "Email" type="email"/>
                    <Input placeholder = "Password" type="password"/>
                    <Input placeholder = "Confirm Password" type="password"/>
                    <button>Sign Up</button>
                </Form>
                <div>
                   <Terms>
                   By signing up, I agree to the Privacy Policy <br/>and Terms of Service
                   </Terms> 
                   <h4>
                    Already have an account? <span>Sign In</span>
                   </h4>
                </div>
        </Container>
    )
}

const Terms = styled.p`
    padding: 0 1rem;
    text-align: center;
    font-size: 12px;
    color: #808080;
    font-weight:300;

`
const Form = styled.form`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    h3{
        color : #666666;
        margin-bottom:2rem;
    }

    button{
        width: 375px;
        max-width: 350;
        min-width: 250;
        height: 40px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 20px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #70edb8;
        color: #ffff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;
        margin: 2rem 0;

    &:hover{
        transform: translateY(-3px);
    }
    }
`

const LogoWrapper = styled.div`
    img{
        height: 8.5rem;
    }
    h3{
        text-align:center;
        color: #FF8D8D;
        font-size: 2rem;
    }
    span{
        color: #5dc399;
        font-weight:300;
    }
`

const Container = styled.div`
    min-width: 520px;
    backdrop-filter: blur(48px);
    background: rgba(255, 255, 255, 0.8);
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    padding: 0 2rem;

    h4{
        color: #808080;
        font-weight: bold;
        font-size: 15px;
        margin-top: 2rem;
        span{
            color: #ff8d8d;
            cursor: pointer;
        }
    }

    @media(max-width: 900px){
        width: 100vw;
        position: absolute;
        padding: 0;
    }
`

export default Sidebar
