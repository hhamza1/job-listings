import React from 'react';

import './job-description.styles.scss';

const JobDescription = ({position, postedAt, contract, location}) => {
    return (
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
    )
}

export default JobDescription;