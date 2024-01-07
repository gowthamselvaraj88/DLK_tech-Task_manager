import axios from "axios";
import React, { useEffect, useState } from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import TaskList from '../TaskList'

const Deleted = () => {
    const [addedtask, setAddedtask] = useState([])
  
    useEffect(() => {
        const fetchUser = async () => {


            try {
                const res = await axios.get("http://localhost:8080/tasks");
                console.log(res.data)
                setAddedtask(res.data);
                // console.log(addedtask)
            } catch (error) {

            }
        }
        fetchUser();
    }, [])


    return (
        <div className="container">
            <h4 style={{ textAlign: "center" }}>Task List</h4>
            <Collapsible accordion={true}>
                {addedtask.map((task, i) => {
                    const { key, task_name, created_by } = task;
                    return (
                        <CollapsibleItem
                            id={key}
                            key={key}
                            header={task_name + " " + " Created by " + " " + created_by}

                        >
                            {task.description}
                            <TaskList/>
                           
                        </CollapsibleItem>
                    );
                })}
            </Collapsible>
        </div>
    );
};

export default Deleted;
