import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">+</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
