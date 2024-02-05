import { React, useEffect } from 'react'
import { styled, keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom';

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
    position: relative;
    overflow: hidden;
    font-family: 'Inter', serif;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: rgb(244, 239, 237);
`;

const MiddleColumn = styled.div`
    width: 43%;
    height: 100%;
    background-color: rgb(224, 219, 217);
    position: absolute;

    @media (max-width: 1000px) {
        width: 50%;
    }
`;

const TextContainer = styled.div`
    box-sizing: border-box;
    text-align: center;
    position: absolute;

    @media (max-width: 1000px) {
        padding: 35px 90px;
    }
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 3.3rem;
    transition: all 0.35s ease-in-out;
    padding-bottom: 7px;
    color: rgb(108,100,91);

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }

    @media (max-width: 1000px) {
        font-size: 4.5rem;
        line-height: 1.35;
    }
`;



const PageThree = () => {
    const navigate = useNavigate();
    const viewportHeight = window.innerHeight;

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page4');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page2');
        }
    };

    const handleTouchEnd = () => {
        navigate('/page4');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('touchend', handleTouchEnd);
    };
    }, [navigate]);

  return (
    <Container height={viewportHeight}>
        <MiddleColumn>
        </MiddleColumn>
        <TextContainer>
            <Text>It’s rare for me to feel so close to someone,</Text>
            <Text>even when I've known them for a long time,</Text>
            <Text>but you managed to be an exception</Text>
        </TextContainer>
    </Container>
  )
}

export default PageThree