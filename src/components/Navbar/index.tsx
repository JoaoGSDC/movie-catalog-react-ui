import React from 'react';
import { NavbarContainer } from './styles';

import logo from '../../assets/logo-code-plus.png';
import api from '../../services/api';

function Navbar() {
  async function handleLoadAllMovies() {
    await api.post('/movies');
    location.reload();
  }

  return (
    <>
      <NavbarContainer>
        <figure>
          <img src={logo} alt="logo" />
        </figure>

        <button type="button" onClick={handleLoadAllMovies}>
          Carregar filmes...
        </button>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
