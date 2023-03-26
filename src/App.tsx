import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Builder from './pages/Builder';
import HomePage from './pages/HomePage';
import Viewer from './pages/Viewer';

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='/view'
                    element={<Viewer />}
                />
                <Route
                    path='/build'
                    element={<Builder />}
                />
            </Routes>
        </div>
    );
}

export default App;
