import React, { useEffect, useState } from 'react';
import InstalledAppsCard from '../Components/InstalledAppsCard';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const InstalledApps = () => {
    const [installList, setInstallList] = useState([]);
    const [sortOption, setSortOption] = useState('none');
    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('installApp')) || [];
        if (saveList) setInstallList(saveList);
    }, []);
    if (installList.length === 0) return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold mb-5">No Installed Apps</h1>
            <Link
                to="/trendingApps"
                className="btn bg-[#00d390] text-white px-6 py-2 rounded-lg shadow-md hover:shadow-[#00d390]/50 transition"
            >
                Go to Apps
            </Link>
        </div>
    );


    const sortApp = () => {
        if (sortOption === 'size-asc') {
            return [...installList].sort((a, b) => a.size - b.size);
        }
        else if (sortOption === 'size-desc') {
            return [...installList].sort((a, b) => b.size - a.size);
        }
        else {
            return installList;
        }
    }

    const handleUninstall = (id) => {
        const existing = JSON.parse(localStorage.getItem('installApp')) || [];
        const updated = existing.filter(a => String(a.id) !== String(id));
        localStorage.setItem('installApp', JSON.stringify(updated));
        setInstallList(updated);
        toast.success('Uninstalled Successfully');
    };



    return (
        <div className='p-5 md:p-20'>
            <div className='text-center mb-5'>
                <h1 className='text-5xl font-bold mb-5'>Your Installed Apps</h1>
                <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex flex-col gap-6 md:flex-row justify-between items-center mb-5'>
                <span className='text-2xl font-semibold'>{installList.length} Apps Found</span>

                <label className='form-control'>
                    <select className='btn bg-white' value={sortOption} onChange={e => setSortOption(e.target.value)}>
                        <option value="none" disabled>Sort By Size</option>
                        <option value="size-desc">High-&gt;Low</option>
                        <option value="size-asc">Low-&gt;High</option>
                    </select>
                </label>
            </div>
            <div>
                {
                    sortApp().map(app => (<InstalledAppsCard key={app.id} app={app} onUninstall={handleUninstall} />))

                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default InstalledApps;