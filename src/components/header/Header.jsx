/* eslint-disable max-len */
import styles from './Header.css';
import React from 'react';

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <h1>RESTless</h1>
    </header>
  );
};

export default Header;

// nice job, lets go ahead and wire this presentational component, inside our container
