import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FormNextLink } from "grommet-icons";
import LiterallyARectangle from "../../Images/LiterallyARectangle.png";
import ActionThumbnail from "./ActionThumbnail";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import Model from "../../Components/Model/Model";
import TextingTitle from "./TextingTitle";

function Home() {
  return (
    <div id="HomeContainer">
      <div id="LandingSection">
        <section>
          <div>
            <p>
              U.S. Power Soccer
              <img
                style={{ margin: "0 0 0 10px" }}
                src={LiterallyARectangle}
                alt="rectangle"
              ></img>
            </p>
          </div>
          <h1>MORE THAN JUST A <section><TextingTitle /></section></h1>
          <p>
            Power soccer isn’t just a game. It’s a way of life. For the coaches,
            athletes, staff, and volunteers, power soccer builds lifelong
            relationships while offering opportunities to compete against some
            of the best teams in the world. If you’re the kind of person that
            wants to dig deep, fight hard, and prove yourself in the heat of
            competition, power soccer might just be what you’ve been looking
            for.
          </p>
          <Link class="NavLink" id="actionButton" to="get-involved">
            Get Involved
            <FormNextLink color="white" />
          </Link>
        </section>
      </div>
      <div id="LearnAbout">
        
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          style={{ width: "500px", height: "500px" }}
        >
          {/* <color attach="background" args={["#101010"]} /> */}
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment = {"night"}>
              <Model scale={0.007} />
            </Stage>
          </PresentationControls>
        </Canvas>
        <section>
          <h1>Learn about the <text>sport</text> and <text>support</text> the cause</h1>
          <p>
            Power soccer is the first competitive team sport designed and
            developed specifically for power wheelchair users. Athletes'
            disabilities include quadriplegia, muscular dystrophy, cerebral
            palsy, arthrogryposis and many others. The game is played in a
            gymnasium on a regulation basketball court. Two teams of four
            players attack, defend, and spin-kick a 13-inch soccer ball in a
            skilled and challenging game similar to able-bodied soccer.
          </p>
          <Link id="LearnMoreButton" to="about">
            Learn More
          </Link>
        </section>
      </div>
      <div id="ThumbnailAction">
        <section>
          <ActionThumbnail
            title="WHY POWER SOCCER?"
            text="Discover the heart behind Power Soccer Hub and learn why our mission is pivotal in transforming lives through the power of inclusive sports."
          />
          <ActionThumbnail
            title="MAKE YOUR LOGO"
            text="Explore endless possibilities and customize your power soccer journey with unique merchandise options available."
          />
          <ActionThumbnail
            title="FIND YOUR TEAM"
            text="Navigate the power soccer community and find your team with ease using our interactive map feature."
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
