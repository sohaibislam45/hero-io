import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard';

const TrendingApps = () => {
    const { app, loading } = useApps();
    const [search, setSearch] = useState('');
    const userSearchBox = search.trim().toLowerCase();
    const searchedApps = userSearchBox ? app.filter(a => a.title.toLowerCase().includes(userSearchBox)) : app;

    return (
        <div className='max-w-[1650px] mx-auto'>
            {/* our all apps div */}
            <div className='text-center my-20'>
                <h1 className='text-5xl font-bold mb-5'>Our All Applications</h1>
                <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            {/* search and apps found div */}
            <div className='flex flex-col gap-6 md:flex-row justify-between items-center mb-5'>
                <span className='text-2xl font-semibold'>{searchedApps.length} Apps Found</span>
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
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                </label>
            </div>

            {/* card showing div */}
            {loading ? (
                <div className='grid grid-cols-1 md:grid-cols-4 gap-7 justify-items-center max-w-[1650px] mx-auto px-4'>
                    {Array.from({ length: (searchedApps.length || 16) }).map((_, i) => (
                        <div key={i} className="card bg-base-100 md:w-96 w-full shadow-xl animate-pulse">
                            <div className="px-10 pt-10">
                                <div className="bg-gray-200 rounded-xl w-full h-56" />
                            </div>

                            <div className="card-body items-center text-center">
                                <div className="h-6 w-3/4 bg-gray-200 rounded mb-4" />
                                <div className="w-full flex justify-between mt-5">
                                    <div className="h-6 w-24 bg-gray-200 rounded" />
                                    <div className="h-6 w-20 bg-gray-200 rounded" />
                                </div>
                                <div className="h-3 w-full mt-3" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-4 gap-7 justify-items-center max-w-[1650px] mx-auto px-4'>
                    {searchedApps.map(app => <AppsCard key={app.id} app={app} />)}
                </div>
            )}

        </div>
    );
};

export default TrendingApps;