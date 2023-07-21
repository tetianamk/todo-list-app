import React from 'react';
import styles from './TodoItem.module.scss';
import MyButton from '../UI/button';

function TodoItem(props) {
  return (
  
    
      <div className={styles.todo}>
      <p className={styles.todoContent}>{props.number}. {props.todo.title}</p>
      <MyButton className={styles.btn} onClick={()=>props.remove(props.todo)}><img src='https://i.ibb.co/CMC59yN/delete.png' alt='delete' style={{
        height:30,
        width: 30,
      }}/></MyButton>
    </div>
  )
}

export default TodoItem;