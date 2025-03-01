import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from './ContentCard';

function ContentGrid({ items, title }) {
  return (
    <div className="content-grid">
      {title && <h2 className="grid-title">{title}</h2>}
      <div className="grid-container">
        {items.map((item, index) => (
          <ContentCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            tags={item.tags}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

ContentGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string
      })
    })
  ).isRequired,
  title: PropTypes.string
};

export default ContentGrid;