import React from "react";

const ProjectCard = (props) => {
  return (
    <div class="ui link cards" height="200">
      <div class="card" height="200">
        <div class="image">
          <img src={props.image} height="100"></img>
        </div>
        <div class="content">
          <div class="header">{props.title}</div>
          <div class="meta">
            <a>{props.course}</a>
          </div>
          <div class="description">{props.description}</div>
          <div>
            {props.href ? (
              <a href={props.href}>Check out our website!</a>
            ) : (
              <div />
            )}
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
