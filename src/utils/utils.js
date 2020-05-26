export const optimizeJobs = (jobs) => {
    let optJobs = []
        jobs.map(
            job => {
                let reqs= []; 
                reqs.push(job.role, job.level);
                if(job.languages){
                    job.languages.forEach(element => {
                        reqs.push(element);
                    });
                }
                if(job.tools){
                    job.tools.forEach(element => {
                        reqs.push(element);
                    });
                }

                job["reqs"] = reqs;
                
                optJobs.push(job);
            }
        )
    return optJobs;
}