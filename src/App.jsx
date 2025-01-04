import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Comments from "./components/Comments";
import BearTable from "./components/BearTable";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import BearIntroduction from './components/textComponents/BearIntroduction';
import BearHabitats from './components/textComponents/BearHabitats';
import BearMating from './components/textComponents/BearMating';
import AboutAuthor from './components/textComponents/AboutAuthor.jsx';
import AudioPlayer from "./components/Audioplayer";
import BearList from "./components/apiBearDataLoader/BearList";

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
                    <BearIntroduction />
                    <BearTable />
                    <BearHabitats />
                    <BearMating />
                    <AudioPlayer />
                    <AboutAuthor />
                    <Comments />
                    <BearList />
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
