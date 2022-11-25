import styled from 'styled-components';

export const LoaderStyle = styled.div`
  animation: isRotating 1s infinite;
  width: 35px;
  height: 35px;
  border: 6px solid #e5e5e5;
  border-top-color: var(--main-color);
  border-radius: 50%;

  @keyframes isRotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
