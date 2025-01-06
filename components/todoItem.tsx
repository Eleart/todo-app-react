import TodoItemClass from "@/models/TodoItemClass";
import React from "react";

const TodoItem = ( { todoItem, removeTodo }: {todoItem:TodoItemClass, removeTodo:React.Dispatch<React.SetStateAction<TodoItemClass[]>>}) => {
    const removeTodoOnClick = (event: { preventDefault: () => void; }) => {

        removeTodo((todos: TodoItemClass[]) =>
        {
            const index = todos.indexOf(todoItem)
            let tt;
            console.log(todos);
            if (index > -1) {
                tt = todos.splice(index, 1);
            }
            console.log(tt);
            return tt
        });
        event.preventDefault();
    }

    return (
      <div className="todo-list-item">
        {todoItem.description}
        <button onClick={removeTodoOnClick}>Remove</button>
      </div>
  );
};

export default TodoItem;