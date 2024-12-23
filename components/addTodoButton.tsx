import React, {useState} from "react";
import TodoItemClass from "@/models/TodoItemClass";

const AddTodoButton = ({addTodo} : {addTodo:React.Dispatch<React.SetStateAction<TodoItemClass[]>>}) => {
    const [todoDescription, setTodoDescription] = useState("");
    const addTodoOnClick = () => {
        addTodo((todos: TodoItemClass[]) => [...todos, new TodoItemClass(todos.length+1, todoDescription)]);
        setTodoDescription("");
    }

    return (
        <>
            <input type="text" value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)}/>
            <button onClick={addTodoOnClick}>Add</button>
        </>
    );
};

export default AddTodoButton;