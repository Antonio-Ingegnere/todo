import * as React from "react";
import * as ReactDom from "react-dom";
import appRuntime from "../appRuntime";

class NewTask extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);

    this.handleCreateNewTask = this.handleCreateNewTask.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = { value: "" };
  }

  handleCreateNewTask(event: any) {
    const t: string = "some value";
    console.log("new task created: " + this.state.value);

    const valueToPass: string = this.state.value;

    this.setState({ value: "" });

    event.preventDefault();

    appRuntime.send("asynchronous-message", { NEWTASK: valueToPass });
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleCreateNewTask}>
          <input
            type="text"
            id="newTask"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <button id="btnAddTask">+</button>
        </form>
      </div>
    );
  }
}

export default NewTask;
