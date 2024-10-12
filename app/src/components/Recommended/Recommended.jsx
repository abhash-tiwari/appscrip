import React from 'react';
import styles from './Recommended.module.css';

const Recommended = ({ showFilters, onToggleFilters }) => {
  return (
    <div className={styles.maincontentdiv}>
      <div className={styles.buttons}>
        <p className={styles.items}>3425 ITEMS</p>
        <p className={styles.filterbutton} onClick={onToggleFilters}>
          {showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}
        </p>
      </div>

      <div className={styles.optionsdropdown}>
        <select name="" id="" className={styles.selectP}>
          <option value="">RECOMMENDED</option>
          <option value="">NEWEST FIRST</option>
          <option value="">POPULAR</option>
        </select>
      </div>
    </div>
  );
};

export default Recommended;
