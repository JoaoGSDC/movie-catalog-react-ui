import React from 'react';
import image from '../../assets/totoro.jpg';
import { CoverContainer, Gradient } from './styles';

function Cover() {
  return (
    <>
      <CoverContainer>
        <Gradient />

        <figure>
          <img src={image} alt="capa" />
        </figure>
      </CoverContainer>
    </>
  );
}

export default Cover;
