import React from 'react';
import Select from './select';
import Result from './result';


const Game=({current,setCurrent})=>{
    return(
        <div className="game">
            {current==='select' ? <Select setCurrent={setCurrent}/>:<Result/>}

        </div>
    )
}

export default Game;