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
    height: 100vh;
    overflow: hidden;
    font-family: 'Inter', serif;
    box-sizing: border-box;
    padding: 30px 35px;
    background-color: rgb(244, 239, 237);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    text-align: left;

    @media (max-width: 1000px) {
        padding: 35px 40px 28px 40px;
    }
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 2.75rem;
    transition: all 0.35s ease-in-out;
    color: rgb(108,100,91);
    padding-bottom: 10px;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }

    @media (max-width: 1000px) {
        font-size: 3.65rem;
        margin-bottom: 8px;
    }
`;


const PageSix = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page7');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page5');
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [navigate]);

  return (
    <Container>
        <div>
            <Text>Like when you told me to close my eyes and follow you.</Text>
            <Text>I was a bit skeptical, but the tight grip your hand had on mine told me to trust you.</Text>
            <Text>When I finally opened my eyes, the only thing I could do was laugh.</Text>
            <Text>It was so different from anything I’d experienced before that I didn’t know how else to react.</Text>
        </div>
        <Text>No one’s given me such a beautiful gift before, and I truly mean that.</Text>
    </Container>
  )
}

export default PageSix