import './App.css';
import Rules from './components/rules';
import Header from './components/header';
import Game from './components/game';

function App() {
  const openRules=()=>{
    document.querySelector('.rules').style.display='block';
    setTimeout(()=>document.querySelector('.rules').style.opacity='1',100);
  }
  return (
    <div className='app'>
      <button onClick={openRules} className='rulebtn'>RULES</button>
      <Rules/>
      <Header/>
      <Game/>
    </div>
  );
}

export default App;
