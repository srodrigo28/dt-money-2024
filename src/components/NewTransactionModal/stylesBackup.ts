import styled from "styled-components";
import { darken } from 'polished'

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }
    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    transition: 0.5s;

    &:hover{
      font-weight: 700;
      font-size: 1.3rem;
      filter: brightness(0.9);
    }
  }
`;


export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button{
    height: 4rem;
    border: 1px solid #d7d7d78;
    border-radius: 0.25rem;

    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color: 0.2s;

    &:hover{
      border-color: ${ darken(0.1, '#d7d7d7') };
    }

    img{
      width: 20px;
      height: 20px;
    }

    span{
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title)

    }
  }
`;

interface RadioBoxProps {
  isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
  height:4r4em;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${ (props) => props.isActive ? '#eee' : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color: 0.2s;
`;