import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    const downloadResume = () => {
        // Create an anchor element
        const link = document.createElement('a');
        link.href = 'H:/React_intern/portfolio/public/'; // Provide the path to your resume file
        link.download = 'hero.png'; // Specify the file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800   md:pt-10'>
            <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
                <div className='w-full md:w-2/5 mb-6 md:mb-0 flex justify-center md:justify-start'>
                    <img src="hero1.jpg" alt="girl" className='rounded-md mx-auto md:w-full' />
                </div>

                <div className='w-full md:w-3/5 flex flex-col items-center md:items-start pl-20'>
                    <p className='text-white text-lg sm:text-4xl font-serif mt-6 md:mt-0 text-center md:text-left'>Hello, It's Shruti Nakade</p>

                    <TypeAnimation
                        sequence={[
                            'And I am The Engineer',
                            1000,
                            'And I am The Developer',
                            1000,
                            'And I am The Coder',
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        className='text-sky-600 font-serif text-center mt-2'
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />

                    

                    <div>
                        <button
                            data-te-ripple-init
                            data-te-ripple-color='light'
                            className='group text-white px-6 py-3 w-fit cursor-pointer rounded-md my-2 flex items-center bg-gradient-to-b from-sky-500'
                            onClick={downloadResume} // Add onClick event to trigger downloadResume function
                        >
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
