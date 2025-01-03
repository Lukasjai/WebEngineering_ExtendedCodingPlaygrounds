import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import BearSection from './components/BearSection';
import Comments from './components/Comments';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <div className="layout">
            <header>
                <Header />
            </header>
            <nav>
                <Navbar />
            </nav>
            <div className="content">
                <main className="main-content">
                    <BearSection />
                    <Comments />
                </main>
                <Sidebar />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default App;
