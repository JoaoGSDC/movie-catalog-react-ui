import styled from 'styled-components';

export const DialogContainer = styled.dialog`
  position: fixed;
  top: 0px;
  left: 0px;
  width: calc(100% - 5px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 0px;
`;

export const MovieModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 672px;
  color: #fff;
  position: relative;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);

  border-radius: 8px;
  background-color: var(--background-color);

  figure {
    margin: 0px;
    width: 100%;
    height: 50% !important;
    padding: 0px;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }

    button {
      border-radius: 50%;
      height: 32px;
      width: 32px;
      background-color: #000000ab;
      color: #fff;
      position: absolute;
      right: 8px;
      top: 8px;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: 100%;
    width: auto;

    figure {
      width: 100%;
      height: auto;
    }
  }
`;

export const MovieModalInformationsContainer = styled.div`
  display: flex;
  margin-top: 16px;
  padding: 32px;

  @media only screen and (max-width: 600px) {
    padding: 0px 16px;
  }
`;

export const MovieModalContainerInformationsPeopleContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  div {
    flex-direction: row;
    margin-bottom: 8px;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

export const MovieModalInformationsContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 0px;
    margin-bottom: 16px;
  }

  p {
  }

  label {
    margin-right: 8px;
    color: #554b61;
  }

  span {
  }
`;

export const MovieModalMovieContent = styled(MovieModalInformationsContent)`
  flex: 2;
  margin-right: 40px;
`;
