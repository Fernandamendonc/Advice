import styled from 'styled-components'
mport url('https://fonts.googleapis.com/css2?family=Romanesco&display=swap');

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1{
    font-family: 'Romanesco', cursive;
  }
`