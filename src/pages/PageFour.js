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
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30px 35px;
    background-color: rgb(244, 239, 237);

    @media (max-width: 1000px) {
        padding: 30px 38px;
    }
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 3.25rem;
    transition: all 0.35s ease-in-out;
    padding-bottom: 7px;
    color: rgb(108,100,91);

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }

    @media (max-width: 1000px) {
        font-size: 5rem;
        line-height: 1.3;
    }
`;

const Happy = styled.span`
    color: rgb(215,165,150);
`;


const PageFour = () => {
    const navigate = useNavigate();
    const viewportHeight = window.innerHeight;

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page5');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page3');
        }
    };

    const handleTouchEnd = () => {
        navigate('/page5');
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
        <Text>
            Looking back on our moments together always fills me with <Happy>happiness.</Happy>
        </Text>
        <Text>
            Sometimes I’ll be thinking about you and a smile will creep
            on my face without me even realizing it.
        </Text>
    </Container>
  )
}

export default PageFour