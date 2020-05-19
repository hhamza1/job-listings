import React from 'react';

import JobFeatures from '../job-features/job-features.component';
import JobDescription from '../job-description/job-description.component';
import Tags from '../tags/tags.component'

import './joblist-item.styles.scss';

const JoblistItem = ({company, logo,...job}) => {
    return (
        <div className="joblist-item">
                <div className="logo-container">
                    <img
                        src={logo}
                        className="logo"
                        alt={company} 
                    />
                </div>
                <JobFeatures company={company} {...job}/>
                <JobDescription {...job} />
                <Tags {...job} />
            </div>
    )
}

export default JoblistItem;