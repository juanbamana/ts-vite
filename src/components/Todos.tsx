
import { Todo } from "../App"; 
import TodoItem from "./TodoItem";


interface Props{
    todos: Todo[];
    toggleTodo:(selectedTodo: Todo) => void;
    removeTodo:(selectedTodo: Todo) => void;
}
const Todos = ({todos, removeTodo, toggleTodo} : Props) => {
  return (
    <>
{todos.map((todo) => (
        
        <TodoItem 
        key={todo.text}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}


        
        />

        ))
        }
    </>
  )
}

export default Todos