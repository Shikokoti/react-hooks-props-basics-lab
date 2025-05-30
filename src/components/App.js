// import React from "react";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import About from "./About";
// import user from "../data/user";
// import Links from "./Links";


// // pass this data down as props to the child component(s) that need it!


// console.log(user);

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home  name={user.name} city={user.city} color = {user.color}/>
//       <About bio={user.bio} links={user.links}/>
//       <Links/>
//     </div>
   
//   );
// }

// export default App;
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
