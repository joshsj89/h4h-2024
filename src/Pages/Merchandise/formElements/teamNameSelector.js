import React from 'react';
import './formElements.css'

function TeamNameSelector({setTeamName, formProgress}) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return <form id="team-name-form-container" style={{left: `${310-(formProgress * 100)}%`}} onSubmit={handleSubmit}>
        <h3>Select Your Team Name</h3>
        <div id="team-name-container">
            <input id="team-name-selector" type="text" onChange={(e) => {setTeamName(e.target.value)}}></input>
        </div>
    </form>
}

export default TeamNameSelector;
