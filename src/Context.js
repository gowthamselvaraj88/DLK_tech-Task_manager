import React, { useState } from "react";

export const TaskContext = React.createContext();

const TaskProvider = (props) => {
  const [state, setState] = useState({
    test: "Hello",
    style: { width: "70%" },
    isLightTheme: false
  });

  return (
    <TaskContext.Provider value={{ ...state }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
