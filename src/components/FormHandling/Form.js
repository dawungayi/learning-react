import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react", // default attribute at init
    };
  }

  handleUserNameChange = (event) => {
    // event parameter is passed by default
    // event.target.value
    this.setState({
      username: event.target.value,
    });
    console.log("username");
  };

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
    console.log("comment");
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
    console.log("topic");
  };

  handleSubmit = (event) => {
    // retrieve form data
    alert(
    	`Name: ${this.state.username}\n` +
        `Comments: ${this.state.comments}\n` +
        `Topic: ${this.state.topic}\n`
    );
    // prevent default behavior of form submission, which refreshes the page
    // this way we don't lose form data and page does not refresh after form submit
    event.preventDefault();
  };

  render() {
    //   destructure the state properties - cleaner code
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Controlled form component */}
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
          />
        </div>

        {/* Controlled text area component */}
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>

        {/* Controlled Select component */}
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        {/* submit button */}
        {/* Note: type="submit" is recommended since it helps with better UI as it submits form when user presses Enter */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
