import React from 'react';
import paper from '../img/icon-paper.svg';
import scissors from '../img/icon-scissors.svg';
import rock from '../img/icon-rock.svg';


const Result = ({ setCurrent, user, com, res }) => {
    setTimeout(() => {
        document.querySelector('.result-text').style.width = '33%';
        document.querySelector('.result-text').style.transform = 'scale(1,1)';
    }, 500);
    return (
        <div className="result">
            <div className="user">
                <span>YOU PICKED</span>
                <div className={user}><img src={user === 'paper' ? paper : user === 'rock' ? rock : user === 'scissors' ? scissors : ''} alt="" /></div>
            </div>
            <div className="result-text">
                <span>{res}</span>
                <button onClick={() => setCurrent('select')}>PLAY AGAIN</button>
            </div>
            <div className='com'>
                <span>THE HOUSE PICKED</span>
                <div className={com}><img src={com === 'paper' ? paper : com === 'rock' ? rock : com === 'scissors' ? scissors : ''} alt="" /></div>
            </div>
        </div>
    )
}

export default Result;