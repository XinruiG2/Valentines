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
    justify-content: space-between;
`;

const RightContainers = styled.div`
    width: 100%;
    text-align: left;
`;

const LeftContainers = styled.div`
    width: 100%;
    text-align: right;
    box-sizing: border-box;
    padding-left: 100px;
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


const PageSeven = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page8');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page6');
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [navigate]);

  return (
    <Container>
        <RightContainers>
            <Text>Or when you came to New York so we could spend New Year’s together.</Text>
            <Text>I was hesitant because I was worried you’d get sick, but you miraculously</Text>
            <Text>didn't.</Text>
        </RightContainers>
        <LeftContainers>
            <Text>
                When we spent the entire night in each other’s arms and you had to
            </Text>
            <Text>
                keep covering my mouth so I would keep quiet. I had so much fun
            </Text>
            <Text>
                and so much gratitude that night.
            </Text>
        </LeftContainers>
        <RightContainers>
            <Text>New year’s was never really a big holiday for me, but you made this one</Text>
            <Text>feel special.</Text>
        </RightContainers>
    </Container>
  )
}

export default PageSeven