import React from 'react';

import JoblistItem from '../joblist-item/joblist-item.component';

import './joblist-overview.styles.scss';
import Jobs from '../../data.json';
import FiltersSection from '../filters-section/filters-section.component';

class JoblistOverview extends React.Component {
    state = {
        jobs: Jobs,
        filters: []
    }


    onTagClick = (e) => {
        let filters = this.state.filters;
        if(!filters.includes(e.target.innerHTML)) {
            filters.push(e.target.innerHTML);
        }
        this.setState({
            filters
        });
        console.log(this.state.filters);
        
    }

    render(){
        const {jobs, filters} = this.state;
        return (
            <div className="joblist-oveview">
                <FiltersSection filters={filters}/>
                {
                    jobs.map((job) => (
                        <JoblistItem key={job.id} {...job} filter={this.onTagClick}/>
                    ))
                }
            </div>
        )
    }
}

export default JoblistOverview;