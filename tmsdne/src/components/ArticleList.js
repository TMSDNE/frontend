import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';


class ArticleList extends React.Component {
    state = {
        liked: false 
    }

    componentWillReceiveProps(){
        // this.props.getData(this.props.date)
    }
    
    handleLike = like => {
        if (this.state.liked === true) {
            this.setState({liked: !this.state.liked})
        } else {
            this.setState({liked: !this.state.liked})
        }
    }
    
    render(){
        return (
            <div>
               <p>{this.props.article.commentary}</p>
               {/* <i className="far fa-heart" onClick={ () => this.handleLike(this.state.liked)}></i> */}
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        article: state.article,
        date: state.date
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(ArticleList);