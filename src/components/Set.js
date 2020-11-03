import React from "react";
import ReactCardFlip from "react-card-flip";
import ProjectCard from "./ProjectCard.js";
import FlipCard from "./FlipCard.js";

import {
  Button,
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

const spanStyles = {
  margin: "50px",
  display: "table-row",
  paddingBottom: "10px",
};

const colStyles = {
  margin: "50px",
  paddingBottom: "10px",
  display: "block",
};
class Set extends React.Component {
  render() {
    return (
      <Container>
        {/* <Row style={spanStyles}> */}
        {/* <Col style={colStyles}> */}
        <table>
          <tr>
            <td style={{ paddingTop: "30px" }}>
              <FlipCard
                text="An important part of creating total-ordered, fault-tolerant distributed systems
is providing the ability for multiple nodes to come to a consensus about state. In this spirit, a group of researchers at Stanford (Diego Ongaro and John Ousterhout) developed the Raft protocol in 2014, which is what you will be implementing in this project. Raft is a consensus protocol that was designed with
the primary goal of understandability without compromising on correctness or
performance (when compared to protocols like Paxos). This project is a go implementation of the raft algorithm."
              >
                <ProjectCard
                  title="Raft"
                  image="./raft.png"
                  course="Distributed System"
                  description="A consensus algoirhtm."
                  time="Go"
                ></ProjectCard>
              </FlipCard>
            </td>
            <td>
              <FlipCard href="https://cryptic-bastion-80345.herokuapp.com/home">
                <ProjectCard
                  title="Sked"
                  image="./Sked.png"
                  course="Software Engineering"
                  description="A large conference scheduler based on graph coloring algorithm. "
                  time="Apache Spark, MongoDB, Socket, Web Scraping"
                ></ProjectCard>
              </FlipCard>
            </td>
            <td style={{ paddingTop: "30px" }}>
              <FlipCard text="In the first part of Database Management System course, we learned about techniques such as normalization forms and query optimizations to build a database for efficient queries.              ">
                <ProjectCard
                  title="Yelp"
                  image="./yelp.png"
                  course="Database Management"
                  description="A mini yelp database."
                  time="PostgreSQL"
                ></ProjectCard>
              </FlipCard>
            </td>
          </tr>
        </table>
      </Container>
    );
  }
}
export default Set;
