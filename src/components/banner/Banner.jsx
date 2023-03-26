import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-500 w-full h-screen grid items-center'>
            <div>
                <h1 className='text-center text-white my-5 text-5xl'>Website Grader®</h1>
                <p className='text-center text-white my-8'>Grade your website in seconds. Then learn how to <br /> improve it for free.</p>
                <div className='text-center'>
                <input type="text" placeholder="website " className="input input-bordered input-primary w-full max-w-xs block mx-auto" />
                <input type="text" placeholder="email" className=" my-5 input input-bordered input-primary w-full max-w-xs" />
                </div>
                <p className='w-1/2 mx-auto text-white text-center'>We're committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
            </div>
            
        </div>
    );
};

export default Banner;