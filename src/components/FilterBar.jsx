import React from 'react';
import PropTypes from 'prop-types';

function FilterBar({ filters, activeFilters, onFilterChange }) {
  const handleFilterClick = (filterId) => {
    onFilterChange(filterId);
  };

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-button ${activeFilters.includes(filter.id) ? 'active' : ''}`}
          onClick={() => handleFilterClick(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

FilterBar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default FilterBar;