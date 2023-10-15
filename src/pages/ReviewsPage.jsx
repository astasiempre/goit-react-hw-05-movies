import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findMovieReviewsbyID } from 'services/movies';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const reviewsData = await findMovieReviewsbyID(movieId);

        setReviews(reviewsData);
        if (reviewsData.length === 0) {
          setError('We don`t have any reviews for this movie.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {reviews !== null && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p> {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ReviewsPage;
