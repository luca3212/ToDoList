import React from "react";
import "./style.scss";

function ListMenu(props) {
  const { handlebtonFiltro, activeMenu } = props;
  return (
    <ul className="listMenu">
      <li
        className={activeMenu === "0" ? `btonFiltre btonActive` : `btonFiltre`}
        onClick={() => handlebtonFiltro("0")}
      >
        Todas
      </li>
      <li
        className={activeMenu === "1" ? `btonFiltre btonActive` : `btonFiltre`}
        onClick={() => handlebtonFiltro("1")}
      >
        Finalizadas
      </li>
      <li
        className={activeMenu === "2" ? `btonFiltre btonActive` : `btonFiltre`}
        onClick={() => handlebtonFiltro("2")}
      >
        Sin Finalizar
      </li>
    </ul>
  );
}

export default ListMenu;
