import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-weight: 800;
    font-size: 6rem;
    transition: all 0.35s ease-in-out;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }
`;

const HeaderText = ({ text }) => {
  return (
    <Container>
        {text}
    </Container>
  )
}

export default HeaderText