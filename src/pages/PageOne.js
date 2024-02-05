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
    position: relative;
    overflow: hidden;
    background: linear-gradient(to bottom, rgb(244, 239, 237) 52%, rgb(224, 219, 217) 48%, rgb(224, 219, 217) 100%);
    color: rgb(108,100,91);
    font-family: 'Inter', serif;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 36px 38px;
    box-sizing: border-box;

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: start;
        align-items: start;
        text-align: left;
        padding: 36px 40px;
    }
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 6rem;
    transition: all 0.35s ease-in-out;
    text-align: right;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }

    @media (max-width: 1000px) {
        font-size: 7rem;
        text-align: left;
    }
`;

const Wrapper = styled.div`
    width: 40%;
    height: 100%;

    @media (max-width: 1000px) {
        width: 100%;
        height: 50%;
    }
`;


const PageOne = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page2');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/');
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [navigate]);

  return (
    <Container>
        <Wrapper>
            <Text>Here's</Text>
            <Text>something</Text>
            <Text>I made for</Text>
            <Text>you in honor</Text>
            <Text>of this</Text>
            <Text>special day.</Text>
        </Wrapper>
    </Container>
  )
}

export default PageOne