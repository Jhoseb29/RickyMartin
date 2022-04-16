import './App.css';
import SearchBox from './components/SearchBox';

function App() {

  return (
    <div className="App">
      <header className='header'>
        <h1>Rick & Morty App</h1>
        <SearchBox />
      </header>
      <footer className='footer'>
        <p><b>Powered by:</b> The Rick and Morty API</p>
        <p><b>Designed by:</b> Jhoseb29 & TheKiller1959</p>
        <p><b>2022</b></p>
      </footer>
   </div>
  );
}

export default App;
