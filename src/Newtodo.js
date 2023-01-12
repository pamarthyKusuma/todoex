import { useReducer, useState } from "react";
// import "./styles.css";
import reducer, { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "./reducer";
export default function Newtodo() {
  const [id, setId] = useState(0);
  const [text, setText] = useState("");
  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);
  const addTodoItem = (e) => {
    e.preventDefault();
    const newId = id + 1;
    setId(newId);
    dispatch({
      type: ADD_TODO,
      id: newId,
      text: text,
    });
    setText("");
  };
  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, id });
  };
  const completeTodo = (id) => {
    dispatch({ type: COMPLETE_TODO, id });
  };
  return (
    <div>
      <h1>Todo Example</h1>
      <form onSubmit={addTodoItem}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button disabled={text.length === 0} type="submit">
          +
        </button>
      </form>
      <div>
        {state.map((todo) => (
          <div key={todo.id}>
            <p
              /*className={todo.completed && "strikethrough"}*/ style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.text}
            </p>
            <span onClick={() => removeTodo(todo.id)}>✕</span>
            <span onClick={() => completeTodo(todo.id)}>✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}
