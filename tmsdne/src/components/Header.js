import React from 'react';
import SelectDate from './SelectDate';
import '../styles/main.css'

const Header = props => {
    const format = {weekday: 'short', month: 'long', day: 'numeric', year: 'numeric'}
    const today = new Date().toLocaleDateString('en-US', format)
    return (
        <div className=''>
            <nav className="flex flex-row justify-between mt-5">
                <div className=''>
                    <p>This Market Summary
                        <br/> 
                        Does Not Exist</p>
                </div>
                <div className=''>
                    <SelectDate />
                </div>
                <div className=''>
                    {today}
                </div>
            </nav>
        </div>
    )
}

export default Header