import React from 'react';
import paper from '../img/icon-paper.svg';
import scissors from '../img/icon-scissors.svg';
import rock from '../img/icon-rock.svg';


const Select=({setCurrent})=>{
    return(
        <div className="select">
            <div className="sl-paper">
                <div onClick={()=>{
                    setCurrent('result');
                }} className="paper-icon"><img src={paper} alt="" /></div>
            </div>
            <div className="sl-scissors">
                <div onClick={()=>{
                    setCurrent('result');
                }} className='scissors-icon'><img src={scissors} alt="" /></div>
            </div>
            <div className="sl-rock">
                <div onClick={()=>{
                    setCurrent('result');
                }} className="rock-icon"><img src={rock} alt="" /></div>
            </div>
        </div>
    )
}

export default Select;