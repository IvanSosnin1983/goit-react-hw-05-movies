import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReview } from 'service/fetchApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchMoviesReview(movieId).then(response =>
      setReview(response.data.results)
    );
  }, [movieId]);

  console.log(movieId);
  return (
    <>
      <ul>
        {review &&
          review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
      {review.length === 0 && <p>There are no reviews for this movie.</p>}
    </>
  );
};

export default Reviews;
