import React, {useState} from "react";
import TodoItemClass from "@/models/TodoItemClass";

const AddTodoButton = ({addTodo} : {addTodo:React.Dispatch<React.SetStateAction<TodoItemClass[]>>}) => {
    const [todoDescription, setTodoDescription] = useState("");
    const addTodoOnClick = (event: { preventDefault: () => void; }) => {
        addTodo((todos: TodoItemClass[]) => [...todos, new TodoItemClass(todos.length+1, todoDescription)]);
        setTodoDescription("");
        event.preventDefault();
    }

    return (
        <form className="todo-list-form" onSubmit={addTodoOnClick}>
            <input className="todo-list-input" type="text" value={todoDescription}
                   onChange={(e) => setTodoDescription(e.target.value)}/>
            <button className="todo-list-btn" onClick={addTodoOnClick}>Add</button>
        </form>
    );
};

export default AddTodoButton;