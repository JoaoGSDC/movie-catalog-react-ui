import React, { useState } from 'react';
import MovieModal from '../MovieModal';
import { ThumbnailContainer } from './styles';

interface IThumbnailProps {
  movie: any;
}

const DEFAULT_EVENT_DISPLAY_MODAL_VALUE = true;

function Thumbnail({ movie }: IThumbnailProps) {
  const [openMovieModal, setOpenMovieModal] = useState<boolean>(false);

  return (
    <>
      <ThumbnailContainer
        role="button"
        aria-label="Movie Thumbnail"
        onClick={() => setOpenMovieModal(DEFAULT_EVENT_DISPLAY_MODAL_VALUE)}
      >
        <img src={movie.movie_banner} alt="thumbnail" />
      </ThumbnailContainer>

      <MovieModal movie={movie} open={openMovieModal} onClose={setOpenMovieModal} />
    </>
  );
}

export default Thumbnail;
