import TodoItemClass from "@/models/TodoItemClass";

const TodoItem = ( { todoItem }: {todoItem:TodoItemClass}) => {
  return (
      <div>{todoItem.description}</div>
  );
};

export default TodoItem;