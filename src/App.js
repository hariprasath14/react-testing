import logo from './logo.svg';
import './App.css';

function App() {
  var x=[1,2,3,4]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi From Hari
        </p>
        {x.map((y)=><li>{y}</li>)}
        <p>my live site is now auto deploye on change</p>
      </header>
    </div>
  );
}

export default App;
