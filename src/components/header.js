import React from 'react';
import logo from '../img/logo.svg';


const Header=({score})=>{
    return(
        <div className="header">
            <img src={logo} alt="" />
            <div className="score">
                <span className='score-text'>SCORE</span>
                <span className='score-num'>{score}</span>
            </div>
        </div>
    )
}

export default Header;