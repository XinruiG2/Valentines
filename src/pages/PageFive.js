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
    overflow: hidden;
    font-family: 'Inter', serif;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 35px;
    background-color: rgb(244, 239, 237);

    @media (max-width: 1000px) {
        padding: 65px 40px;
    }
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 4rem;
    transition: all 0.35s ease-in-out;
    color: rgb(108,100,91);

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }

    @media (max-width: 1000px) {
        font-size: 5.75rem;
        text-align: center;
    }
`;

const CustomText = styled.div`
    font-weight: 800;
    font-size: 4rem;
    transition: all 0.35s ease-in-out;
    color: rgb(108,100,91);
    letter-spacing: 0.5rem;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }

    @media (max-width: 1000px) {
        font-size: 5.75rem;
        line-height: 1.4;
        letter-spacing: 1rem;
    }
`;

const MiddleContainer = styled.div`
    width: 100vw;
    background-color: rgb(224, 219, 217);
    text-align: center;
    box-sizing: border-box;
    padding: 20px;

    @media (max-width: 1000px) {
        padding: 30px 20px;
        margin-bottom: 40px;
    }
`;


const PageFive = () => {
    const navigate = useNavigate();
    const viewportHeight = window.innerHeight;

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page6');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page4');
        }
    };

    const handleTouchEnd = () => {
        navigate('/page6');
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
            You’ve introduced me to so many
        </Text>
        <MiddleContainer>
            <CustomText>
                exciting<br/>and<br/>beautiful
            </CustomText>
        </MiddleContainer>
        <Text>
            experiences.
        </Text>
    </Container>
  )
}

export default PageFive