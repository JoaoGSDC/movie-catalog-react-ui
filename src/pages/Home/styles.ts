import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex: 1 0 21%;
  flex-wrap: wrap;
  justify-content: center;

  figure {
    height: 160px;
  }

  div#sentinela {
    height: 50px;
    width: 50px;
    color: red;
  }

  @media only screen and (max-width: 600px) {
    figure {
      width: 100%;

      img {
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0px;
`;

export const NullMoviesList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #332a40;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  img {
    width: 320px;
    opacity: 0.5;
  }
`;
