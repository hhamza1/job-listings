import React from 'react';

import JoblistItem from '../joblist-item/joblist-item.component';

import './joblist-overview.styles.scss';
import Jobs from '../../data.json';

class JoblistOverview extends React.Component {
    state = {
        jobs: Jobs
    }
    render(){
        const {jobs} = this.state;
        return (
            <div className="joblist-oveview">
                {
                    jobs.map((job) => (
                        <JoblistItem key={job.id} {...job} />
                    ))
                }
            </div>
        )
    }
}

export default JoblistOverview;