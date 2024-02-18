import React from "react";
import "./GetInvolved.css";
import Map from "../../Components/Map/Map";

function GetInvolved() {
  return (
    <div id="GetInvolvedContainer">
      <div id="GetInvolvedLanding">
        <article>
          <h1>FIND YOUR TEAM</h1>
          <p>Interactive map locator enabling users to discover power soccer teams by state, with clickable pinpoints leading to individual team pages.</p>
        </article>
      </div>
      <Map />
      <section>
        <div id="GetInTouchSummary">
          <h1>Let's Get in Touch!</h1>
          <p>
            Decided to join a team or volunteer? Reach out to us via email,
            phone, or the contact form below. We're eager to assist you.
          </p>
          <p>Nice hearing from you!</p>
        </div>
        <form>
          <div>
            <label htmlFor="to-team">To Team:</label>
            <input type="text" label="To Team" placeholder="To Team" />
          </div>
          <div>
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" label="Full Name" placeholder="Full Name" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input style={{height: '300px'}} type="text" label="Full Name" />
          </div>
          <button type="submit">Sign Up:</button>
        </form>
      </section>
    </div>
  );
}

export default GetInvolved;
