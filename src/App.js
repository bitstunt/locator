import logo from './logo.svg';
import SearchBox from './components/SearchBox';

//stylesheets
import './App.css';

function App() {
  return (
    <div className="App">
      <header> L<img className='logo' alt='logo' src={logo}/>CATOR </header>
      <SearchBox name="Current Location"/>
      {/* <SearchBox name="Destination"/> */}
    </div>
  );
}

export default App;
