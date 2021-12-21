import "./style.scss";

function input(props) {
  const { onChange, value } = props;
  return (
    <>
      <input
        type="text"
        placeholder="Escriba una tarea..."
        value={value}
        onChange={onChange}
        className="inputStyle"
        required
      />
    </>
  );
}

export default input;
