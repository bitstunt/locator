//stylesheets
import { findAllByAltText } from '@testing-library/react';
import { useState } from 'react';
import '../stylesheets/SearchBox.css';
import Index from './Index';

function SearchBox(props) {
    const {keywords,finalWords} = props
    const [focus, setFocus] = useState(false)
    let handleChange = (event) => {
        finalWords((event.target.value))
    }
    return (
        <div className='bigContainer'>
            <div className="container">
                <input onFocus={() => setFocus(true)} type="text" value={keywords} placeholder={props.name} onChange={handleChange} name="search-box" />
                <label htmlFor="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
            </div>
            <Index focused={focus} setFocused={setFocus} query={keywords} setQuery={finalWords} />
        </div>
    );
}

export default SearchBox;