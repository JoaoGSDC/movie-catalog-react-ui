import React, { useEffect } from 'react';
import {
  MovieModalContainer,
  MovieModalInformationsContainer,
  MovieModalContainerInformationsPeopleContent,
  MovieModalInformationsContent,
  DialogContainer,
  MovieModalMovieContent,
} from './styles';

import thumbnailNotFound from '../../assets/thumbnail-not-found.webp';

interface IMovieModalProps {
  movie: any;
  open?: boolean;
  onClose: any;
}

function MovieModal({ movie, open = false, onClose }: IMovieModalProps) {
  function handleCloseModal() {
    onClose(false);
  }

  return (
    <>
      <DialogContainer open={open}>
        <MovieModalContainer>
          <figure>
            <button type="button" onClick={() => handleCloseModal()}>
              X
            </button>

            <img src={movie.image ?? thumbnailNotFound} alt={movie.title ?? 'Miniatura não encontrada'} />
          </figure>

          <MovieModalInformationsContainer>
            <MovieModalMovieContent>
              <h1>{movie.title ?? 'Título do filme'}</h1>
              <p>{movie.description ?? 'Descrição do filme'}</p>
            </MovieModalMovieContent>

            <MovieModalContainerInformationsPeopleContent>
              <MovieModalInformationsContent>
                <label>Diretor:</label>
                <span>{movie.director ?? 'Nome do Diretor'}</span>
              </MovieModalInformationsContent>

              <MovieModalInformationsContent>
                <label>Produtor:</label>
                <span>{movie.producer ?? 'Nome do Produtor'}</span>
              </MovieModalInformationsContent>
            </MovieModalContainerInformationsPeopleContent>
          </MovieModalInformationsContainer>
        </MovieModalContainer>
      </DialogContainer>
    </>
  );
}

export default MovieModal;
