import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

function Layout({ children }) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Determine page title and description based on current route
  const getPageInfo = () => {
    const path = location.pathname;
    
    if (path === '/dashboard') {
      return {
        title: 'Welcome to PitchDeck',
        description: 'Connect with innovative startups, investors, and resources to accelerate your growth.'
      };
    } else if (path === '/startups') {
      return {
        title: 'Innovative Startups',
        description: 'Discover high-potential startups across various industries.'
      };
    } else if (path === '/investors') {
      return {
        title: 'Investors',
        description: 'Connect with venture capital firms, angel investors, and investment groups.'
      };
    } else if (path === '/incubators') {
      return {
        title: 'Incubators & Accelerators',
        description: 'Connect with top incubators and accelerators to grow your startup.'
      };
    } else if (path === '/courses') {
      return {
        title: 'Premium Courses',
        description: 'Expert-led courses on startup scaling, financial planning, and investment strategies.'
      };
    } else if (path === '/ai-tools') {
      return {
        title: 'AI Tools',
        description: 'Powerful AI-driven tools to help your startup succeed.'
      };
    } else if (path === '/calendar') {
      return {
        title: 'Calendar',
        description: 'Schedule and manage your meetings and events.'
      };
    }
    
    return { title: '', description: '' };
  };

  const { title, description } = getPageInfo();
  const isProfilePage = location.pathname.includes('/startups/') && !location.pathname.endsWith('/startups');

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="main-wrapper">
        <main className="main-content">
          {!isProfilePage && title && (
            <PageHeader title={title} description={description} />
          )}
          {children}
        </main>
        
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/about">About</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} PitchDeck. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;