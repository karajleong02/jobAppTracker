import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewJobForm from './newJobForm';
import Home from './Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/newjobform' element={<NewJobForm/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App