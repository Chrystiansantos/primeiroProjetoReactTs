import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px;
    color: #3a3a3a;
    border: 2px solid #fff;
    ${(props) =>
    props.hasError &&
    css`
      border-color:#c53030;
    `}

    &::placeholder {
      color: '#a8a8b3';
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    /* Aqui estou adicionaro o estilo a partir do segundo elemento */
    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translate(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      flex:1;
      strong {
        font-size: 20px;
        color: #30304d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      /* ira colocar no conto a direita */
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
display:block;
color:#c54030;
margin-top:8px;
`;