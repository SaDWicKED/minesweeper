import { Header } from './components/Header/Header';
import { Scoreboard } from './components/Scoreboard';

function App() {
  return (
    <>
      <div className="App">
        <Header
          feature="Flag"
          firstAction="ctrl"
          secondAction="click"
        >
          Minesweeper
        </Header>
      </div>
      <Scoreboard 
        time='000'
        levels={['beginner','intermediate','expert']}
        mines='010'
        onReset={()=>null}
      />
    </>
  );
}

export default App;
