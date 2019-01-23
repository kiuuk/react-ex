import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div style={{ disply: "block", padding: "5px" }}>
        {this.props.children}
        <span style={{ minWidth: 60, lineHeight: 2 }} className={classes}>
          {this.formatCount()}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
          +
        </button>
        <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm ml-1">
          -
        </button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm ml-1">
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count > 0) return this.setState({ count: this.state.count - 1 });
  };

  getBadgeClasses() {
    let classes = "badge mr-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "0" : count;
  }
}

export default Counter;
