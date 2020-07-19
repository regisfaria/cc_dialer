import React from 'react';
import { FiLogIn, FiKey } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';

import { Header, LoginWindow, Form, Footer } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <Header>
        <strong>Complete Compliance Dialer</strong>
      </Header>
      <LoginWindow>
        <Form>
          <div>
            <FaUserAlt size={20} />
            <input type="text" placeholder="Username" />
          </div>

          <div>
            <FiKey size={20} />
            <input type="password" placeholder="Password" />
          </div>

          <div>
            <button type="submit">
              Login
{' '}
<FiLogIn size={14} />
            </button>
          </div>
        </Form>
      </LoginWindow>
      <Footer>
        <p>
          Complete Compliance © developed by
{' '}
          <a
            href="https://github.com/regisfaria"
            rel="noopener noreferrer"
            target="_blank"
          >
            Régis Faria
          </a>
        </p>
      </Footer>
    </>
  );
};

export default Login;
