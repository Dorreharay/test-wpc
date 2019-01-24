import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

function Header({ currentLocation }) {
  return (
    <header className={styles.header}>
      {/* teamHub */}
      {/* <div className={styles.logotype}>teamHub</div> */}
      <div className={styles.nav}>
        <ul className={styles.ulNav}>
          <Link to="/orders" className={currentLocation === '/orders' ? styles.tabHovered : styles.tab}>
            Замовлення
          </Link>
          <Link
            to="/tariffs-and-payments"
            className={currentLocation === '/tariffs-and-payments' ? styles.tabHovered : styles.tab}
          >
            Тарифи та оплата
          </Link>
          <Link to="/profile" className={currentLocation === '/profile' ? styles.tabHovered : styles.tab}>
            Профіль
          </Link>
          <Link
            to="/rules-of-returning"
            className={currentLocation === '/rules-of-returning' ? styles.tabHovered : styles.tab}
          >
            Правила повернення
          </Link>
        </ul>
        <button className={styles.exit}>
          <Link to="/">Вийти</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
