import React from 'react';

const internships = [
    { id: 1, company: 'Codegnan', role: 'Full Stack Development Intern', duration: 'Jun 2023 - Aug 2023', description: 'Developed a memory app application, ensuring optimal performance and user experience.' },
    { id: 2, company: 'Bharat Intern', role: 'Full Stack Development Intern', duration: 'Jun 2023 - Jul 2023', description: 'Created a simple registration form and developed a blog website, collaborating with cross-functional teams.' },
    { id: 3, company: 'COSMIC365.AI', role: 'Associate Cosmic365 Intern', duration: 'Jun 2023 - Jul 2023', description: 'Participated in strategic planning, developed product roadmaps, designed and maintained fluid layouts, and promoted COSMIC365’s innovative products.' },

];

const Internships = () => {
    return (
        <div style={styles.container}>
            <h2>My Internships</h2>
            <div style={styles.gridContainer}>
                {internships.map(internship => (
                    <div key={internship.id} style={styles.gridItem}>
                      
                        <h3>{internship.company}</h3> 
                        <p><strong>Role:</strong> {internship.role}</p>
                        <p><strong>Duration:</strong> {internship.duration}</p>
                        <p>{internship.description}</p>
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

export default Internships;
