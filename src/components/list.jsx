import React, { Component } from "react";

class List extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return <div>{this.listCondition()}</div>;
  }

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
}

export default List;
