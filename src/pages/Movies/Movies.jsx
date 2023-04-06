import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesQuery } from 'service/fetchApi';
import { ButtonSearch, FieldSearch, FormSearch, Wrap } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = (values, actions) => {
    if (values.query.trim() === '') {
      toast.info('Please enter a search term');
      actions.resetForm();
      return;
    }
    setSearchParams({ query: values.query.trim() });
    actions.resetForm();
  };

  useEffect(() => {
    if (!query) return;

    fetchMoviesQuery(query).then(response => {
      if (response.data.results.length === 0) {
        setMovies([]);
        return toast.info(`No results were found for "${query}"`);
      }

      setMovies(response.data.results);
    });
  }, [query]);

  const initialValues = { query: '' };
  return (
    <>
      <Wrap>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormSearch autoComplete="off">
            <FieldSearch
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              name="query"
            />
            <ButtonSearch type="submit">Search</ButtonSearch>
          </FormSearch>
        </Formik>
        <ToastContainer autoClose={2000} />
      </Wrap>
      <ul>
        {movies &&
          movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;
