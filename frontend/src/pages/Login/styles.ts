import styled from 'styled-components';
import logoImg from '../../assets/cc-logo.png';

export const LoginWindow = styled.div`
  width: 800px;
  margin: auto;
  margin-top: 164px;
  height: 400px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 40px;

  background: var(--white) url(${logoImg}) no-repeat top;
  box-shadow: 0 2px 10px 1px var(--divider);
`;

export const Form = styled.form`
  div {
    padding: 12px;
    margin-top: 80px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--icon-gray);
      transition: color 200ms;
    }

    input {
      margin-left: 10px;
      padding-left: 12px;
      border: none;
      width: 250px;
      height: 35px;
      transition: background-color 200ms;
      border-radius: 20px;

      &:focus {
        background-color: var(--gray);
      }
    }

    button {
      background-color: var(--gray);
      transition: background-color 200ms;
      display: inline-block;
      text-decoration: none;
      border: none;
      padding: 10px 25px;
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 20px;
      color: var(--white);

      svg {
        color: var(--white);
      }
    }

    button:hover {
      background-color: var(--accent-blue);
    }

    & + div {
      margin: 10px;
    }
  }
`;
