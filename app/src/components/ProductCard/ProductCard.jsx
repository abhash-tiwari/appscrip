'use client'
import { useState } from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{product.title}</h3>
          <button className={styles.heartButton} onClick={toggleLike}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={liked ? 'red' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              className={styles.heartIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c-3.82-1.17-7-4.45-7-8.25 0-3.5 2.5-5.5 5-5.5 1.5 0 2.5 1 3 1 0.5 0 1.5-1 3-1 2.5 0 5 2 5 5.5 0 3.8-3.18 7.08-7 8.25z"
              />
            </svg>
          </button>
        </div>
        <p className={styles.message}>
          <span className={styles.signIn}>Sign in</span> or create an account to see pricing.
        </p>
      </div>
    </div>
  );
}
