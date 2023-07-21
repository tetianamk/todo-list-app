import React,{useState} from 'react';
import MyButton from '../UI/button';
import MyInput from '../UI/input';
import styles from './TodoForm.module.scss';

function TodoForm({create}) {
  const [task, setTask]=useState({title:'',});

  const titleOnChange=(e)=>{
    setTask({...task, title: e.target.value});
  }
  const addNewTask = (e)=>{
      e.preventDefault();
     const newTask= {...task, id:Date.now(),};
     create(newTask);
      setTask({title:'',});
     
    }
    
  
  return (
    <form className={styles.form}>
      <MyInput 
      type='text'
      placeholder='Add your task...'
      name='title'
      value={task.title}
      onChange={titleOnChange}
      />
      <MyButton  onClick={addNewTask}>+</MyButton>
    </form>
  )
}

export default TodoForm;