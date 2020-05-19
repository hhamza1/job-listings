import React from 'react';

import './job-features.styles.scss';


const JobFeatures = ({company, featured, postedAt, position, contract, location}) => {
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
            <div className="job-description">
                <h4 className="job-title">{position}</h4>
                <ul className="job-details">
                    <li className="job-info">
                        <span className="info-text">{postedAt ? postedAt : ''}</span>
                    </li>
                    <li className="job-info">
                        <span className="info-text">{contract}</span>
                    </li>
                    <li className="job-info">
                        <span className="info-text">{location}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default JobFeatures;