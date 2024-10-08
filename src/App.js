import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Products from './pages/Products';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
                {/* 可以在这里添加 <Footer />，如果你有一个底部导航栏 */}
            </Router>
        </div>
    );
}

export default App;
