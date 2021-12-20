import { useState } from "react";
import "./estilo.scss";
import Input from "./components/input";
import List from "./components/List";

import { TaskProvider } from "./contexts/Task";

function App() {
  const [listTask, setListTask] = useState([]);
  const [inputTask, setInputTask] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setInputTask(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let id = new Date().getTime();

    const itemTask = {
      title: inputTask,
      done: false,
      id: id,
    };

    if (inputTask.trim() !== "") {
      setListTask([...listTask, itemTask]);
      setInputTask("");
    }
  }

  function removeTask(nroID) {
    const updateArray = listTask.filter((elemt) => elemt.id !== nroID);
    setListTask(updateArray);
  }
  function doneTask(nroID) {
    alert("entro al doneTask");
  }

  const contextFunction = {
    remove: removeTask,
    done: doneTask,
  };
  return (
    <TaskProvider value={contextFunction}>
      <form onSubmit={handleSubmit}>
        <Input value={inputTask} onChange={handleChange} />
        <button>Agregar</button>
      </form>

      <List dataList={listTask} />
    </TaskProvider>
  );
}

export default App;
