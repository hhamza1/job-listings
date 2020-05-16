import React from 'react';



const LanguageTag = ({languages}) => {
    return (
        languages.map((lang, key) => (
                <span className="tag" key={key}>
                    {lang}
                </span>
            )
        )
    )
}

export default LanguageTag;