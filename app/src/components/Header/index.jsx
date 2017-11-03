import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

class Footer extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <nav>
          <Link to="/camera">Camera</Link>
          <Link to="/direct">Direct</Link>
        </nav>
        <h1>Jonogram</h1>
      </header>
    );
  }
}

export default Footer;
