import styled from 'styled-components';

export const CoverContainer = styled.div`
  figure {
    margin: 0px;

    img {
      object-fit: cover;
      height: 320px;
      width: 100%;
    }
  }
`;

export const Gradient = styled.div`
  display: flex;
  background: linear-gradient(180deg, rgb(255 255 255 / 0%) 0%, rgba(14, 11, 18, 1) 100%);
  height: 320px;
  width: 100%;
  position: absolute;

  @media only screen and (max-width: 600px) {
    background: linear-gradient(180deg, rgb(255 255 255 / 0%) 0%, rgba(14, 11, 18, 1) 90%);
  }
`;
