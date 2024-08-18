import React from 'react'
import './SubTitleText.css';

function SubTitleText (props) {
    const { content } = props;
    return (
        <div className="subtitle-text">
            {content}
        </div>
    )
}

export default SubTitleText;