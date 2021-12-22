import { useState, useEffect } from "react";
import "./estilo.scss";
import Input from "./components/input";
import List from "./components/List";
import ListMenu from "./components/menuFilter";
import { TaskProvider } from "./contexts/Task";

function App() {
  const [listTask, setListTask] = useState(() => {
    const saved = localStorage.getItem("SaveTask");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [inputTask, setInputTask] = useState("");
  const [filtro, setFiltro] = useState(false);
  const [arrayFiltro, setArrayFiltro] = useState([]);
  const [menuFilter, setMenuFilter] = useState("0");

  useEffect(() => {
    localStorage.setItem("SaveTask", JSON.stringify(listTask));
  }, [listTask]);

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

  function handlebtonFiltro(opctionMenu) {
    if (opctionMenu !== "0") {
      let arrayRtado = [];
      if (opctionMenu === "1") {
        arrayRtado = listTask.filter((elemt) => elemt.done !== false);
      } else {
        arrayRtado = listTask.filter((elemt) => elemt.done !== true);
      }
      setArrayFiltro(arrayRtado);
      setFiltro(true);
    } else {
      setFiltro(false);
    }
    setMenuFilter(opctionMenu);
  }

  return (
    <TaskProvider value={contextFunction}>
      <div className="container">
        <header className="containerTitle">
          <h1>To Do List</h1>
        </header>

        <main className="containerMain">
          <div className="contentForm">
            <form onSubmit={handleSubmit}>
              <Input value={inputTask} onChange={handleChange} />
              <button>Agregar</button>
            </form>
          </div>

          <ListMenu
            activeMenu={menuFilter}
            handlebtonFiltro={handlebtonFiltro}
          />

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
