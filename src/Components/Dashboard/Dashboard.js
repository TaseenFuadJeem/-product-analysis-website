import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className='mx-auto'>
            <h1 className='text-center text-4xl font-semibold mt-20 my-10'>Our sales in 2021</h1>
            <div className='flex justify-center'>
                <LineChart width={800} height={500} data={data}>
                    <Line type="monotone" dataKey="sell" stroke='#8884d8'></Line>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" ></CartesianGrid>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

        </div>
    );
};

export default Dashboard;