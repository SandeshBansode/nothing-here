import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/startups', label: 'Startups', icon: 'rocket_launch' },
    { path: '/investors', label: 'Investors', icon: 'account_balance' },
    { path: '/incubators', label: 'Incubations', icon: 'business' },
    { path: '/courses', label: 'Courses', icon: 'school' },
    { path: '/ai-tools', label: 'AI Tools', icon: 'smart_toy' },
    { path: '/calendar', label: 'Calendar', icon: 'calendar_month' }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <Link to="/" className="logo">
          <span className="logo-icon material-symbols-outlined">monitoring</span>
          <span className="logo-text">PitchDeck</span>
        </Link>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">
            {isOpen ? 'chevron_left' : 'chevron_right'}
          </span>
        </button>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">JD</div>
          <div className="user-details">
            <span className="user-name">John Doe</span>
            <span className="user-role">Startup Founder</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default Sidebar;