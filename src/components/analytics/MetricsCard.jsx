import React from 'react';
import PropTypes from 'prop-types';

function MetricsCard({ title, value, percentage, icon }) {
  const isPositive = percentage > 0;
  
  return (
    <div className="metrics-card">
      <div className="metrics-icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="metrics-content">
        <h3>{title}</h3>
        <div className="metrics-value">{value}</div>
        <div className={`metrics-percentage ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '+' : ''}{percentage}%
        </div>
      </div>
    </div>
  );
}

MetricsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};

export default MetricsCard;