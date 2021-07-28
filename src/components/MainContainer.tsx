import * as React from "react";
import * as ReactDom from "react-dom";
import NewTask from './NewTask'

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <div>
            <NewTask/>
        </div>
      </div>
    );
  }
}

export default MainContainer;