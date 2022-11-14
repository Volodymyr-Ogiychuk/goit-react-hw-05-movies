import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../Utils/moviesApi';
import s from './MovieDetails.module.css'

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const linkRef = location.state?.from ?? '/movies';
  const {
    genres = [],
    title,
    overview,
    vote_average,
    poster_path,
  } = movieDetails;

  useEffect(() => {
    async function getMovies() {
      const moviesData = await getMovieDetails(movieId);
      setMovieDetails({ ...moviesData });
    }
    getMovies();
  }, [movieId]);
  return (
    <>
      <NavLink className={s.navBtn} to={linkRef}>&#8592; Go back</NavLink>
      <div className={s.container}>
        <img className={s.imgStyle}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="poster"
        />
        <div className ={s.descr}>
          <h2 className ={s.title}>{title}</h2>
          <p className ={s.text}>User score: {vote_average}</p>
          <h3 className ={s.header}>Overviews</h3>
          <p>{overview}</p>
          <h3 className ={s.header}>Genres</h3>
          <p>{genres.map(({ name }) => `${name} `)}</p>
        </div>
      </div>
      <div className={s.menu}>
        <p className ={s.textInfo}>Additional information</p>
          <NavLink className ={s.navlinkItem} to={'cast'} state={{ from: linkRef }}>
            Cast
          </NavLink>
          <NavLink className ={s.navlinkItem} to={'reviews'} state={{ from: linkRef }}>
            Reviews
          </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetails;