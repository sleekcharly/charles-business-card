import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
    return (
        <div className="container">
            <main>
                <Header />
                <Main />
                <Footer />
            </main>
        </div>
    )
}