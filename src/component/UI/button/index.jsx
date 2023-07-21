import React from 'react';
import styles from './MyButton.module.scss';

function MyButton({children,...props}) {
  return (
    <button className={styles.myBtn} {...props} >{children}</button>
  )
}

export default MyButton;