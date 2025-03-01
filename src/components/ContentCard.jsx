import React from 'react';
import PropTypes from 'prop-types';

function ContentCard({ title, description, image, tags, link }) {
  return (
    <div className="content-card">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
        {link && (
          <a href={link.url} className="learn-more">
            {link.text || 'Learn More'} <span className="arrow">→</span>
          </a>
        )}
      </div>
    </div>
  );
}

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string
  })
};

export default ContentCard;