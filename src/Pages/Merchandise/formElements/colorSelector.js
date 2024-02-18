import React from 'react';
import './formElements.css'

function ColorSelector({colors, setColor, selectedColor, formProgress}) {
    console.log(colors);
    return <form id="color-form-container" style={{left: `${10-(formProgress * 100)}%`}}>
        <h3>Select Your Color</h3>
        <div id="colors-container">
            {colors.map((item, index) => {
                return (
                <div className={((selectedColor === item) ? "color-selector-option selected" : "color-selector-option")}
                key={index}
                style={{backgroundColor: item}}
                onClick={() => {
                    setColor(item);
                }}>
                </div>)
            })}
        </div>
    </form>
}

export default ColorSelector;
