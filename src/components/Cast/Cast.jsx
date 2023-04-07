import { fetchMoviesCast } from 'service/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMoviesCast(movieId).then(response => setCast(response.data.cast));
  }, [movieId]);
  return (
    <CastList>
      {casts &&
        casts.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                width={150}
                alt={name}
              />
            ) : (
              'There is no photo'
            )}
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      {casts.length === 0 && <p>No information about the cast</p>}
    </CastList>
  );
};
export default Cast;
