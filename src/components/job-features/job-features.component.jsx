import React from 'react';

import './job-features.styles.scss';


const JobFeatures = ({company, featured, postedAt}) => {
    return (
        <div className="job-features">
            <div className="job-features-list">
                <h4 className="company-name">{company}</h4>
                {
                    postedAt === "1d ago"|| postedAt === "2d ago" ? (
                        <span className="feature">
                            new!
                        </span>
                    ):
                    (
                        <span />
                    )
                }
                {
                    featured === true ? (
                            <span className="feature feature--dark">
                                featured
                            </span>
                    ):(
                        <span />
                    )
                }
            </div>
        </div>
    )
}

export default JobFeatures;