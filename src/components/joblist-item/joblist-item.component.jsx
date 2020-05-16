import React from 'react';


import JobFeatures from '../job-features/job-features.component';
import LanguagesTag from '../languages-tag/languages-tag.component'

import { Logo } from './Logo.styled-component';


import './joblist-item.styles.scss';



const JoblistItem = ({company, featured, postedAt, position, contract, location, logo,role, level, languages}) => {
    return (
        <div className="joblist-item">
                <div className="logo-container">
                    <Logo img={logo} alt={company} />
                </div>
                <JobFeatures 
                    company={company} 
                    featured={featured} 
                    postedAt={postedAt}
                />
                <div className="job-description">
                    <h4 className="job-title">{position}</h4>
                    <ul className="job-details">
                        <li className="job-info">
                            <span className="info-text">{postedAt}</span>
                        </li>
                        <li className="job-info">
                            <span className="info-text">{contract}</span>
                        </li>
                        <li className="job-info">
                            <span className="info-text">{location}</span>
                        </li>
                    </ul>
                </div>
                <div className="tag-list">
                    <span className="tag">
                        {role}
                    </span>
                    <span className="tag">
                        {level}
                    </span>
                    <LanguagesTag languages={languages ? languages : []} />
                </div>
            </div>
    )
}

export default JoblistItem;