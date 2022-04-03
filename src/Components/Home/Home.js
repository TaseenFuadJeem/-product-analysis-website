import React from 'react';
import camera from '../../Assets/camera.jpg';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <>
            <div className='grid lg:grid-cols-2 my-16'>
                <div>
                    <img width={"450px"} className='rounded-lg mx-auto' src={camera} alt="" />
                </div>
                <div className='ml-16 my-auto'>
                    <div className='my-6'>
                        <h1 className='text-4xl font-semibold'>Beyond basic!</h1>
                        <h1 className='text-4xl font-semibold'>For a new generation of <span className='text-red-600'>imagemakers.</span></h1>
                    </div>
                    <p>
                        With groundbreaking performance in both still and movie recording, the α7 IV is the ideal hybrid, providing breathtaking imagery along with on-the-spot delivery and distribution. The α7 IV is a camera designed to bring to life the artistic visions of today's creators.
                    </p>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full my-10">
                        View Product
                    </button>
                </div>
            </div>

            <CustomerReview></CustomerReview>
        </>
    );
};

export default Home;