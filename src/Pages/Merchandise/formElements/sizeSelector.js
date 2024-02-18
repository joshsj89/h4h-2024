import React from 'react';
import './formElements.css'

function SizeSelector({sizes, setSize, selectedSize, formProgress}) {
    return <form id="size-form-container" style={{left: `${110-(formProgress * 100)}%`}}>
        <h3>Select Your Size</h3>
        <div id="sizes-container">
            {sizes.map((item, index) => {
                return (
                <div className={((selectedSize === item) ? "size-selector-option size-selected" : "size-selector-option")}
                key={index}
                style={{backgroundColor: item}}
                onClick={() => {
                    setSize(item);
                }}>
                    <p><strong>{item}</strong></p>
                </div>)
            })}
        </div>
    </form>
}

export default SizeSelector;
