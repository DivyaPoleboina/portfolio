import React from 'react';

const projects = [
    { id: 1, name: 'Two-step Authentication for user verification using Python', duration: 'May 2022 - Aug 2022', description: 'Implemented a two-step authentication process to enhance user verification using Python.' },
    { id: 2, name: 'Attendance Monitoring and analysis of a student using face recognition', duration: 'Oct 2022 - Mar 2023', description: 'Developed a system for monitoring attendance and analyzing student presence using haar cascade algorithm.' },
    { id: 3, name: 'Alumni Student Portal', duration: 'Mar 2023 - Aug 2023', description: 'Created a portal for alumni to connect and share updates, facilitating networking and communication.' },
    { id: 4, name: 'Anomaly Detection in Network Traffic', duration: 'Feb 2024 - Jun 2024' , description: 'Developed a deep learning-based system for detecting anomalies in network traffic, improving the identification and mitigation of potential security threats.'}
];

const Projects = () => {
    return (
        <div style={styles.container}>
            <h2>My Projects</h2>
            <div style={styles.gridContainer}>
                {projects.map(project => (
                    <div key={project.id} style={styles.gridItem}>
                        <h3>{project.name}</h3>
                        <p><strong>Duration:</strong> {project.duration}</p>
                        <p>{project.description}</p>
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
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
    },
    gridItem: {
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'left',
    },
};

export default Projects;
