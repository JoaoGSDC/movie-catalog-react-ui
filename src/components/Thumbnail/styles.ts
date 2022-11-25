import styled from 'styled-components';

export const ThumbnailContainer = styled.figure`
  display: flex;
  padding: 0px;
  margin: 8px;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @media only screen and (max-width: 600px) {
    margin: 0px 8px 8px;
  }
`;
