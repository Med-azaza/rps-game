import react from 'react';
import logo from '../img/logo.svg';


const Header=()=>{
    return(
        <div className="header">
            <img src={logo} alt="" />
            <div className="score">
                <span className='score-text'>SCORE</span>
                <span className='score-num'>12</span>
            </div>
        </div>
    )
}

export default Header;