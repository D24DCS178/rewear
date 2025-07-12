import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AddItem from './pages/AddItem';

function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/add" element={<AddItem />} />
</Routes>
</Router>
);
}

export default App;