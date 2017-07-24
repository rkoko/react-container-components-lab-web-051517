// Code MovieReviews Here
import React from 'react';


const MovieReview = ( review ) => {
  return (
    <div className="review" key={review.display_title}>
      <h3>{review.display_title}</h3>
    </div>
  )
};

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
    { reviews.map(MovieReview) }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
