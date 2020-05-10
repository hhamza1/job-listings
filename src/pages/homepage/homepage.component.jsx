import React from 'react';

import JoblistOverview from '../../components/joblist-overview/joblist-overview.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="home-page">
           <JoblistOverview />
        </div>
    )
}

export default HomePage;
