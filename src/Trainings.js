import React from 'react';

const trainings = [
    { id: 1, company: 'Internshala', course: 'Machine Learning', duration: 'Nov 2022 - Dec 2022' },
    { id: 2, company: 'Internshala', course: 'Internship&Job Preparation', duration: 'Mar 2023 - Apr 2023' },
    { id: 3, company: 'Codegnan', course: 'Full Stack Development(MERN STACK)', duration: 'Jun 2023 - Aug 2023' },
];

const Trainings = () => {
    return (
        <div style={styles.container}>
            <h2>My Trainings</h2>
            <div style={styles.gridContainer}>
                {trainings.map(training => (
                    <div key={training.id} style={styles.gridItem}>
                        <h3> {training.company}</h3>
                        <p><strong>Course:</strong> {training.course}</p>
                        <p><strong>Duration:</strong> {training.duration}</p>
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

export default Trainings;
