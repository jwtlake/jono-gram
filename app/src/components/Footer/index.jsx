import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <nav>
          <Link to="/feed">Feed</Link>
          <Link to="/browser">Browser</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </footer>
    );
  }
}

export default Footer;
