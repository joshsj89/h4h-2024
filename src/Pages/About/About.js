import React from "react";
import "./About.css";
import ReactPlayer from "react-player";
import AboutVideo from "../../Images/AboutVideo.mov";

function About({ isLoggedIn, userID }) {
  return (
    <div id="AboutContainer">
      <article>
        <section>
          <h1>ABOUT</h1>
          <p>
            Power soccer offers invaluable benefits to individuals with
            disabilities. With the prevalence of depression among adults with
            disabilities estimated at 41% higher than in the general population,
            the sport emerges as a powerful tool for mental well-being. Through
            power soccer, players gain confidence, self-esteem, and
            independence—a unique opportunity often inaccessible in other
            aspects of life. Moreover, the sport fosters a sense of belonging
            within a community, nurturing meaningful relationships and providing
            vital stress relief. For disabled individuals, Power Soccer Hub
            represents not just a website but a gateway to empowerment,
            camaraderie, and transformative experiences.
          </p>
        </section>
        <p id="aboutFurtherText">
          Power Soccer Hub isn't just for individuals with disabilities; it's a
          platform for the entire community to embrace inclusivity and redefine
          perceptions. By recognizing power soccer as a legitimate sport,
          able-bodied individuals can actively contribute to dispelling ableism
          and fostering a culture of support and respect.
          <br></br>
          The website encourages able-bodied individuals to engage deeply,
          whether through volunteering as committed coaches, referees, or
          assistants, or by simply participating as enthusiastic supporters.
          Through sportsmanship and solidarity, Power Soccer Hub invites
          everyone to celebrate the extraordinary capabilities and diversity of
          individuals with disabilities, fostering a community where admiration
          and inclusivity reign supreme.
        </p>
      </article>
      <div className="videoWrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          className="react-player"
          playing={true}
          url={AboutVideo}
          controls={true}
        />
      </div>
    </div>
  );
}

export default About;
