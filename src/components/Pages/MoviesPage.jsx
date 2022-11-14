import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from '../Utils/moviesApi';
import s from './MoviesPage.module.css';

function MoviesPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;
    async function getMovies() {
      const results = await getMoviesBySearch(query);
      setSearchResults([...results]);
    }

    getMovies();
  }, [query]);

  function onSearch(e) {
    e.preventDefault();

    const searchQuery = e.target.elements.query.value;
    setSearchParams({ query: searchQuery });
  }

  return (
    <>
      <h2>Search movies:</h2>
      <form onSubmit={onSearch}>
              <input
                  className={s.input}
          name="query"
          type="text"
          required
        />
              <button className={s.searchBtn} type="submit">Search</button>
      </form>
      {query && (
        <ul>
          {searchResults.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;