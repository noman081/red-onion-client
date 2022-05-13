import React, { useState } from 'react';
import Banner from './Banner';
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import Lunch from './Lunch';

const Home = () => {
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);

    const handleBreakfast = () => {
        setBreakfast(true);
        setLunch(false);
        setDinner(false);
    }
    const handleLunch = () => {
        setBreakfast(false);
        setLunch(true);
        setDinner(false);
    }
    const handleDinner = () => {
        setBreakfast(false);
        setLunch(false);
        setDinner(true);
    }
    return (
        <div>
            <Banner />
            <div className='flex justify-center items-center my-20'>
                <div>
                    <p className='btn btn-link mx-3 text-accent hover:text-primary text-xl' onClick={handleBreakfast}>Breakfast</p>
                    <p className='btn btn-link mx-3 text-accent hover:text-primary text-xl' onClick={handleLunch}>Lunch</p>
                    <p className='btn btn-link mx-3 text-accent hover:text-primary text-xl' onClick={handleDinner}>Dinner</p>
                </div>
            </div>

            {breakfast && <Breakfast />}
            {lunch && <Lunch />}
            {dinner && <Dinner />}

        </div>
    );
};

export default Home;