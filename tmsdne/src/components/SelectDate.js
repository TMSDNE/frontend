import React from 'react';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';
import {getData, storeDate} from '../actions';
import { connect } from 'react-redux';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);


class SelectDate extends React.Component {
    state = {
        date: null,
        focused: null
    }

    componentWillReceiveProps(){
        this.props.getData(this.props.date)
    }
    
    toISODateString(date) {
        const month = date.getMonth()+1 <10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`
        const day = date.getDate()+1 <10 ? `0${date.getDate()+1}` : `${date.getDate()+1}`
        return this.props.storeDate(`${date.getFullYear()}-${month}-${day}`)
    }

    render(){
        return(
            <div>
                <SingleDatePicker date={this.state.date} 
                    onDateChange={date => 
                        this.setState({date: this.toISODateString(date._d)})
                    }
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    id={Date().now}
                    numberOfMonths={1}
                    disableScroll={true}
                    isOutsideRange={() => false}
                 />
            </div>
        )
    }
    
}

const mapToDispatch = {getData, storeDate}

export default connect(null, mapToDispatch)(SelectDate)