import React, {useState} from "react";
import "./Merchandise.css";

function Merchandise() {

  const [prompt, setPrompt] = useState("")
  const [prompts, setPrompts] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let newPrompts = [...prompts];
    newPrompts.push(prompt);

    setPrompts(newPrompts);
  }

    return (
      <div id="MerchandiseContainer">
        <h1>This is Merchandise</h1>
        <form onSubmit={handleSubmit}>
          <input id="prompt-input" type="text" placeholder="Enter Your Prompt Here!" onChange={(e) => setPrompt(e.target.value)}></input>
          <button type="submit">submit</button>
        </form>
        {prompts.map((item, index) =>
          (<p key={index}>{item}</p>)
        )}
      </div>
    );
  }

export default Merchandise;
