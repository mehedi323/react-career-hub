import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job"; 



const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('data/jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    return (
        <div className="text-center space-y-10 my-16">
            <h2 className="text-5xl font-bold">Featured Jobs: {featuredJobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-10">
                {
                    featuredJobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div> 
                <div className={dataLength === featuredJobs.length && "hidden"}>
                    <button className="btn font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={() => setDataLength(featuredJobs.length)}>Show All</button>
                </div> 

        </div>
    );
};

export default FeaturedJobs;