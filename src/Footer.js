// src/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>Contact me at:</p>
            <p>divyapoleboina@gmail.com</p>
            
            <p><a href="https://www.linkedin.com/in/divya-poleboina-281952273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={styles.link}>LinkedIn</a> | <a href="https://github.com/DivyaPoleboina" style={styles.link}>GitHub</a></p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#f1f1f1',
        
        left: 0,
        bottom: 0,
        width: '100%',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        margin: '0 1rem',
    },
};

export default Footer;
