import React from 'react';

import './tags.styles.scss';


class Tags extends React.Component {
    render(){

        const {role, level, languages, tools, filter} = this.props; 


        return (
            <div className="tag-list">
                <span className="tag" onClick={filter} >
                    {role}
                </span>
                <span className="tag" onClick={filter}>
                    {level}
                </span>
               {languages ? 
                     languages.map((lang, key) => (
                        <span className="tag" key={key} onClick={filter}>
                            {lang}
                        </span>)) : <span />
                }
                {
                    tools ? 
                    tools.map((tool, key) => (
                        <span className="tag" key={key} onClick={filter}>
                            {tool}
                        </span>)) : <span />
                }
               
            </div>
            
            
        )
    }
}

export default Tags;