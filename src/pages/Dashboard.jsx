import React from 'react';
import MetricsCard from '../components/analytics/MetricsCard';
import MetricsChart from '../components/analytics/MetricsChart';
import ContentGrid from '../components/ContentGrid';
import startups from '../data/startups';

function Dashboard() {
  // Sample metrics data
  const metricsData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 700 },
    { name: 'Jun', value: 900 }
  ];

  // Featured startups for the dashboard
  const featuredStartups = startups.slice(0, 4).map(startup => ({
    title: startup.name,
    description: startup.description,
    image: startup.image,
    tags: [startup.industry],
    link: { url: `/startups/${startup.id}`, text: 'Learn More' }
  }));

  return (
    <div>
      <div className="dashboard-metrics">
        <div className="metrics-row">
          <MetricsCard 
            title="Total Startups" 
            value="2,543" 
            percentage={12.5} 
            icon="trending_up" 
          />
          <MetricsCard 
            title="Active Investors" 
            value="1,234" 
            percentage={8.2} 
            icon="groups" 
          />
          <MetricsCard 
            title="Total Investments" 
            value="$12.4M" 
            percentage={15.3} 
            icon="payments" 
          />
          <MetricsCard 
            title="Success Rate" 
            value="94%" 
            percentage={4.5} 
            icon="target" 
          />
        </div>
        
        <div className="charts-row">
          <MetricsChart 
            data={metricsData} 
            title="Investment Trends" 
            dataKey="value" 
            color="#5a67d8" 
          />
        </div>
      </div>

      <ContentGrid title="Featured Startups" items={featuredStartups} />
    </div>
  );
}

export default Dashboard;