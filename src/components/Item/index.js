import "./style.scss";
import { useContext } from "react";
import Task from "../../contexts/Task";

function Item(props) {
  const { title, done, id, fecha } = props.data;
  const TaskData = useContext(Task);

  return (
    <>
      <li className="containerTask">
        <input
          type="checkbox"
          onChange={() => TaskData.done(id)}
          checked={done}
          className="Check"
        />
        <p>
          {title} {done}
        </p>
        <button onClick={() => TaskData.remove(id)}>Borrar</button>
        <p>
          <em>{fecha}</em>
        </p>
      </li>
    </>
  );
}

export default Item;
