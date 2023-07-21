import React from 'react';
import TodoItem from '../TodoItem';

function TodoList({todos, remove}) {
  return (
  <>
     {todos.map((todo, index) =>
     <TodoItem number={index+1} todo={todo} remove={remove} todos={todos}/>
     )}
    </>
   );
}

export default TodoList;
