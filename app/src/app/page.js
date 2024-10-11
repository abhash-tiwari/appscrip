import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Filters from '../components/Filters/Filters';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
        <div className={styles.content}>
          <Filters />
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}