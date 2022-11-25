import React, { useEffect, useState } from 'react';
import Cover from '../../components/Cover';
import Loader from '../../components/Loader';
import Thumbnail from '../../components/Thumbnail';
import { IMovies } from '../../interfaces/IMovies';
import api from '../../services/api';
import { HomeContainer, LoadContainer, MoviesContainer, NullMoviesList } from './styles';

import noMoviesImg from '../../assets/no-movies.svg';

function Home() {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(-1);

  useEffect(() => {
    const serviceMovies = async () => {
      if (currentPage === -1) {
        setCurrentPage(0);
      }

      await api
        .get('/movies', {
          params: {
            page: currentPage,
          },
        })
        .then(({ data }: any) => {
          if (data.length === 0) {
            return;
          }

          setMovies((_movies: any) => [..._movies, ...data]);
        })
        .catch((error: any) => console.log(error));
    };

    serviceMovies();
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries: any) => {
      if (entries.some((entry: any) => entry.isIntersecting)) {
        setCurrentPage((_currentPage: number) => _currentPage + 1);
      }
    });

    const sentinela: Element = document.querySelector('#sentinela') as Element;
    intersectionObserver.observe(sentinela);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <HomeContainer>
        <Cover />

        {movies.length > 0 ? (
          <>
            <MoviesContainer>
              {movies.map((movie, index) => (
                <Thumbnail key={movie.id + index} movie={movie} />
              ))}
            </MoviesContainer>
          </>
        ) : (
          <>
            <NullMoviesList>
              <h1>Nenhum filme listado, por favor carregue os filmes...</h1>
              <img src={noMoviesImg} alt="no movies" />
            </NullMoviesList>
          </>
        )}

        <LoadContainer>
          <div id="sentinela" />
          <Loader loading={true} />
        </LoadContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
