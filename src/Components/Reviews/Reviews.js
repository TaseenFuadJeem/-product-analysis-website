import React from 'react';
import useReviews from '../../Hooks/useReviews';
import EachReview from '../EachReview/EachReview';

const Reviews = () => {

    const [reviews] = useReviews();

    return (
        <div className='grid lg:grid-cols-3 gap-10 my-16'>
            {
                reviews.map(r => <EachReview
                    key={r.id}
                    eachReview={r}
                ></EachReview>)
            }
        </div>
    );
};

export default Reviews;