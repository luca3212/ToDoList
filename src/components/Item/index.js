import "./style.scss";
import { useContext } from "react";
import Task from "../../contexts/Task";

function Item(props) {
  const { title, done, id } = props.data;
  const TaskData = useContext(Task);

  return (
    <>
      <li className={done ? `containerTask activo` : `containerTask`}>
        <input
          type="checkbox"
          onChange={() => TaskData.done(id)}
          checked={done}
        />

        <p className="titleTask">{title}</p>

        <button className="btonClose" onClick={() => TaskData.remove(id)}>
          &#10006;
        </button>
      </li>
    </>
  );
}

export default Item;
