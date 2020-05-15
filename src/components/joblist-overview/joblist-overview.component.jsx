import React from 'react';

import Logo from '../../assets/photosnap.svg';

import './joblist-overview.styles.scss';

const JoblistOverview = () => {
    return (
        <div className="joblist-oveview">
            <div className="joblist-item">
                <div className="logo-container">
                    <img src={Logo} alt="photosnap" className="logo" />
                </div>
                <div className="job-features">
                    <h4 className="company-name">Photosnap</h4>
                    <span className="feature">
                        new!
                    </span>
                    <span className="feature feature--dark">
                        featured
                    </span>
                </div>
                <div className="job-description">
                    <h4 className="job-title">Senior Frontend Developer</h4>
                    <ul className="job-details">
                        <li>
                            1d ago
                        </li>
                        <li>
                            Full Time
                        </li>
                        <li>
                            USA only
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JoblistOverview;