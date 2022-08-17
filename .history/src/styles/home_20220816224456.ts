import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid black;

  padding: ;

  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  button{
    padding: 1rem 5rem;

    color: gray;
    background: white;

    border: none;
    border-radius: 5rem;

    cursor: pointer;
  }
`