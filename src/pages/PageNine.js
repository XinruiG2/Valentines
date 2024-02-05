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
        padding: 35px 40px;
    }
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 3.25rem;
    padding-bottom: 7px;
    color: rgb(108,100,91);

    @media (max-width: 1000px) {
        font-size: 4.35rem;
    }
`;

const Happy = styled.span`
    color: rgb(215,165,150);
`;


const PageNine = () => {
    const navigate = useNavigate();
    const viewportHeight = window.innerHeight;

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page10');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page8');
        }
    };

    const handleTouchEnd = () => {
        navigate('/page10');
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
        <div>
            <Text>
                I enjoy the nights we spend talking for hours. 
            </Text>
            <Text>
                The ones where I get to hear about and learn from
            </Text>
            <Text>
                your unique perspectives on life.
            </Text>
        </div>
        <Text>
            Sometimes I wish those moments would last <Happy>forever.</Happy>
        </Text>
    </Container>
  )
}

export default PageNine