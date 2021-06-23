import React,{useState} from 'react';
import Select from './select';
import Result from './result';


const Game=({current,setCurrent,setScore,score})=>{
    const [user,setUser]=useState('');
    const [com,setCom]=useState('');
    const [res,setRes]=useState('');
    return(
        <div className="game">
            {current==='select' ? <Select setUser={setUser}
            setScore={setScore}
            score={score}
             setRes={setRes}
              setCom={setCom}
               setCurrent={setCurrent}/>:<Result score={score}
                setScore={setScore}
                 user={user} 
                 setCurrent={setCurrent}
                 com={com}
                 res={res} />}
        </div>
    )
}

export default Game;