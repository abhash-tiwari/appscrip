import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
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
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.message}>
        <span className={styles.signIn}>Sign in</span> or create an account to see pricing.
        </p>
      </div>
    </div>
  );
}