import React from 'react';
import close from '../img/icon-close.svg';
import rule from '../img/image-rules.svg';


const Rules=()=>{
    const closeRules=()=>{
        document.querySelector('.rules').style.opacity='0';
        setTimeout(()=>document.querySelector('.rules').style.display='none',300);
    }
    return(
        <div className='rules'>
            <div>
                <span>RULES</span> 
                <img onClick={closeRules} className='close' src={close} alt="" />
            </div>
            <img className='rulesimg' src={rule} alt="" />
        </div>
    )
}
export default Rules;