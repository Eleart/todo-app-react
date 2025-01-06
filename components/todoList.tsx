"use client"
import TodoItem from "@/components/todoItem";
import TodoItemClass from "@/models/TodoItemClass";
import React, { useState } from 'react';
import AddTodoButton from "@/components/addTodoButton";
const TodoList = () => {
    const todos: TodoItemClass[] = [
        new TodoItemClass(1, "Acheter du lait"),
        new TodoItemClass(2, "Manger une pomme, car les pommes c'est bon"),
    ]

    const [todoList, setTodoList] = useState<TodoItemClass[]>(todos);


    return(
        <div className="todo-list-container">
            <AddTodoButton  addTodo={setTodoList}/>
            <div className="todo-list-item-container">
                {
                    todoList.map((t) => <TodoItem key={t.id} removeTodo={setTodoList} todoItem={t}/>)
                }
            </div>
        </div>
    );
};

export default TodoList;