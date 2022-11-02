import { useState } from "react";
//stylesheets
import '../stylesheets/Index.css';

import {getNamesArray,nodenames} from '../utils/graph'
function Index (props) {
    let options = getNamesArray(nodenames)

    let filterOption = (options, query) => {
        if (!query)
            return [];

        query = query.toLowerCase()
        return options.filter((e) => {
            return e.includes(query)
        })
    }
    let result = filterOption(options, props.query);
    let option = result.map((e, i) => {
        return (
            <button className="ibutton" onClick={() => {props.setFocused(false); props.setQuery(e);}} key={i}>{e}</button>
        )
    })
    return (
        <div className={(props.focused) ? 'iContainer' : 'iContainer invisible'}>
            {option}
        </div>
    );
}

export default Index;