import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';

const AppsCard = ({app}) => {
    const {image, title, downloads, ratingAvg} = app;
    return (
        <div className="card bg-base-100 w-96 shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
            <figure className="px-10 pt-10 rounded-2xl">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl mt-5">{title}</h2>
                <div className="card-actions flex justify-between w-full mt-5">
                    <button className="btn btn-xs bg-[#f1f5e8] text-[#00d390] p-2 text-sm border-none"><ArrowDownToLine size={16} />{downloads}</button>
                    <button className="btn btn-xs bg-[#FFF0E1] text-[#FF8811] p-2 text-sm border-none"><Star size={16} />{ratingAvg}</button>
                    
                </div>
            </div>
        </div>
    );
};

export default AppsCard;