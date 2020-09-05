import React from 'react';
import { FiLogIn, FiKey } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';

import { LoginWindow, Form } from './styles';

const Login: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Login;
