import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StartupsPage from './pages/StartupsPage';
import InvestorsPage from './pages/InvestorsPage';
import IncubatorsPage from './pages/IncubatorsPage';
import CoursesPage from './pages/CoursesPage';
import StartupProfile from './pages/StartupProfile';
import AIToolsPage from './pages/AIToolsPage';
import CalendarPage from './pages/CalendarPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/startups/:id" element={<StartupProfile />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/incubators" element={<IncubatorsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/ai-tools" element={<AIToolsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;