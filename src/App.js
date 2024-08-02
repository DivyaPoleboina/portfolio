// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Internships from './Internships';
import Education from './Education';
import Trainings from './Trainings';
import Papers from './Papers';
import Footer from './Footer';

const App = () => {
    return (
        <Router>
            <div style={styles.appContainer}>
                <Navbar />
                <div style={styles.mainContent}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/internships" element={<Internships />} />
                        <Route path="/trainings" element={<Trainings />} />
                        <Route path="/papers" element={<Papers />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

const styles = {
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    mainContent: {
        flex: 1,
        paddingBottom: '60px', // to avoid overlap with footer
    },
};

export default App;
