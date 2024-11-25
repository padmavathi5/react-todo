export function Task(props) {
  const { id, name, completed } = props.todo;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "60px",
        width: "500px",
        alignContent: "center",
      }}
    >
      <p
        style={{
          textDecoration: completed ? "line-through" : "",
          width: "100px",
        }}
        key={id}
      >
        {name}
      </p>
      <button type="submit" onClick={() => props.handleStatus(props.index)}>
        complete
      </button>
      <button type="submit" onClick={() => props.removeTodo(props.index)}>
        remove
      </button>
    </div>
  );
}
export default Task;
