import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const InstalledAppsCard = ({ app, onUninstall }) => {
    const { image, title, downloads, ratingAvg, size } = app;
    const handleUninstallClick = () => {
        onUninstall?.(app.id);
        toast.success("Uninstalled Successfully");
    };
    return (
        <div className='flex justify-between my-4 items-center gap-10 bg-[#fcfcfc] p-3 rounded-xl shadow-md'>
            <div className='flex gap-10'>
                <div className='bg-white shadow-md p-2 rounded-lg'>
                    <img className='w-20' src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <div className='flex gap-10 font-medium mt-4'>
                        <p className='text-[#00d390] flex items-center gap-1'><ArrowDownToLine size={16} strokeWidth={2} />{downloads}</p>
                        <p className='text-[#ff8811] flex items-center gap-1'><Star size={16} />{ratingAvg}</p>
                        <p className='text-[#627382] flex items-center gap-1'>{size} MB</p>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={handleUninstallClick} className='btn bg-[#00d390] text-white'>Uninstall</button>
            </div>
        </div>

    );
};

export default InstalledAppsCard;