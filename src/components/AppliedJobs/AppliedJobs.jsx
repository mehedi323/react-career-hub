import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStrage";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [jobApplieds, setJobApplieds] = useState([]);
    const [displayJobs, setDisplayJobs]= useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(AppliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = AppliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = AppliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const stroedJobId = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of stroedJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobApplied.push(job)
                }
                setJobApplieds(jobApplied)
                displayJobs(jobApplied)
            }
        }
    }, [])
    return (
        <div>
            <h2 className="text-3xl">Applied Jobs: {jobApplieds.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    setDisplayJobs.map(job => <li key={job.id}><span>{job.job_title} {job.company_name} :{job.remote_or_onsite}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;