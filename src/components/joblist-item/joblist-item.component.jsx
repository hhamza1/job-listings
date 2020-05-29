import React from 'react';

import JobFeatures from '../job-features/job-features.component';
import Tags from '../tags/tags.component'


import './joblist-item.styles.scss';

const JoblistItem =({company, logo, featured, ...otherProps}) =>{
    return (
            <div className={`${featured ? 'joblist-item featured' : 'joblist-item'}`}>
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
                            featured={featured}
                            {...otherProps}
                        />
                        </div>
                    <Tags {...otherProps} />
                </div>
        )
    }

export default JoblistItem;