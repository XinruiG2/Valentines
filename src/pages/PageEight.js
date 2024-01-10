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
    background-color: rgb(244, 239, 237);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    text-align: right;
`;

const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 30px 35px;
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 2.25rem;
    transition: all 0.35s ease-in-out;
    color: rgb(108,100,91);
    padding-bottom: 10px;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }
`;

const BottomContainer = styled.div`
    width: 100%;
    background-color: rgb(224, 219, 217);
    box-sizing: border-box;
    padding: 60px 35px;
`;


const PageEight = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page9');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page7');
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
            <Text>Finally, when we played in the snow together.</Text>
            <Text>Both of us were freezing, but with all the constant laughing,</Text>
            <Text>it was easy to ignore the shivering and numb fingers.</Text>
        </Wrapper>
        <BottomContainer>
            <Text>I’ve always wanted to do those things when it snowed with someone,</Text>
            <Text>but never got the chance to.</Text>
            <Text>I’m glad I didn’t though, because I got to spend that first time with you.</Text>
        </BottomContainer>
    </Container>
  )
}

export default PageEight