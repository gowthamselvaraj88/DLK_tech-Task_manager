import React, { useState } from "react";
import axios from "axios";

const Input = (props) => {
  const [description, setDescription] = useState("");
  const [task_name, setTask_name] = useState("");
  const [spinner, setSpinner] = useState(false);

  const onSubmit = async (e) => {
    console.log("Onsubmit");
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/task_creating", { task_name, description });
      console.log(res, "response")
      alert("New Task Added")
    } catch (error) {

    }
    setSpinner(true); // Set spinner to true when submitting

    const taskToAdd = {
      title: task_name,
      details: description
    };

    // Simulating async task addition
    setTimeout(() => {
      props.addtodo(taskToAdd);
      setTask_name("");
      setDescription("");
      setSpinner(false); // Reset spinner and form fields after task addition
    }, 1000); // Simulating an asynchronous operation (adjust as needed)
  };

  return (
    <div className="container inputCont">
      <h4>Create Tasks</h4>
      <div className="row">
        <div className="input-field col s10">
          <i className="material-icons prefix">mode_edit</i>
          <input
            placeholder="New Task Title"
            name="newTask"
            id="newTask"
            type="text"
            className="taskTitle"
            onChange={(e) => setTask_name(e.target.value)}
            value={task_name}
          />
          <label></label>
        </div>
        <div className="input-field col s10">
          <i className="material-icons prefix">mode_edit</i>
          <textarea
            id="icon_prefix2"
            value={description}
            name="details"
            onChange={(e) => setDescription(e.target.value)}
            className="materialize-textarea"
          ></textarea>
          <label htmlFor="icon_prefix2">Details</label>
        </div>
        <button
          id="createBtn"
          className="btn waves-effect lime accent-2 black-text waves-dark"
          onClick={onSubmit}
          type="submit"
          name="action"
        >
          Create
          <i className="material-icons right">send</i>
        </button>
        <div className={spinner ? "spinnerShow" : "spinner"}>
          {/* Your spinner elements 
           Assuming spinnerShow class will control the display of the spinner */}
          <div className="spinner-sector spinner-color-grey"></div>
          <div className="spinner-sector spinner-color-green"></div>
          <div className="spinner-sector spinner-color-shade"></div>
        </div>
      </div>
    </div>
  );
};

export default Input;
