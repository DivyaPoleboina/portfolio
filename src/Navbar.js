// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/projects" style={styles.link}>Projects</Link>
            <Link to="/education" style={styles.link}>Education</Link>
            <Link to="/internships" style={styles.link}>Internships</Link>
            <Link to="/trainings" style={styles.link}>Trainings</Link>
            <Link to="/papers" style={styles.link}>Papers</Link>
        </nav>
    );
};

const styles = {
    navbar: {
        display:'flex',
        justifyContent:'space-evenly',
        padding: '1rem',
        backgroundColor: '#282c34',
    },
    link: {
        color: '#61dafb',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
};

export default Navbar;
