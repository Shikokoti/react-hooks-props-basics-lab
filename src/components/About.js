// import React from "react";
// import Links from "./Links";

// function About(props) {
//   const { bio, links } = props; // ✅ properly access props
//   const { github, linkedin } = links;
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       <p>I made this!</p>
      
//       {bio && <p>{bio}</p>}
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
//       <Links bio = {props.inks.github} linkedin={props.links.linkedin} />
      
//     </div>
//   );
// }

// export default About;


import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, links } = props;
  const { github, linkedin } = links;

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
