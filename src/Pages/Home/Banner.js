import React from 'react';

const Banner = () => {
    return (
        <div className='bg-banner bg-cover pt-56 pb-60 mx-0 px-5'>
            <h1 className='text-4xl text-center font-semibold'>Best food is waiting for your belly</h1>
            <div className='grid place-items-center mt-5'>
                <div className="form-control">
                    <div className="input-group rounded-full mx-auto">
                        <input type="text" placeholder="Search food items" className="input input-bordered" />
                        <button className="btn btn-primary rounded-full">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;