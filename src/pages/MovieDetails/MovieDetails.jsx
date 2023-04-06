import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMovieId } from 'service/fetchApi';
import {
  ButtonBack,
  Card,
  CardInfo,
  Genres,
  Text,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieId(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);
  const { genres, overview, title, vote_average, poster_path } = movie;

  console.log(movieId, movie);
  return (
    <>
      <ButtonBack onClick={() => navigate(backLinkHref.current)}>
        Go back
      </ButtonBack>
      <div>
        <Card>
          <img
            width={200}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
          />
          <CardInfo>
            <h2>{title}</h2>
            <p>
              <b>Overview: </b> {overview}
            </p>
            <p>
              <b>User score:</b> {Math.round(vote_average * 10)}%
            </p>

            {genres && (
              <Genres>
                <b>Genres:</b>
                {genres.map(({ id, name }) => (
                  <Text key={id}>{name}</Text>
                ))}
              </Genres>
            )}
          </CardInfo>
        </Card>
        <div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Review</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
