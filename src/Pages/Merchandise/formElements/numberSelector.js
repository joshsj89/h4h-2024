import React from 'react';
import './formElements.css'

function NumberSelector({setNumber, formProgress}) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return <form id="number-form-container" style={{left: `${210-(formProgress * 100)}%`}} onSubmit={handleSubmit}>
        <h3>Select Your Number</h3>
        <div id="numbers-container">
            <input id="numbers-selector" type="number" onChange={(e) => {setNumber(e.target.value)}}></input>
        </div>
    </form>
}

export default NumberSelector;
