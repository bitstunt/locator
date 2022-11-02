//stylesheets
import { findAllByAltText } from '@testing-library/react';
import { useState } from 'react';
import '../stylesheets/SearchBox.css';
import Index from './Index';

function SearchBox(props) {
    const {keywords,finalWords} = props
    // const [keywords, finalWords] = useState('')
    let handleChange = (event) => {
        finalWords((event.target.value))
    }
    return (
        <>
            <div className="container">
                <input type="text" value={keywords} placeholder={props.name} onChange={handleChange} name="search-box" />
                <label htmlFor="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
            </div>
            <Index query={keywords} setQuery={finalWords} />
        </>
    );
}

export default SearchBox;