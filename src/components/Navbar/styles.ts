import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 54px;

  align-items: center;
  justify-content: space-between;

  background-color: var(--background-color);

  figure {
    margin: 0px;
    padding: 0px;
    height: 48px;
    display: flex;
    align-items: center;
    width: 100%;

    img {
      height: 50%;
      margin-left: 16px;
    }
  }

  button {
    width: 160px;
    background-color: transparent;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    border: none;
  }
`;
