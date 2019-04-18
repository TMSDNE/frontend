import React from 'react';
import Article from './Article'
import {connect} from 'react-redux';
import {getData} from '../actions/fetchArticles';

const ArticleList = props => {
    return (
        <div>
            {props.articles.map(article => (
                <Article article={article} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.article
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(ArticleList);