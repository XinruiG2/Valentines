import React from 'react'
import { styled, keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FadeInContainer = styled.div`
    opacity: 0;
    animation: fadeIn 0.75s forwards;
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 0.75s forwards;
    width: 100vw;
    height: ${props => props.height}px;
    background-color: rgb(244,239,237);
    color: rgb(108,100,91);
    font-family: 'Inter', serif;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    padding: 32px 38px;
    box-sizing: border-box;

    @media (max-width: 1000px) {
        padding: 40px 45px;
    }
`;

const HeaderText = styled.div`
    font-weight: 800;
    font-size: 6rem;
    transition: all 0.35s ease-in-out;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }

    @media (max-width: 1000px) {
        font-size: 8rem;
        line-height: 1.25;
    }
`;

const StyledH2 = styled.div`
  width: 100%;
  text-align: right;
  border-bottom: 1.5px solid #000;
  line-height: 0.1em;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    margin-bottom: 52px;
  }
`;

const LastPage = () => {

    const navigate = useNavigate();
    const viewportHeight = window.innerHeight;

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            navigate('/page11');
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [navigate]);

    return (
        <Container height={viewportHeight}>
            <StyledH2></StyledH2>
            <HeaderText style={{ color: 'rgb(178,95,105)' }}>Yours always,</HeaderText>
            <HeaderText style={{paddingRight: '42px', color: 'rgb(200,150,135)'}}>Rui</HeaderText>
        </Container>
    )
}

export default LastPage