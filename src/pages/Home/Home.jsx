import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'service/fetchApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrending().then(response => setMovies(response.data.results));
    return () => {};
  }, []);

  return (
    <>
      <h2>Trending movies today</h2>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
