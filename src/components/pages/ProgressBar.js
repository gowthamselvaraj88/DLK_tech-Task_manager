import React from "react";
import { TaskContext } from "../../Context";

function ProgressBar(props) {

  return (
      <TaskContext.Consumer>{(context) => {
          return (
            <div className="container appCont">
            <h4>Progress Bar Page</h4>
            <br></br>
            <div className="progress">
              <div className="determinate" style={context.style}></div>
            </div>
          </div>
          )
      }
    }
          
      </TaskContext.Consumer>
  );
}

export default ProgressBar;
