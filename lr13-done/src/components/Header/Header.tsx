import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header( {Page = 'HomePage'} : {Page: string}) {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.header__inner}>
                <Link to='/' className={styles.header__logo}>
                    <img src={require('../../img/LOGO.png')} alt="Logo"/>
                </Link>

                <div className={styles.header__nav}>
                    <Link to='/' className={`${styles.header__nav_link} ${Page === 'HomePage' ? styles.active : ''}`}>Поиск вакансий</Link>
                    <Link to='/favorites' className={`${styles.header__nav_link} ${Page === 'FavoritesPage' ? styles.active : ''}`}>Избранные вакансии</Link>
                </div>
            </div>
        </div>
    </header>
  )
}
