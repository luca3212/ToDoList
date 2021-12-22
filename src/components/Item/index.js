import "./style.scss";
import { useContext } from "react";
import Task from "../../contexts/Task";
import Icon from "@mdi/react";

import { mdiAlertDecagramOutline } from "@mdi/js";
import { mdiCheckDecagramOutline } from "@mdi/js";

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

        <span className="iconList">
          {!done ? (
            <Icon
              path={mdiAlertDecagramOutline}
              size="7rem"
              color="rgba(230, 230, 230, 0.3)"
            />
          ) : (
            <Icon
              path={mdiCheckDecagramOutline}
              size="7rem"
              color="rgba(230, 230, 230, 0.3)"
            />
          )}
        </span>
      </li>
    </>
  );
}

export default Item;
