import react from 'react';
import logo from '../img/logo.svg';


const Header=()=>{
    return(
        <div className="header">
            <img src={logo} alt="" />
            <div className="score"></div>
        </div>
    )
}

export default Header;