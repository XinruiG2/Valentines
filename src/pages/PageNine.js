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
    font-family: 'Inter', serif;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30px 35px;
    background-color: rgb(244, 239, 237);
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
`;

const Happy = styled.span`
    color: rgb(215,165,150);
`;


const PageNine = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page10');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page8');
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