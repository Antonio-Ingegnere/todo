import * as React from "react";
import * as ReactDom from "react-dom";

class NewTask extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleCreateNewTask = this.handleCreateNewTask.bind(this);
  }

  handleCreateNewTask() {
    const t: string = "some value";
    console.log("new task created" + t);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="newTask"

          //   onClick={() => console.log("Working")}
        ></input>
        <button id="btnAddTask" onClick={this.handleCreateNewTask}>
          +
        </button>
      </div>
    );
  }
}

export default NewTask;
