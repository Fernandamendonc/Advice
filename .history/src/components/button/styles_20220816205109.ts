import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button{
    padding: 1rem 1rem;

    color: gray;
    color: white;
    cursor: pointer;
  }
`