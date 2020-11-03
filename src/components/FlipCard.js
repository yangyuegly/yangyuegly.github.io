import React from "react";
import ReactCardFlip from "react-card-flip";
import ProjectCard from "./ProjectCard.js";
class FlipCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div onClick={this.handleClick}>{this.props.children}</div>

        <div onClick={this.handleClick}>
          <ProjectCard
            description={this.props.text}
            href={this.props.href}
          ></ProjectCard>
        </div>
      </ReactCardFlip>
    );
  }
}
export default FlipCard;
