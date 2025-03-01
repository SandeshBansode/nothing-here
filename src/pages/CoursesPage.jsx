import React, { useState } from 'react';
import Layout from '../components/Layout';
import ContentGrid from '../components/ContentGrid';
import FilterBar from '../components/FilterBar';
import courses from '../data/courses';

function CoursesPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  
  const courseFilters = [
    { id: 'funding', label: 'Funding' },
    { id: 'technology', label: 'Technology' },
    { id: 'investment', label: 'Investment' },
    { id: 'growth', label: 'Growth' }
  ];

  const handleFilterChange = (filterId) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  const filteredCourses = activeFilters.length > 0
    ? courses.filter(course => 
        activeFilters.some(filter => 
          course.category.toLowerCase() === filter.toLowerCase()
        )
      )
    : courses;

  const courseItems = filteredCourses.map(course => ({
    title: course.title,
    description: course.description,
    image: course.image,
    tags: [course.category, `$${course.price}`, `${course.duration}`],
    link: { url: `/courses/${course.id}`, text: 'View Course' }
  }));

  return (
    <Layout 
      title="Premium Courses" 
      description="Expert-led courses on startup scaling, financial planning, and investment strategies."
    >
      <FilterBar 
        filters={courseFilters} 
        activeFilters={activeFilters} 
        onFilterChange={handleFilterChange} 
      />
      <ContentGrid items={courseItems} />
    </Layout>
  );
}

export default CoursesPage;