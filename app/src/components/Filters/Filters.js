import React, { useState } from 'react';
import styles from './Filters.module.css';

const Filters = ({ onFilterChange }) => {
  const [expandedDropdowns, setExpandedDropdowns] = useState({
    'IDEAL FOR': true, // Default opened dropdown
  });
  const [selectedOptions, setSelectedOptions] = useState({
    CUSTOMIZABLE: false,
    IDEAL_FOR: [],
    OCCASION: [],
    WORK: [],
    FABRIC: [],
    SEGMENT: [],
  });

  const filterCategories = [
    { name: 'CUSTOMIZABLE', type: 'checkbox' },
    { name: 'IDEAL FOR', options: ['All', 'Men', 'Women', 'Baby & Kids'] },
    { name: 'OCCASION', options: ['All', 'Party', 'Casual', 'Formal'] },
    { name: 'WORK', options: ['All', 'Office', 'Home', 'Outdoor'] },
    { name: 'FABRIC', options: ['All', 'Cotton', 'Linen', 'Silk', 'Wool'] },
    { name: 'SEGMENT', options: ['All', 'Budget', 'Premium', 'Luxury'] },
  ];

  const toggleDropdown = (category) => {
    setExpandedDropdowns((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleOptionChange = (category, option) => {
    setSelectedOptions((prev) => {
      const currentOptions = prev[category] || [];
  
      if (option === 'All') {
        if (currentOptions.includes('All')) {
          return { ...prev, [category]: [] };
        }
        return { ...prev, [category]: filterCategories.find(f => f.name === category).options.slice(1) };
      }
  
      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter((item) => item !== option && item !== 'All')
        : [...currentOptions.filter((item) => item !== 'All'), option];
  
      return { ...prev, [category]: updatedOptions };
    });
  };

  const unselectAll = (category) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: [] }));
  };

  const applyFilters = () => {
    onFilterChange(selectedOptions);
  };

  return (
    <div className={styles.filtersContainer}>
      {filterCategories.map((filter) => (
        <div key={filter.name} className={styles.filterCategory}>
          {filter.type === 'checkbox' ? (
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedOptions.CUSTOMIZABLE}
                onChange={() => {
                  const isChecked = !selectedOptions.CUSTOMIZABLE;
                  setSelectedOptions((prev) => ({ ...prev, CUSTOMIZABLE: isChecked }));
                }}
              />
              <span className={styles.optionText}>{filter.name}</span>
            </label>
          ) : (
            <>
              <div
                className={styles.filterHeader}
                onClick={() => toggleDropdown(filter.name)}
              >
                <span className={styles.filterName}>{filter.name}</span>
                <span className={styles.expandIcon}>
                  {expandedDropdowns[filter.name]}
                </span>
              </div>
              {expandedDropdowns[filter.name] && (
                <div className={styles.optionsContainer}>
                  <h3
                    className={`${styles.optionText} ${styles.allOption} ${selectedOptions[filter.name]?.includes('All') ? styles.selected : ''}`}
                    onClick={() => handleOptionChange(filter.name, 'All')}
                  >
                    All
                  </h3>
                  <button
                    className={styles.unselectButton}
                    onClick={() => unselectAll(filter.name)}
                  >
                    Unselect all
                  </button>
                  {filter.options.slice(1).map((option) => (
                    <label key={option} className={styles.optionLabel}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={(selectedOptions[filter.name] || []).includes(option)}
                        onChange={() => handleOptionChange(filter.name, option)}
                      />
                      <span className={styles.optionText}>{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
