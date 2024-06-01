const getStoredJobApplication = () =>{
    const stroedJobApplication = localStorage.getItem('job-applications');
    if(stroedJobApplication){
        return JSON.parse(stroedJobApplication)
    }

    return[];
}

const saveJobApplication = id =>{
    const stroedJobApplications = getStoredJobApplication();
    const exists = stroedJobApplications.find(jobId => jobId === id);
    if(!exists){
        stroedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(stroedJobApplications))
    }
}





export {getStoredJobApplication, saveJobApplication}