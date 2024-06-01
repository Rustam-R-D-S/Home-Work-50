
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import './App.css';

const App: React.FC = () => {
    return (
        <div id="app">
            <Header />
            <div className="main">
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </div>
    );
};

export default App;
