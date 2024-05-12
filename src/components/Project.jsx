import React from 'react';

const Project = () => {
    return (
        <div name="project"  className='w-full min-h-screen bg-gradient-to-b from-black to-gray-600 text-white pt-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8  '>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500 justify-center text-center'> Projects </p>
                </div>

                <div className="flex flex-wrap m-4">
                    <div className="lg:w-1/3 md:w-1/2 p-4 rounded-md">
                        <div className="flex relative rounded-md">
                            <img alt="gallery" className="rounded-lg absolute inset-0 w-full h-full object-cover object-center"
                                src="sak.jpg" />
                            <div className=" rounded-lg px-8 py-7 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:transition ease-in-out duration-200 hover:opacity-100">
                                <h2 className="tracking-widest text-xl title-font text-indigo-500 mb-1 font-bold ">Sakshamaa -The Digital Record Book</h2>
                                <p className="leading-relaxed text-black">Developed Android application for efficiently managing Bachat
                                    Gat Group Finances using Android Studio and Firebase.
                                    Empowered admins, treasures, and members with features for
                                    group creation, member management, and loan management</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 p-4 rounded-md">
                        <div className="flex relative rounded-md">
                            <img alt="gallery" className="rounded-lg absolute inset-0 w-full h-full object-cover object-center"
                                src="saless.jpg" />
                            <div className="px-8 rounded-lg py-4 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:transition ease-in-out duration-200 hover:opacity-100">
                                <h2 className="tracking-widest text-xl title-font font-bold text-indigo-500 mb-1">Sales & Inventory management System</h2>
                                <p className="leading-relaxed text-black">Developed using C++ and SQL for small and medium shops to
                                    manage their inventory and brief.
                                    This will allows easy access to modify and control of the items in
                                    their inventory and has different logins for admin and manager
                                    Functions – Add- Update-Delete-items,generate Sales Report ,
                                    login</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 p-4 rounded-md">
                        <div className="flex relative rounded-md">
                            <img alt="gallery" className=" rounded-lg absolute inset-0 w-full h-full object-cover object-center"
                                src="data.jpg" />
                            <div className="px-8 py-7 rounded-lg hover:transition ease-in-out duration-200 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-xl title-font font-bold text-indigo-500 mb-1">Project of Data Analytics</h2>
                                <p className="leading-relaxed text-black">Data collection - Used Google forms to gather comprehensive data
                                    on Students daily routines.
                                    Analyzed data using Statistical Techniques and visualization Tools
                                    Tableau , Power BI to identify trends providing insights into
                                    typical routines and behaviours of engineering students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
