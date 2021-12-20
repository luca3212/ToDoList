import "./style.scss";
import { useContext } from "react";
import Task from "../../contexts/Task";

function Item(props) {
  const { title, done, id } = props.data;
  const TaskData = useContext(Task);

  return (
    <>
      <li>
        <input type="checkbox" onChange={() => TaskData.done(id)} />
        <p>
          {title} {done}
        </p>
        <button onClick={() => TaskData.remove(id)}>Borrar</button>
      </li>
    </>
  );
}

export default Item;
