import React, { useState } from 'react';
import Layout from '../components/Layout';
import ContentGrid from '../components/ContentGrid';
import FilterBar from '../components/FilterBar';
import investors from '../data/investors';

function InvestorsPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  
  const investorFilters = [
    { id: 'technology', label: 'Technology' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'financial', label: 'Financial' },
    { id: 'software', label: 'Software' },
    { id: 'ai', label: 'AI' }
  ];

  const handleFilterChange = (filterId) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  const filteredInvestors = activeFilters.length > 0
    ? investors.filter(investor => 
        investor.focus.some(focus => 
          activeFilters.some(filter => 
            focus.toLowerCase().includes(filter.toLowerCase())
          )
        )
      )
    : investors;

  const investorItems = filteredInvestors.map(investor => ({
    title: investor.name,
    description: investor.description,
    image: investor.image,
    tags: [investor.type, ...investor.investmentStages],
    link: { url: `/investors/${investor.id}`, text: 'View Profile' }
  }));

  return (
    <Layout 
      title="Investors" 
      description="Connect with venture capital firms, angel investors, and investment groups."
    >
      <FilterBar 
        filters={investorFilters} 
        activeFilters={activeFilters} 
        onFilterChange={handleFilterChange} 
      />
      <ContentGrid items={investorItems} />
    </Layout>
  );
}

export default InvestorsPage;