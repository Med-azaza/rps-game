import React,{useState} from 'react';
import './App.css';
import Rules from './components/rules';
import Header from './components/header';
import Game from './components/game';

function App() {
  const [current,setCurrent]=useState('select');
  const openRules=()=>{
    document.querySelector('.rules').style.display='block';
    setTimeout(()=>document.querySelector('.rules').style.opacity='1',100);
  }
  return (
    <div className='app'>
      <button onClick={openRules} className='rulebtn'>RULES</button>
      <Rules/>
      <Header/>
      <Game current={current} setCurrent={setCurrent}/>
    </div>
  );
}

export default App;
