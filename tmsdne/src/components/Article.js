import React from 'react';

const Article = props => {
    return (
        <div>
            <img>{props.img}</img>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Article; 