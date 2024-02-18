import React from "react";
import Typewriter from "typewriter-effect";

function TextingTitle() {
  return (
    <div class="TextingTitleContainer">
      <Typewriter
        options={{
          strings: ["GAME", "SPORT", "LIFESTYLE", "DISABILITY"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default TextingTitle;
