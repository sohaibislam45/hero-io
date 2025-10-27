import React, { useEffect, useState } from 'react';
import InstalledAppsCard from '../Components/InstalledAppsCard';

const InstalledApps = () => {
    const [installList, setInstallList] = useState([]);
    const [sortOption, setSortOption] = useState('none');
    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('installApp')) || [];
        if (saveList) setInstallList(saveList);
    }, []);
    // console.log(installList);



    const sortApp=()=>{
        if(sortOption==='size-asc'){
            return [...installList].sort((a,b)=>a.size-b.size);
        }
        else if(sortOption==='size-desc'){
            return [...installList].sort((a,b)=>b.size-a.size);
        }
        else{
            return installList;
        }
    }
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
                    sortApp().map(app => <InstalledAppsCard key={app.id} app={app}></InstalledAppsCard>)
                }
            </div>
        </div>
    );
};

export default InstalledApps;