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

  padding: 1rem 2rem;

  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  h1{
    padding: 0.1rem 1rem;

    width: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  span{
    padding: 1rem;

    background-color: #040303;
    margin-bottom: 1rem;
  }

  button{
    padding: 1rem 5rem;

    color: gray;
    background: white;

    border: none;

    cursor: pointer;

    &:hover{
      filter: ;
    }
  }
`