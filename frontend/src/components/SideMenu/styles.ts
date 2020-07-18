import styled from 'styled-components';


export const SideMenuBox = styled.div`
  position: fixed;
  width: 256px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background-color: var(--white);
  box-shadow: 8px 0 5px -2px var(--divider);
`;

export const MenuHeader = styled.div`
  border-bottom: 1px solid var(--divider);
  max-height: 60px;
  max-width: 256px;

  img {
    display: block;
    width: 50px;
    margin: 0 auto;
    max-height: 100%;
  }
`;

export const MenuOption = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid var(--divider);
  
  a {
    display: block;
    padding: 16px;
    width: 100%;
    align-items: center;
    display: flex;
    text-decoration: none;
    color: var(--table-black);
    transition: color 220ms;
    

    img {
      width: 62px;
      height: 62px;
      border-radius: 50%;
    }

    #profile {
      margin-left: 0 16px;
      padding-left: 16px;
      justify-content: space-evenly;
      
      strong {
        font-size: 20px;
        color: var(--black);
      }

      p {
        padding-left: 12px;
        margin-top: 4px;
      }
    }

    #option {
      margin-top: 20px;
      display: flex;
      margin-left: 0 16px;
      padding-left: 16px;
      justify-content: space-between;
      position: relative;

      p {
        padding-left: 16px;
        top: 5px;
        bottom: 100px;
      }
    }

    svg {
      color: var(--icon-gray);
      transition: color 220ms;
    }

    &:hover {
      color: var(--accent-blue);

      svg {
        color: var(--accent-blue);
      }
    }

    & + a {
      padding-top: 10px;
    }

  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 8px;
  color: var(--gray);

  p {
    text-align: center;

    a { 
      text-decoration: none;
      color: var(--table-black);
    }
  }
`;