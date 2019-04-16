import React from 'react';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';

class SelectDate extends React.Component {
    state = {
        date: null,
        focused: null
    }

    
    render(){
        return(
            <div>
                <SingleDatePicker date={this.state.date} 
                onDateChange={date => this.setState({date})}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
                id={Date.now()} />
                
            </div>
        )
    }
    
}


// const moment = require('moment');

// function toMySQLDateFormat(date) { 
// return moment(date).format('YYYY-MM-DD');
// }