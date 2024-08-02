import React from 'react';

const education = [
    { id: 1, degree: 'BTech in Information Technology', institution: 'Chaitanya Bharathi Institutes of Technology', year: '2025', score: '8.87/10(aggregate)' },
    { id: 2, degree: 'Intermediate', institution: 'City Central Junior College', year: '2021', score: '98.8%' },
    { id: 3, degree: 'SSC', institution: 'Sri Chaitanya School', year: '2019', score: '10.0/10' },
];

const Education = () => {
    return (
        <div style={styles.container}>
            <h2>My Education</h2>
            <div style={styles.gridContainer}>
                {education.map(edu => (
                    <div key={edu.id} style={styles.gridItem}>
                        <h3>{edu.degree}</h3>
                        <p><strong>Institution:</strong> {edu.institution}</p>
                        <p><strong>Year:</strong> {edu.year}</p>
                        <p><strong>Score/Grade:</strong> {edu.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem',
    },
    gridItem: {
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'left',
    },
};

export default Education;
