import React from 'react';
import styles from './Recommended.module.css';

const Recommended = () => {
  return (
    <div className={styles.maincontentdiv}>
      <div className={styles.buttons}>
        <p className={styles.items}>3425 ITEMS</p>
        <p className={styles.filterbutton}>HIDE FILTER</p>
      </div>
      <div className={styles.optionsdropdown}>
        <select name="" id="" className={styles.selectP}>
          <option value="">RECOMMENDED</option>
          <option value="">NEWEST FIRST</option>
          <option value="">POPULAR</option>
          <option value="">PRICE: HIGH TO LOW</option>
          <option value="">PRICE: LOW TO HIGH</option>
        </select>
      </div>
    </div>
  );
};

export default Recommended;
