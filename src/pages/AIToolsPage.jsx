import React, { useState } from 'react';
import ContentCard from '../components/ContentCard';

function AIToolsPage() {
  const [activeTab, setActiveTab] = useState('risk-prediction');
  
  const aiTools = [
    {
      id: 'risk-prediction',
      title: 'Investment Risk Prediction',
      description: 'Predict startup success probability based on industry trends, team strength, and funding patterns.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      features: [
        'Historical data analysis',
        'Market trend insights',
        'Team composition evaluation',
        'Funding pattern analysis'
      ]
    },
    {
      id: 'business-model',
      title: 'Business Model Canvas Generator',
      description: 'Generate a full business model canvas with revenue, cost, and break-even analysis.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      features: [
        'Revenue stream modeling',
        'Cost structure analysis',
        'Break-even calculation',
        'Competitor analysis'
      ]
    },
    {
      id: 'financial-tracker',
      title: 'Financial Tracker',
      description: 'Track and categorize business income, expenses, and profit trends for startups and investors.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      features: [
        'Automated categorization',
        'Real-time dashboards',
        'Trend analysis',
        'Financial alerts'
      ]
    }
  ];
  
  const selectedTool = aiTools.find(tool => tool.id === activeTab);

  return (
    <div className="ai-tools-page">
      <div className="tools-tabs">
        {aiTools.map(tool => (
          <button
            key={tool.id}
            className={`tab-button ${activeTab === tool.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tool.id)}
          >
            {tool.title}
          </button>
        ))}
      </div>
      
      {selectedTool && (
        <div className="tool-details">
          <div className="tool-header">
            <h2>{selectedTool.title}</h2>
            <button className="launch-button">Launch Tool</button>
          </div>
          
          <div className="tool-content">
            <div className="tool-image">
              <img src={selectedTool.image} alt={selectedTool.title} />
            </div>
            
            <div className="tool-description">
              <p>{selectedTool.description}</p>
              
              <div className="tool-features">
                <h3>Key Features</h3>
                <ul>
                  {selectedTool.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="related-tools">
        <h3>Related Resources</h3>
        <div className="related-tools-grid">
          <ContentCard
            title="Financial Modeling Course"
            description="Learn how to create comprehensive financial models for your startup."
            image="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
            tags={['Finance', 'Course']}
            link={{ url: '/courses/financial-modeling', text: 'View Course' }}
          />
          <ContentCard
            title="Investment Analytics Guide"
            description="A comprehensive guide to understanding investment analytics and metrics."
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            tags={['Guide', 'Analytics']}
            link={{ url: '/resources/investment-analytics', text: 'Read Guide' }}
          />
        </div>
      </div>
    </div>
  );
}

export default AIToolsPage;