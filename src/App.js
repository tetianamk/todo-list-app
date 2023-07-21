import { useState } from 'react';
import styles from './App.module.scss';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import DateTitle from './component/DateTitle';


function App() {
  const [todos,setTodos]=useState([]);

  const removeTask =(todo)=>{
    setTodos(todos.filter(t=>t.id !==todo.id));

  }
  const createTask=(newTask)=>{
    setTodos([...todos,newTask]);
  
  }

  return (
    <div className={styles.container}>
      <DateTitle />
      <TodoForm create={createTask} />
      <TodoList todos={todos} title='Todo First' remove={removeTask}/>
    </div>
  
    
  )
}

export default App;
