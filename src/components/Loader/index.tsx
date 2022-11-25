import React from 'react';
import { LoaderStyle } from './styles';

interface IProps {
  loading: boolean;
}

function Loader({ loading }: IProps) {
  return <>{loading ? <LoaderStyle /> : null}</>;
}

export default Loader;
