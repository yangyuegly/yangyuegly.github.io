// import React from "react";
// import ReactDOM from "react-dom";
// import CommentDetail from "./CommentDetail";
// import ProjectCard from "./ProjectCard";
// import FlipCard from "./FlipCard";
// import Set from "./Set.js";
// import NoMatch from "./NoMatch.js";
// import Project from "./Project";
// import ReactCardFlip from "react-card-flip";

// import {
//   Button,
//   Navbar,
//   Container,
//   Row,
//   Col,
//   Nav,
//   NavDropdown,
//   Form,
//   FormControl,
// } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FormPage from "./FormPage";

// const App = () => {
//   return (
//     <div className="front-page">
//       <div>
//         <section
//           id="colorlib-hero"
//           className="js-fullheight"
//           data-section="home"
//         >
//           <div className="flexslider js-fullheight">
//             <ul className="slides">
//               <li style={{ backgroundImage: "url(images/img_bg_1.jpg)" }}>
//                 <div className="overlay" />
//                 <div className="container-fluid">
//                   <div className="row">
//                     <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
//                       <div className="slider-text-inner js-fullheight">
//                         <div className="desc">
//                           <h1>
//                             Hi! <br />
//                             I'm Jane Yue Yang!
//                           </h1>
//                           <h2></h2>
//                           <p>
//                             <a className="btn btn-primary btn-learn">
//                               Download CV <em className="icon-download4" />
//                             </a>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//               <li style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}>
//                 <div className="overlay" />
//                 <div className="container-fluid">
//                   <div className="row">
//                     <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
//                       <div className="slider-text-inner">
//                         <div className="desc">
//                           <h1>
//                             I am <br />a rising junior studying CS and
//                             philosophy at Brown University.
//                           </h1>
//                           <h2>
//                             I am <br />a rising junior studying CS and
//                             philosophy at Brown University.
//                           </h2>
//                           <p>
//                             <a className="btn btn-primary btn-learn">
//                               View Portfolio <em className="icon-briefcase3" />
//                             </a>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </section>
//       </div>
//       <Navbar bg="light" expand="lg">
//         {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/projects">Projects</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//           </Nav>
//           <Form inline>
//             <FormControl
//               type="text"
//               placeholder="your contact"
//               className="mr-sm-2"
//             />
//             <Button variant="outline-success">
//               Send me your contact and we can chat!
//             </Button>
//           </Form>
//         </Navbar.Collapse>
//       </Navbar>
//       <Router>
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/projects">
//             <Projects />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/*">
//             <About />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// };
// function About() {
//   var divStyle = {
//     backgroundImage: "./gulang.jpg",
//   };
//   return <Project></Project>;
// }

// function Projects() {
//   return <Set></Set>;
// }

// function Contact() {
//   return <FormPage></FormPage>;
// }

// ReactDOM.render(<App />, document.querySelector("#root"));
