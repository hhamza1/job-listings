import React from 'react';

import JobFeatures from '../job-features/job-features.component';
import Tags from '../tags/tags.component'

import './joblist-item.styles.scss';

const JoblistItem = ({company, logo,...job}) => {
    return (
        <div className="joblist-item">
                <div className="job">
                    <div className="logo-container">
                        <img
                            src={logo}
                            className="logo"
                            alt="logo"
                        />
                    </div>
                    <JobFeatures 
                        company={company}
                        {...job}
                    />
                    </div>
                <Tags {...job} />
            </div>
    )
}

export default JoblistItem;