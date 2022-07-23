import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from '../pages/HomePage';
import { MoviesPage } from '../pages/MoviesPage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />}>
          <Route path=':movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
