import React from 'react';
import SelectDate from './SelectDate';

const Header = props => {
    const today = new Date().toLocaleDateString()
    return (
        <div>
            <nav className="navbar-container">
                <div className='logo-container'>
                    Logo Here
                </div>
                <div className='dateSelector-container'>
                    {/* <SelectDate /> */}
                </div>
                <div className='todays-date'>
                    {today}
                </div>
            </nav>
        </div>
    )
}

export default Header