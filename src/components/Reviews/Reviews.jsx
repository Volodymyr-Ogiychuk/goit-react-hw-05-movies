import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../Utils/moviesApi';
import s from './Reviews.module.css'

function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const response = await getReviews(movieId);
      setReview([...response]);
    }
    getCast();
  }, [movieId]);

  if (!review) return;

  return (
    <>
      {!!review.length ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={s.sorry}>We don't have any reviews for this movie.</div>
      )}
    </>
  );
}

export default Reviews;