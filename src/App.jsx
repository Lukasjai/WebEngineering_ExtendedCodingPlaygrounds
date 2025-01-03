import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import BearSection from './components/BearSection';
import Comments from './components/Comments';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <BearSection />
                <Comments />
            </main>
            <Footer />
        </div>
    );
};

export default App;