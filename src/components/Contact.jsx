import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-gray-600 to-black text-white pt-20'>
            <section className="mb-8 md:mb-32 text-center">
                <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-3xl px-4">
                    <h2 className="mb-8 text-2xl md:text-3xl font-bold">Contact us</h2>
                    <form action="https://getform.io/f/pbygkjdb" method="POST"> 
                        <div className="mb-6">
                            <input
                               name='name'
                                type="text"
                                className="w-full px-4 py-2 text-black placeholder-gray-500 rounded bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                                placeholder="Full name"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            name='email'
                                type="email"
                                className="w-full px-4 py-2 placeholder-gray-500 rounded bg-gray-400 text-black focus:outline-none focus:ring focus:ring-gray-300"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                              name='message'
                                className="w-full px-4 py-2 placeholder-gray-500 rounded bg-gray-400 text-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
                                rows="3"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="mb-6 flex items-center">
                            <input
                                className="mr-2 cursor-pointer text-black"
                                type="checkbox"
                                id="sendCopy"
                                defaultChecked
                            />
                            <label htmlFor="sendCopy">Send me a copy of this message</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 text-white font-semibold rounded bg-gradient-to-b from-sky-400 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
