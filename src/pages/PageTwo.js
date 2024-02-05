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
    padding: 27px 34px;
    box-sizing: border-box;
    overflow: hidden;
    background: linear-gradient(to bottom, rgb(244, 239, 237) 36%, rgb(243,220,222) 36%, rgb(243, 220, 222) 100%);

    @media (max-width: 1000px) {
        padding: 35px 40px;
    }
`;

const TopLeft = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    color: rgb(108,100,91);
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 4.5rem;

    @media (max-width: 1000px) {
        font-size: 6.5rem;
    }
`;

const BottomRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
    text-align: right;
    color: rgb(108,100,91);
`;

const Wrapper = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

const PageTwo = () => {
    const navigate = useNavigate();
    const viewportHeight = window.innerHeight;

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page3');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page1');
        }
    };

    const handleTouchEnd = () => {
        navigate('/page3');
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
        <TopLeft>
            <Text>It's only been 2 months...</Text>
        </TopLeft>
        <BottomRight>
            <Wrapper>
                <Text>But we have</Text> 
                <Text>already made</Text>
                <Text>so many special</Text>
                <Text>and wonderful</Text>
                <Text>memories together.</Text>
            </Wrapper>
            
        </BottomRight>
    </Container>
  )
}

export default PageTwo