import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './HomeReview.css';

const HomeReview = () => {
    const [reviews] = useReviews();
    return (
        <div className='home-review'>
            <h2>Customer Reviews (3)</h2>
            <div className='reviews'>
            {
                reviews.slice(0, 3).map(review => (
                    <ReviewDetails
                        key={review.id}
                        review={review}
                    ></ReviewDetails>
                ))
            }
            </div>
            <Link to='/reviews' className='review-btn'>See All Reviews</Link>
        </div>
    );
};

export default HomeReview;