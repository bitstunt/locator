import logo from './logo.svg';
import SearchBox from './components/SearchBox';

//stylesheets
import './App.css';
import { useEffect, useState } from 'react';
import init,{pathFinder,nodenames,displayPath} from './utils/graph';

function App() {
  const [location,setLocation] = useState("");
  const [destination,setDestination] = useState("")
  const [path,setPath] = useState([]);
  const handleSubmit = ()=>{
    let node1=nodenames[location];
    let node2=nodenames[destination];
    console.log(node1,node2,location,destination)
    let foundPath = pathFinder.find(node1, node2);
    // console.log(foundPath)
    displayPath(foundPath)
  }
  useEffect(()=>{
    init();
  },[])
  return (
    <div className="App">
      <header> L<img className='logo' alt='logo' src={logo}/>CATOR </header>
      <SearchBox keywords={location} finalWords={setLocation} name="Current Location"/>
      <SearchBox keywords={destination} finalWords={setDestination} name="Destination"/>
      <button onClick={handleSubmit}  >Find Route</button>
    </div>
  );
}

export default App;
