import { Todo } from "../App"; 


interface Props{
    todo: Todo;
    toggleTodo:(selectedTodo: Todo) => void;
    removeTodo:(selectedTodo: Todo) => void;
}
const TodoItem = ({todo, toggleTodo, removeTodo}: Props) => {
  return (

    <article>
    <label htmlFor="todo">
      <input type="checkbox" checked={todo.complete} id="todo" onChange={()=>toggleTodo(todo)}></input>
      {todo.text}
    </label>
    <button onClick={()=>removeTodo(todo)}>Remove</button>
  </article >  )
}

export default TodoItem