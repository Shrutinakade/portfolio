import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen  text-white pt-20 bg-gradient-to-b from-gray-800 to-black '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col md:flex-row justify-center w-full h-full'>

                <div className='w-full md:w-2/5 justify-center  '>
                    <img src="ph.jpg" alt="girl" className='rounded-full mx-auto md:w-full' />
                </div>

                <div className='w-full md:w-3/5 pb-8 md:pr-4 mt-10 md:mt-0 md:ml-10'>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500 text-white'> About </p>
                    <p className='text-lg mt-10 text-white '>
                        Good experience in frontend development. Worked on different projects. Love to learn and develop new stuff. A highly motivated and hardworking individual looking for an opportunity to gain new skill sets with any organization where I can grow my career.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;
