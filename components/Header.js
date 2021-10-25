import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

export default function Header() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
          setOffset(window.pageYOffset)
        }
    }, []);
       
    return (
        <DivHeader state={offset}>
            <DivTitle>
                <Title 
                    initial={{ opacity: 0, x: 0, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                        delay: .5,
                    }}
                >
                    MORNING NEWS
                </Title>
            </DivTitle>
        </DivHeader>
    )
}

const DivHeader = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("/assets/bg.jpg");
    background-size: ${props => props.state > 85 ? "100%" : "160%"};
    opacity: ${props => props.state > 85 ? 0.7 : 1};;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    transition: all ease-in 1.5s;
    @media (max-width: 768px) {
        background-size: ${props => props.state > 85 ? "250%" : "cover"};
    }
`;

const DivTitle = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled(motion.h1)`
    @import url('https://fonts.googleapis.com/css2?family=Besley&display=swap');
    margin: 0; 
    font-family: 'Besley', serif;
    font-size: 60px;
    border-bottom: 5px solid black;
    color: #fff;
    mix-blend-mode: overlay;
    text-align: center;
`;
