/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './filters-section.styles.scss';


const FiltersSection = ({filters}) => {
    return (
        <div className="filters-section">
            {
                filters ? (
                    filters.map((filter, key) => (
                            <span key={key}>{filter}</span>
                    ))
                ):(
                    <span />
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