import { useState } from "react";
import {getNamesArray,nodenames} from '../utils/graph'
function Index (props) {
    const [visibility,setVisibility] = useState(true)
    let options = getNamesArray(nodenames)
    let filterOption = (options, query) => {
        if(!query)
        return [];
        
        query = query.toLowerCase()
        return options.filter((e) => {
            return e.includes(query)
        })
    }
    let result = filterOption(options, props.query);
    let option = result.map((e,i) => {return (
    <button onClick={() =>{
        props.setQuery(e)
    setVisibility(false)}
    } key={i}>{e}</button>
    )})
    return(
        <div className="iContainer">
            {option}
        </div>
    );
}

export default Index;