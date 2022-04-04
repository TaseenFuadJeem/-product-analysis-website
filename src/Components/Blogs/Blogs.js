import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-2 p-10 rounded-lg'>
                <h1 className='text-4xl font-semibold mb-5'>What is Context API ?</h1>
                <p>
                    In a React App, there is a way to effectively produce global variables which is known as <strong>The React Context API.</strong> This is the opposite way to "pop drilling" or moving props from grandparent to child to parent and many more. Then comes the context API system in react. This is the easiest way to sent data between grandparent to child to parent. This context API is a feature which is added on react in version 16.3. It allows to share state across the entire app very lightly and very easily.
                </p>
            </div>
        </div>
    );
};

export default Blogs;