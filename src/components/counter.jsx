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
        <span style={{ minWidth: 60, lineHeight: 2 }} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <div>{this.listCondition()}</div>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  listCondition() {
    if (this.state.tags.length === 0) return "No tags";
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge mr-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
