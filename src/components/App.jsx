import { Routes, Route } from "react-router-dom";
import { SuspenseLoading } from './Utils/SuspenseLoading';
import { lazy } from 'react';

const HomePage = lazy(() => import('./Pages/HomePage'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

  const App = () => {
  return (
    <> 
    <Routes>
      <Route path="/" element={<SuspenseLoading />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
    </>
  );
};

export default App;