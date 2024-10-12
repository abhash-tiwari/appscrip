'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Filters from '@/components/Filters/Filters';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import { getProducts } from '@/components/library/api';
import Recommended from '@/components/Recommended/Recommended';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleToggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.Paratitle}>
          Lorem ipsum dolor sit amet consectetur. <br /> Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </main>

      <div className={styles.filtered}>
        <Recommended showFilters={showFilters} onToggleFilters={handleToggleFilters} />
      </div>

      <div className={styles.content}>
        <div className={`${styles.fill} ${!showFilters ? styles.hidden : ''}`}>
          <Filters />
        </div>
        <ProductGrid products={products} />
      </div>
      <Footer />
    </div>
  );
}
