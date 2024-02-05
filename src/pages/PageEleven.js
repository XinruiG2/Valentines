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
    background: linear-gradient(to right, rgb(244, 239, 237) 80%, rgb(224, 219, 217) 80%, rgb(224, 219, 217) 100%);
    color: rgb(108,100,91);
    font-family: 'Inter', serif;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 36px 38px;
    box-sizing: border-box;

    @media (max-width: 1000px) {
        padding: 36px 40px;
    }
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 2.8rem;
    transition: all 0.35s ease-in-out;
    text-align: left;
    padding-bottom: 12px;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }

    @media (max-width: 1000px) {
        font-size: 3.85rem;
    }
`;

const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`;

const Happy = styled.span`
    color: rgb(215,165,150);
`;


const PageEleven = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/ending');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page10');
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
            <div>
                <Text>You’re truly a one of<br/>a kind person,
                and I’m<br/> so grateful you approached
                me that<br/>day in the gym.</Text>
                <Text style={{ marginTop: '5px' }}>I’m excited for all the things we’ll get
                to experience together<br/>in the future!</Text>
            </div>
            <Text><Happy>I love you.</Happy> ☺</Text>
        </Wrapper>
    </Container>
  )
}

export default PageEleven