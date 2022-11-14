import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from '../Utils/moviesApi';
import s from './Cast.module.css';

const Cast = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();

useEffect(() => {
    async function getCast() {
      const { cast } = await getCasts(movieId);
      setActors([...cast]);
    }
    getCast();
  }, [movieId]);

  return (
    <ul>
      {actors.map(({ character, name, profile_path, id }, idx) => {
        return idx < 12 ? (
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="movies poster" width="250px"/>
            <h3>{name}</h3>
            <p>
              <span className={s.Character}>Character: </span>
              <span>{character}</span>
            </p>
          </li>
        ) : null;
      })}
    </ul>
  );
}

export default Cast;