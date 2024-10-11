'use client';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import styles from './Header.module.css';
import Logo from '../../app/assets/logo-appscrip.jpg';
import Image from 'next/image';
import Lorem from '../../app/assets/element-4.png';
import Search from '../../app/assets/app-4.jpg';
import Like from '../../app/assets/app-1.jpg';
import Bag from '../../app/assets/app-5.jpg';
import User from '../../app/assets/app-3.jpg';
import LogoText from '../../app/assets/Textlogo.jpg';
import Lang from '../../app/assets/Language.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div>
            <Image src={Lorem} alt='lorem' width={10} height={10} />
            <p>Lorem ipsum dolor</p>
          </div>
          <div>
            <Image src={Lorem} alt='lorem' width={10} height={10} />
            <p>Lorem ipsum dolor</p>
          </div>
          <div>
            <Image src={Lorem} alt='lorem' width={10} height={10} />
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.Logocontainer}>
          <button 
            className={styles.menuButton} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
          <div className={styles.logo}>
            <Image src={Logo} alt='logo' width={20} height={20} />
          </div>
          <div>
            <Image src={LogoText} alt='logo' width={90} height={24} style={{ marginLeft: "0" }} />
          </div>
          <div className={styles.actions}>
            <button className={styles.iconButton} aria-label="Search">
              <Image src={Search} alt='logo' width={20} />
            </button>
            <button className={styles.iconButton} aria-label="Search">
              <Image src={Like} alt='logo' width={20} />
            </button>
            <button className={styles.iconButton} aria-label="Shopping bag">
              <Image src={Bag} alt='logo' width={20} />
            </button>
            <button className={styles.iconButton} aria-label="User account">
              <Image src={User} alt='logo' width={20} />
            </button>
            <button className={styles.iconButton} aria-label="Language">
              <Image src={Lang} alt='logo' width={45} />
            </button>
          </div>
        </div>
        <div>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
            <ul>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">SKILLS</a></li>
              <li><a href="#">STORIES</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
