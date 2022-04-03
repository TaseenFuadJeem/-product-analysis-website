import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EachReview = ({ eachReview }) => {

    const { img, name, review } = eachReview;
    // console.log(name.length);

    return (
        <div>
            <div className=' p-5 h-96 rounded-lg border-2'>
                <img className='mx-auto rounded-full' src={img} alt="" />
                <h2 className='text-xl font-medium my-2 text-center'>{name}</h2>
                <div className='text-center text-yellow-500 my-3'>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </div>
                <p title={review}>{review.length > 200 ? review.slice(0, 200) + "....." : review}</p>
            </div>
        </div>
    );
};

export default EachReview;