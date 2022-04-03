import React from 'react';
import useReviews from '../../Hooks/useReviews';
import EachReview from '../EachReview/EachReview';

const Reviews = () => {

    const [reviews] = useReviews();

    return (
        <>
            <h1 className='text-center text-4xl font-semibold mt-24'>Our honorable customers</h1>
            <div className='grid lg:grid-cols-3 gap-20 my-16'>
                {
                    reviews.map(r => <EachReview
                        key={r.id}
                        eachReview={r}
                    ></EachReview>)
                }
            </div>
        </>
    );
};

export default Reviews;