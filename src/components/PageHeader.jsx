import React from 'react';
import PropTypes from 'prop-types';

function PageHeader({ title, description, actions }) {
  return (
    <div className="page-header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        {description && <p className="header-description">{description}</p>}
      </div>
      {actions && <div className="header-actions">{actions}</div>}
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  actions: PropTypes.node
};

export default PageHeader;