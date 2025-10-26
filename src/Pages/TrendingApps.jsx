import React from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard';

const TrendingApps = () => {
    const { app } = useApps();
    return (
        <div className='max-w-[1650px] mx-auto'>
            {/* our all apps div */}
            <div className='text-center my-20'>
                <h1 className='text-5xl font-bold mb-5'>Our All Applications</h1>
                <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            {/* search and apps found div */}
            <div className='flex justify-between mb-5'>
                <span className='text-2xl font-semibold'>{app.length} Apps Found</span>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search Apps" />
                </label>
            </div>

            {/* card showing div */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 justify-items-center max-w-[1650px] mx-auto'>
                {
                    app.map(app => <AppsCard key={app.id} app={app}></AppsCard>)

                }
            </div>
        </div>
    );
};

export default TrendingApps;