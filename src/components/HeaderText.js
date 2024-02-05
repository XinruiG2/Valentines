import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-weight: 800;
    font-size: 6rem;

    @media (max-width: 1000px) {
      font-size: 8.75rem;
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