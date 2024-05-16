import Todo from "../models/Todo";

interface TodoItemProps {
    todo:Todo;
    onToggle(): void;
}

const TodoItem = ({todo,onToggle}: TodoItemProps) =>{
        return (
            <li 
            onClick={()=>onToggle()} 
            style={{
                textDecoration: todo.isDone ?"line-through":"",
                cursor:"pointer",
            }}
            >
            {todo.text}
            </li>
        )
    }

export default TodoItem;