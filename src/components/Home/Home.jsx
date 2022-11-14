import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendMovies } from '../Utils/moviesApi';
import s from './Home.module.css';

export function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const place = useLocation();

  useEffect(() => {
    async function getMovies() {
      const trendMovies = await getTrendMovies();
      setTrendMovies([...trendMovies]);
    }
    getMovies();
  }, []);

  return (
    <>
      {trendMovies.map(({ title, id }) => {
        return (
          <li key={id}>
                <NavLink className={s.movieItem} to={`movies/${id}`} state={{ from: place }}>
              {title}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}