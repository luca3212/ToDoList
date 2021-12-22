import "./style.scss";
import Item from "../Item";

function List(props) {
  const { dataList } = props;

  return (
    <ul className="containerUL">
      {dataList.map((info) => {
        return <Item data={info} key={info.id} />;
      })}
    </ul>
  );
}

export default List;
