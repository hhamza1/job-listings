import React from 'react';

import JoblistItem from '../joblist-item/joblist-item.component';

import './joblist-overview.styles.scss';
import Jobs from '../../data.json';
import FiltersSection from '../filters-section/filters-section.component';

import {optimizeJobs} from '../../utils/utils';

class JoblistOverview extends React.Component {
    state = {
        jobs: [],
        filters: []
    }

    componentDidMount(){
        this.setState({
            jobs: optimizeJobs(Jobs)
        });
    }


    

    onTagClick = (e) => {
        let filters = this.state.filters;
        if(!filters.includes(e.target.innerHTML)) {
            filters.push(e.target.innerHTML);
        }

        let newJobs = this.state.jobs.filter(
            job => filters.filter(element => job.reqs.indexOf(element) >= 0)
        )

        console.log(newJobs);


        this.setState({
            filters,
           /*  jobs: newJobs */
        });        
    }

    onClearFilter = (e) => {
        e.preventDefault();
        this.setState({
            filters: [],
            jobs: Jobs
        });
    }

    onRemoveFilter = (e) => {
        let filterItem = e.currentTarget.firstChild.innerHTML;
        let newFilters = this.state.filters.filter(element => element !== filterItem);

        this.setState({
            filters: newFilters
        });
    }

    render(){
        const {jobs, filters} = this.state;


        return (
            <div className="joblist-oveview">
                <FiltersSection 
                    filters={filters} 
                    clearFilter={this.onClearFilter}
                    removeFilter={this.onRemoveFilter}
                />
                {
                    jobs.map((job) => (
                        <JoblistItem 
                            key={job.id}
                            filter={this.onTagClick}
                            {...job}
                        />
                    ))
                }
            </div>
        )
    }
}

export default JoblistOverview;