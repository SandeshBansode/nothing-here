import React, { useState } from 'react';
import Layout from '../components/Layout';
import ContentGrid from '../components/ContentGrid';
import FilterBar from '../components/FilterBar';
import incubators from '../data/incubators';

function IncubatorsPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  
  const incubatorFilters = [
    { id: 'saas', label: 'SaaS' },
    { id: 'ai', label: 'AI' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'healthtech', label: 'HealthTech' },
    { id: 'edtech', label: 'EdTech' }
  ];

  const handleFilterChange = (filterId) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  const filteredIncubators = activeFilters.length > 0
    ? incubators.filter(incubator => 
        incubator.focus.some(focus => 
          activeFilters.some(filter => 
            focus.toLowerCase() === filter.toLowerCase()
          )
        )
      )
    : incubators;

  const incubatorItems = filteredIncubators.map(incubator => ({
    title: incubator.name,
    description: incubator.description,
    image: incubator.image,
    tags: [...incubator.focus, incubator.location],
    link: { url: `/incubators/${incubator.id}`, text: 'View Details' }
  }));

  return (
    <Layout 
      title="Incubators & Accelerators" 
      description="Connect with top incubators and accelerators to grow your startup."
    >
      <FilterBar 
        filters={incubatorFilters} 
        activeFilters={activeFilters} 
        onFilterChange={handleFilterChange} 
      />
      <ContentGrid items={incubatorItems} />
    </Layout>
  );
}

export default IncubatorsPage;