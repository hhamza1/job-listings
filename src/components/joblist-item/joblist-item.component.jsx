import React from 'react';

import JobFeatures from '../job-features/job-features.component';
import Tags from '../tags/tags.component'


import './joblist-item.styles.scss';

const JoblistItem =({company, logo, ...otherProps}) =>{
    return (
            <div className="joblist-item">
                    <div className="job">
                        <div className="logo-container">
                            <img
                                src={require(`../../assets/${logo}`)}
                                className="logo"
                                alt="logo"
                            />
                        </div>
                        <JobFeatures 
                            company={company}
                            {...otherProps}
                        />
                        </div>
                    <Tags {...otherProps} />
                </div>
        )
    }

export default JoblistItem;