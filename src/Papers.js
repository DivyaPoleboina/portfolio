// src/Papers.js
import React from 'react';

const papers = [
    { id: 1, title: 'Student Attendance Recognition using Haar Cascade Algorithm', description: ' "Student Attendance Recognition using Haar Cascade Algorithm," paper is presented at the International Conference on Sustainable Computing and Smart Systems, organized by Hindustan College of Engineering and Technology, Coimbatore. This was my first international conference experience. Special thanks to my teammate Lagisetty Keerthi for her excellent collaboration, and to Sairam U Sir for his invaluable guidance. Our paper has been published on IEEE Xplore!' },

];

const Papers = () => {
    return (
        <div style={styles.container}>
            <h2>My Papers</h2>
            <ul style={styles.list}>
                {papers.map(paper => (
                    <li key={paper.id} style={styles.listItem}>
                        <h3>{paper.title}</h3>
                        <p>{paper.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        marginBottom: '1.5rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
    },
};

export default Papers;
