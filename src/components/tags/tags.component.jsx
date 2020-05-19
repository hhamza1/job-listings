import React from 'react';

import './tags.styles.scss';


const Tags = ({role,level,languages,tools}) => {
    return (
        <div className="tag-list">
            <span className="tag">
                {role}
            </span>
            <span className="tag">
                {level}
            </span>
           {languages ? 
                 languages.map((lang, key) => (
                    <span className="tag" key={key}>
                        {lang}
                    </span>)) : <span />
            }
            {
                tools ? 
                tools.map((tool, key) => (
                    <span className="tag" key={key}>
                        {tool}
                    </span>)) : <span />
            }
           
        </div>
        
        
    )
}

export default Tags;