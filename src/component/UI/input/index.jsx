import React from 'react';
import styles from './MyInput.module.scss';

function MyInput(props) {
  return (
    <input {...props} className={styles.myInput}/>
  )
}

export default MyInput;