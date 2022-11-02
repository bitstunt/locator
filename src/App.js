import logo from './logo.svg';
import SearchBox from './components/SearchBox';

//stylesheets
import './App.css';
import { useEffect, useState } from 'react';
import init,{pathFinder,nodenames,namenodes,displayPath} from './utils/graph';

function App() {
  const [location,setLocation] = useState("");
  const [destination,setDestination] = useState("")
  const [path,setPath] = useState([]);
  const handleSubmit = ()=>{
    let node1=parseInt(namenodes[location]);
    let node2=parseInt(namenodes[destination]);

    let foundPath = pathFinder.find(node1, node2);
    // console.log(foundPath)
    setPath(displayPath(foundPath))
  }
  let renderPath = path.map((e,i) =>{
    return(
      <div className="path" key={i}>{e}</div>
    )
  })
  useEffect(()=>{
    init();
  },[])
  return (
    <div className="App">
      <header> L<img className='logo' alt='logo' src={logo}/>CATOR </header>
      <SearchBox keywords={location} finalWords={setLocation} name="Current Location"/>
      <SearchBox keywords={destination} finalWords={setDestination} name="Destination"/>
      <button className="submitButton" onClick={handleSubmit}  >Find Route</button>
      <div className="paths">
        {renderPath}
      </div>
    </div>
  );
}

export default App;
