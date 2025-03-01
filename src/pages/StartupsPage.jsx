import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ContentGrid from '../components/ContentGrid';
import FilterBar from '../components/FilterBar';
import startups from '../data/startups';

function StartupsPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  
  const startupFilters = [
    { id: 'cleantech', label: 'CleanTech' },
    { id: 'healthtech', label: 'HealthTech' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'edtech', label: 'EdTech' },
    { id: 'robotech', label: 'RoboTech' },
    { id: 'spacetech', label: 'SpaceTech' }
  ];

  const handleFilterChange = (filterId) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  const filteredStartups = activeFilters.length > 0
    ? startups.filter(startup => 
        activeFilters.some(filter => 
          startup.industry.toLowerCase() === filter.toLowerCase()
        )
      )
    : startups;

  const startupItems = filteredStartups.map(startup => ({
    title: startup.name,
    description: startup.description,
    image: startup.image,
    tags: [startup.industry, startup.stage, startup.location],
    link: { url: `/startups/${startup.id}`, text: 'View Profile' }
  }));

  return (
    <Layout 
      title="Innovative Startups" 
      description="Discover high-potential startups across various industries."
      actions={
        <Link to="/startups/submit" className="submit-button">
          Submit Your Startup
        </Link>
      }
    >
      <FilterBar 
        filters={startupFilters} 
        activeFilters={activeFilters} 
        onFilterChange={handleFilterChange} 
      />
      <ContentGrid items={startupItems} />
    </Layout>
  );
}

export default StartupsPage;