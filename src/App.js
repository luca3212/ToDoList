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

    let newDate = new Date();
    let dia = newDate.getDate();
    let mes = newDate.getMonth() + 1;
    let anio = newDate.getFullYear();
    const fecha = `${dia}/${mes}/${anio}`;

    const itemTask = {
      title: inputTask,
      done: false,
      id: id,
      fecha: fecha,
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
    // alert("entro al doneTask");
    const newArray = listTask.slice().map((itemList) => {
      if (itemList.id === nroID) {
        itemList.done = !itemList.done;
      }
      return itemList;
    });
    setListTask(newArray);
  }

  const contextFunction = {
    remove: removeTask,
    done: doneTask,
  };

  const [filtro, setFiltro] = useState(false);
  const [arrayFiltro, setArrayFiltro] = useState([]);

  function handleSelect(e) {
    console.log("entro");
    if (e.target.value !== "0") {
      let arrayRtado = [];
      if (e.target.value === "1") {
        arrayRtado = listTask.filter((elemt) => elemt.done !== false);
      } else {
        arrayRtado = listTask.filter((elemt) => elemt.done !== true);
      }
      console.log(arrayFiltro);
      setArrayFiltro(arrayRtado);
      setFiltro(true);
    } else {
      setFiltro(false);
    }
  }
  return (
    <TaskProvider value={contextFunction}>
      <div className="container">
        <header className="containerTitle">
          <h1>ToDo List</h1>
        </header>

        <main className="containerMain">
          <div className="contentForm">
            <form onSubmit={handleSubmit}>
              <Input value={inputTask} onChange={handleChange} />
              <button>Agregar</button>
            </form>
          </div>

          <div className="contentFiltro">
            <p>Filtrar:</p>
            <select onChange={handleSelect}>
              <option value="0">Todas</option>
              <option value="1">Finalizada</option>
              <option value="2">Sin Finalizar</option>
            </select>
          </div>

          {!filtro ? (
            <List dataList={listTask} />
          ) : (
            <List dataList={arrayFiltro} />
          )}
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;
