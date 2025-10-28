import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/download.png';
import like from '../assets/like.png';
import star from '../assets/star.png';
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';


const DetailsApp = () => {
    const { id } = useParams()
    const { app, loading } = useApps();
    const findApp = app.find(a => String(a.id) === id)
    if (loading) return <p>Loading...</p>
    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = findApp || {};

    const handleInstall = () => {
        const existingApp = JSON.parse(localStorage.getItem('installApp')) || [];
        let updateList = [];
        if (existingApp) {
            const isDuplicate = existingApp.some(a => a.id === findApp.id)
            if (isDuplicate) return toast.error('Already Installed!!',);
            updateList = [...existingApp, findApp];
        }
        else {
            updateList.push(findApp);
        }
        localStorage.setItem('installApp', JSON.stringify(updateList))
        toast.success("Install Successfully")
    }

    return (
        <div className='p-5 md:p-20'>
            <div className='flex flex-col md:flex-row gap-20'>
                <div className='bg-white p-5 shadow-xl'>
                    <img className='w-[350px]' src={image} alt="" />
                </div>
                {/* right side */}
                <div className='w-full'>
                    <h1 className='text-4xl font-bold mb-2'>{title}</h1>
                    <h3 className='text-lg font-normal'><span className='text-[#627382]'> Developed by</span> <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></h3>
                    <div className="divider w-full"></div>
                    <div className='flex flex-col md:flex-row gap-10 mb-7'>
                        <div className='flex flex-col items-center'>
                            <img src={download} alt="" />
                            <p className='text-[#627382] text-sm my-2'>Download</p>
                            <p className='text-4xl font-bold'>{downloads}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={star} alt="" />
                            <p className='text-[#627382] text-sm my-2'>Average Ratings</p>
                            <p className='text-4xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={like} alt="" />
                            <p className='text-[#627382] text-sm my-2'>Total Reviews</p>
                            <p className='text-4xl font-bold'>{reviews}</p>
                        </div>
                    </div>
                    <div className="flex md:block justify-center">
                        <button onClick={handleInstall} className="relative overflow-hidden px-6 py-3 rounded-lg bg-[#00d390] text-white font-semibold shadow-lg hover:shadow-[#00d390]/70 transition">
                            <span className="relative z-10">Install Now ({size}) MB</span>
                            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] animate-shiny"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="divider mt-8"></div>
            <h2 className='text-2xl font-semibold mb-3'>Rating</h2>

            <div style={{ width: '100%', height: 300 }} className="mb-6">
                <ResponsiveContainer>
                    <BarChart
                        data={ratings}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" allowDecimals={false} />
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fontSize: 14 }}
                            width={80}
                        />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="count"
                            name="Votes"
                            fill="#00d390"
                            barSize={25}
                            radius={[0, 6, 6, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="divider mt-8"></div>
            <h2 className='text-2xl font-semibold mb-3'>Description</h2>
            <p className='text-[#627382] text-justify'>{description}</p>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        </div>
    );
};

export default DetailsApp;