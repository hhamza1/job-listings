import React from 'react';

import './tags.styles.scss';


const Tags = ({reqs, filter}) => {
        return (
            <div className="tag-list">
                {
                    reqs.map(
                        (req, key) => (
                            <span className="tag" key={key} onClick={filter} >
                                {req}
                            </span>
                        )
                    )
                }
            </div>
            
            
        )
    }

export default Tags;