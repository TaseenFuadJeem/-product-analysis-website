import React from 'react';

const EachReview = ({ eachReview }) => {

    const { img, name, review } = eachReview;
    // console.log(name.length);

    return (
        <div>
            <div className=' p-5 h-96 rounded-lg border-2'>
                <img className='mx-auto rounded-full my-4' src={img} alt="" />
                <h2 className='text-xl font-medium my-7 text-center'>{name}</h2>
                <p title={review}>{review.length > 200 ? review.slice(0, 200) + "....." : review}</p>
            </div>
        </div>
    );
};

export default EachReview;