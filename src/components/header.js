import react from 'react';
import logo from '../img/logo.svg';


const Header=()=>{
    return(
        <div className="header">
            <img src={logo} alt="" />
            <div className="score">
                <span>SCORE</span>
                <span>12</span>
            </div>
        </div>
    )
}

export default Header;