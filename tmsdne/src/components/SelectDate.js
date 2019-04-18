import React from 'react';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);


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
                id={Date().now}
                numberOfMonths={1}
                disableScroll={true}
                 />
                
            </div>
        )
    }
    
}

export default SelectDate;