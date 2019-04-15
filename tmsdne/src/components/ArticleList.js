import React from 'react';

const ArticleList = props => {
    return (
        <div>
            {props.articles.map(article => {
                return (
                    <div className='articleCard'>
                        <img src=''/>
                        <h4>{article.title}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleList;