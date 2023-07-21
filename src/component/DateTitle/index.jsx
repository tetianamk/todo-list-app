import React from 'react';
import styles from './DateTitle.module.scss';
import { format } from 'date-fns';

function DateTitle() {
  return (
    <div className={styles.date}>
    <span className={styles.title}>{format(new Date(),'d.MM.yyy')}</span>
    <span className={styles.title}>{format(new Date(),'EEEE')}</span>
    </div>
  )
}

export default DateTitle;