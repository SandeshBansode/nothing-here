import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import BookingModal from '../components/booking/BookingModal';
import startupDetails from '../data/startupDetails';

function StartupProfile() {
  const { id } = useParams();
  const [startup, setStartup] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundStartup = startupDetails[id];
      setStartup(foundStartup || null);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading startup details...</p>
        </div>
      </Layout>
    );
  }

  if (!startup) {
    return (
      <Layout>
        <div className="error-container">
          <h2>Startup Not Found</h2>
          <p>The startup you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="startup-profile">
        <div className="profile-header">
          <div className="profile-header-content">
            <h1>{startup.name}</h1>
            <p className="tagline">{startup.tagline}</p>
            <div className="profile-meta">
              <span className="meta-item">
                <span className="meta-label">Founded:</span> {startup.founded}
              </span>
              <span className="meta-item">
                <span className="meta-label">Location:</span> {startup.location}
              </span>
              <span className="meta-item">
                <span className="meta-label">Stage:</span> {startup.stage}
              </span>
              <span className="meta-item">
                <span className="meta-label">Total Funding:</span> {startup.funding.total}
              </span>
            </div>
          </div>
          <div className="profile-actions">
            <button className="primary-button" onClick={() => setIsBookingModalOpen(true)}>
              Schedule Meeting
            </button>
            <a href={startup.pitch} className="secondary-button" target="_blank" rel="noopener noreferrer">
              View Pitch Deck
            </a>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2>About</h2>
            <p>{startup.description}</p>
          </div>

          <div className="profile-section">
            <h2>Team</h2>
            <div className="team-grid">
              {startup.team.map((member, index) => (
                <div key={index} className="team-member">
                  <img src={member.image} alt={member.name} className="team-member-image" />
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h2>Key Metrics</h2>
            <div className="metrics-grid">
              {Object.entries(startup.metrics).map(([key, value], index) => (
                <div key={index} className="metric-item">
                  <h3>{value}</h3>
                  <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h2>Funding History</h2>
            <div className="funding-timeline">
              {startup.funding.rounds.map((round, index) => (
                <div key={index} className="funding-round">
                  <div className="round-date">{new Date(round.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</div>
                  <div className="round-details">
                    <h3>{round.type}</h3>
                    <p>{round.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h2>Gallery</h2>
            <div className="image-gallery">
              {startup.images.map((image, index) => (
                <img key={index} src={image} alt={`${startup.name} - ${index + 1}`} className="gallery-image" />
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h2>Contact</h2>
            <p>
              <strong>Website:</strong> <a href={startup.website} target="_blank" rel="noopener noreferrer">{startup.website}</a>
            </p>
            <p>
              <strong>Email:</strong> <a href={`mailto:${startup.contact}`}>{startup.contact}</a>
            </p>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={`Schedule a Meeting with ${startup.name}`}
        description={`Connect with the ${startup.name} team to discuss potential collaboration or investment opportunities.`}
      />
    </Layout>
  );
}

export default StartupProfile;