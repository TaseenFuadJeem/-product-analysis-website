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
            <div className='border-2 p-10 rounded-lg mt-10'>
                <h1 className='text-4xl font-semibold mb-5'>What are semantic elements ?</h1>
                <p>
                    HTML was originally a markup language to describe documents. Day by day it needs changes and it changed a lot. People started wanting to make nicer to look. Back in the time programmers used many different hacks to get things displayed in different ways. As the use of visually designed layouts progressed, programmers started to use a generic “non-semantic” tag like "div". They give these elements a class or id attribute to perform their purpose. For example, instead of header tag they used a div and named the class or id header and the div acts like a header. But when HTM5 introduced them selves, there are some new tags like header header, article, footer and many more. They act like div but they are not. This is the power of semantic tags in HTM5.
                </p>
            </div>
        </div>
    );
};

export default Blogs;