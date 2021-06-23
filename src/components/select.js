import React from 'react';
import paper from '../img/icon-paper.svg';
import scissors from '../img/icon-scissors.svg';
import rock from '../img/icon-rock.svg';


const Select=({setCurrent,setUser,setCom,setRes,setScore,score})=>{
    const comchoice=(u)=>{
        let choices=['paper','rock','scissors'];
        let r=Math.floor(Math.random() * 3);
        setCom(choices[r]);
        if (choices[r]===u){
            setRes('DRAW');
        }
        if (choices[r]==='paper'&&u==='rock'){
            setRes('YOU LOSE');
            setScore(score-1);
        }
        if (choices[r]==='paper'&&u==='scissors'){
            setRes('YOU WIN');
            setScore(score+1);
        }
        if (choices[r]==='rock'&&u==='scissors'){
            setRes('YOU LOSE');
            setScore(score-1);
        }
        if (choices[r]==='rock'&&u==='paper'){
            setRes('YOU WIN');
            setScore(score+1);
        }
        if (choices[r]==='scissors'&&u==='rock'){
            setRes('YOU WIN');
            setScore(score+1);
        }
        if (choices[r]==='scissors'&&u==='paper'){
            setRes('YOU LOSE');
            setScore(score-1);
        }
    }
    return(
        <div className="select">
            <div className="sl-paper">
                <div onClick={()=>{
                    setUser('paper');
                    comchoice('paper');
                    setCurrent('result');
                }} className="paper-icon"><img src={paper} alt="" /></div>
            </div>
            <div className="sl-scissors">
                <div onClick={()=>{
                    setUser('scissors');
                    comchoice('scissors');
                    setCurrent('result');
                }} className='scissors-icon'><img src={scissors} alt="" /></div>
            </div>
            <div className="sl-rock">
                <div onClick={()=>{
                    setUser('rock');
                    comchoice('rock');
                    setCurrent('result');
                }} className="rock-icon"><img src={rock} alt="" /></div>
            </div>
        </div>
    )
}

export default Select;