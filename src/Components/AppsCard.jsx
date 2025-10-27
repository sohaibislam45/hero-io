import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AppsCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app;
    return (
        <Link to={`/trendingApps/${id}`}>
            <div className="card bg-base-100 md:w-96 shadow-xl w-full transform transition-transform duration-300 hover:-translate-y-2">
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
        </Link>
    );
};

export default AppsCard;