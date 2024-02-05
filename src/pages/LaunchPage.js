import React from 'react'
import { styled, keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import HeaderText from '../components/HeaderText';

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
    width: 100%;
    height: ${props => props.height}px;
    position: relative;
    overflow: hidden;
    overflow-y: hidden;
    background-color: rgb(244,239,237);
    color: rgb(108,100,91);
    font-family: 'Inter', serif;
    display: flex;
    flex-direction: column;
`;

const LeftContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 31px 37px;
    box-sizing: border-box;
    background-color: rgb(243,220,222);

    @media (max-width: 1000px) {
        padding: 31px 39px;
    }
`;

const RightContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;
    padding: 32px 37px;
    box-sizing: border-box;

    @media (max-width: 1000px) {
        padding: 32px 39px;
    }
`;

const StyledH2 = styled.div`
  width: 100%;
  text-align: right;
  border-bottom: 1.5px solid #000;
  line-height: 0.1em;

  & span {
    font-weight: 600;
    font-size: 1.05rem;
    background-color: rgb(244,239,237);
    padding-left: 15px;
  }

  @media (max-width: 1000px) {
    & span {
        font-size: 1.35rem;
    }
  }
`;

const LaunchPage = () => {

//   const navigate = useNavigate();

//   const navigateToMain = () => {
//     navigate("/home");
//   }

    const viewportHeight = window.innerHeight;
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                navigate('/page1');
            }
        };
    
        const handleTouchEnd = () => {
            navigate('/page1');
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
            <RightContainer>
                <StyledH2>
                    <span>Use your arrow keys or tap to navigate this website</span>
                </StyledH2>
            </RightContainer>
            <LeftContainer>
                <HeaderText text="Hey Baby.">
                </HeaderText>
                <HeaderText text="Happy Valentine's Day!">
                </HeaderText>
            </LeftContainer>
        </Container>
    )
}

export default LaunchPage