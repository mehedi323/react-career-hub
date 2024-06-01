import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStrage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplayJob =() =>{
        saveJobApplication(idInt);
        toast('wow so easy!!')
    }

    return (
        <div className="grid grid-cols-4 gap-5 ">
            <div className="col-span-3   p-4 m-4">
                <h2><span className="font-bold">Job-Description :</span> {job.job_description}</h2>
                <h2><span className="font-bold">Job-Responsibility :</span> {job.job_responsibility}</h2>
                <h2><span className="font-bold">Education-Requairmant :</span> <br /> {job.educational_requirements}</h2>
                <h2><span className="font-bold">Expreiences :</span> {job.experiences}</h2>

            </div>
            <div className="col-span-1 p-8 "> 
                <div className="card w-96 bg-gradient-to-r from-indigo-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2">Job-Details</h2>
                        <p><span className="font-bold">Salary: </span>{job.salary}</p>
                        <p><span className="font-bold">Job Title: </span>{job.job_title}</p>
                        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2">Contact Information</h2>
                        <p><span className="font-bold">Phone: </span>{job.contact_information.phone}</p>
                        <p><span className="font-bold">Email: </span>{job.contact_information.email}</p>
                        <p><span className="font-bold">Address: </span>{job.contact_information.address}</p>
                        <div className="card-actions ">
                            <button onClick={handleApplayJob} className="btn w-full text-white bg-[#9873FF]">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;