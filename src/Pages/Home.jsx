import React from 'react';
import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import appstore from '../assets/appstore.png';
import playstore from '../assets/playstore.png';
import hero from '../assets/hero.png';
import useApps from '../Hooks/useApps';

const Home = () => {
    const {app, error, loading}=useApps();
    const sliceApp= app.slice(0,8);
    // console.log(appsData);
    return (
        <div>
            {/* hero banner section */}
            <div className='max-w-[1650px] mx-auto text-center mt-20'>
                <h1 className='mb-5 text-7xl font-bold'><span className='block'>We Build</span> <span className='bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-[#627382] text-xl mb-10'>At TriLoop, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <button className='btn bg-white text-xl py-6 mr-6 hover:bg-gray-200'>
                    <img src={appstore} alt="" />Google Play
                </button>

                <button className='btn bg-white text-xl py-6 hover:bg-gray-200'>
                    <img src={playstore} alt="" />App Store
                </button>

                <img className='mx-auto mt-10' src={hero} alt="" />
            </div>
            {/* trust by million section */}
            <div className="bg-[linear-gradient(to_right,rgba(99,46,227,1),rgba(159,98,242,1))] text-white text-center p-20 mb-20">
                <h1 className='text-5xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row gap-10 justify-evenly mt-15'>
                    <div>
                        <h4 className='font-light'>Total Download</h4>
                        <h4 className='text-6xl font-bold'>29.6M</h4>
                        <h4 className='font-light mt-3'>21% more than last month</h4>

                    </div>
                    <div>
                        <h4 className='font-light'>Total Download</h4>
                        <h4 className='text-6xl font-bold'>29.6M</h4>
                        <h4 className='font-light mt-3'>21% more than last month</h4>

                    </div>
                    <div>
                        <h4 className='font-light'>Total Download</h4>
                        <h4 className='text-6xl font-bold'>29.6M</h4>
                        <h4 className='font-light mt-3'>21% more than last month</h4>

                    </div>

                </div>
            </div>
            <h1 className='text-5xl text-center mb-4 font-bold'>Trending Apps</h1>
            <p className='text-xl text-center mb-10 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            {/* cards display section */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 justify-items-center max-w-[1650px] mx-auto'>
                {
                    sliceApp.map(app => <AppsCard key={app.id} app={app}></AppsCard>)

                }
            </div>
            <div className="flex justify-center my-10">
                <Link to='/trendingApps' className='btn btn-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none'>Show all</Link>
            </div>
        </div>
    );
};

export default Home;