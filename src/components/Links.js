// import About from "./About"
// import user from "../data/user"
// import Home from "./Home"


// function Links(props) {
//     return (
//         <>
//             <h3>Links</h3>
//             <a href={props.github} target="_blank" rel="noopener noreferrer">
//                 {props.github}
//             </a>
//             <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
//                 {props.linkedin}
//             </a>
//         </>
//     )
// }
// export default Links

import React from "react";

function Links(props) {
  return (
    <>
      <h3>Links</h3>
      <a href={props.github} target="_blank" rel="noopener noreferrer">
        {props.github}
      </a>
      <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
        {props.linkedin}
      </a>
    </>
  );
}

export default Links;
