/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './filters-section.styles.scss';


const FiltersSection = ({filters}) => {
    return (
        <div className="filters-section">
            {
                filters.length > 0 ? (
                    filters.map((filter, key) => (
                            <span className="filter-item" key={key}>
                                <span className="filter">{filter}</span>
                                <span className="remove-filter">
                                    X
                                </span>
                            </span>
                    ))
                ):(
                    ''
                )
            }
            {   

                filters.length > 0 ? (
                    <a href="#" className="clear-btn">clear</a>
                ):
                ('')
            }
        </div>
    );
}

export default FiltersSection;