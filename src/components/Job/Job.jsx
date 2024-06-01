import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-10">
                <figure><img className="w-[150px]" src={logo} alt="Shoes" /></figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="text-left text-xl">{company_name}</p>
                    <div className="flex gap-4 items-center">
                        <button className="btn btn-ghost text-[#9873FF] border-2 border-solid border-[#9873FF]">{remote_or_onsite}</button>
                        <button className="btn btn-ghost text-[#9873FF] border-2 border-solid border-[#9873FF]">{job_type}</button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <h2 className="flex items-center text-xl"><CiLocationOn></CiLocationOn> {location}</h2>
                        <h2 className="flex items-center text-xl"><CiDollar></CiDollar>{salary}</h2>
                    </div>
                    <Link to={`/job/${id}`}>
                        <div className="card-actions ">
                            <button className="btn bg-gradient-to-r from-indigo-500  ">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;