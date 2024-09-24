import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PublicPage1 from './pages/PublicPage1';
import PublicPage2 from './pages/PublicPage2';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedPage1 from './pages/ProtectedPage1';
import ProtectedPage2 from './pages/ProtectedPage2';
import ProtectedPage3 from './pages/ProtectedPage3';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/public1" element={<PublicPage1 />} />
      <Route path="/public2" element={<PublicPage2 />} />
      <Route path="/protected" element={<ProtectedRoute />}>
        <Route path="page1" element={<ProtectedPage1 />} />
        <Route path="page2" element={<ProtectedPage2 />} />
        <Route path="page3" element={<ProtectedPage3 />} />
      </Route>
    </Routes>
  );
};

export default App;