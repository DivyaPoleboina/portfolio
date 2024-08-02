import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <div style={styles.flexContainer}>
                <div style={styles.textContainer}>
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm Poleboina Divya. As a final-year IT student at Chaitanya Bharathi Institute of Technology, I've published research on attendance recognition and interned as a full-stack developer. I’m passionate about applying my skills in real-world projects and am actively seeking internships to further expand my expertise. When I'm not coding, I enjoy paper crafts, honing my logical reasoning skills, and playing badminton.</p>
              </div>
                <img src="profile.png" alt="Profile" style={styles.profileImage} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '2rem',
    },
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        maxWidth: '50%',
        marginRight: '1rem',
        textAlign: 'left',
    },
    profileImage: {
        width: '300px',
        borderRadius: '20%',
    },
};

export default Home;
