const courses = [
  {
    id: 'course1',
    title: 'Startup Funding Mastery',
    description: 'Learn how to secure funding for your startup from seed to Series A and beyond.',
    price: 199,
    duration: '6 weeks',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    category: 'Funding',
    rating: 4.8,
    students: 1243,
    modules: [
      { title: 'Understanding Investor Psychology', duration: '45 min' },
      { title: 'Crafting the Perfect Pitch Deck', duration: '60 min' },
      { title: 'Financial Projections That Impress', duration: '75 min' },
      { title: 'Negotiating Term Sheets', duration: '90 min' },
      { title: 'Post-Funding Growth Strategies', duration: '60 min' }
    ]
  },
  {
    id: 'course2',
    title: 'AI-Driven Business Models',
    description: 'Discover how to leverage AI to create innovative and scalable business models.',
    price: 249,
    duration: '8 weeks',
    instructor: 'Dr. Michael Chen',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c',
    category: 'Technology',
    rating: 4.9,
    students: 876,
    modules: [
      { title: 'AI Fundamentals for Business Leaders', duration: '60 min' },
      { title: 'Data-Driven Decision Making', duration: '75 min' },
      { title: 'AI Implementation Strategies', duration: '90 min' },
      { title: 'Scaling AI Solutions', duration: '60 min' },
      { title: 'Future-Proofing Your AI Business', duration: '45 min' }
    ]
  },
  {
    id: 'course3',
    title: 'Investment Portfolio Optimization',
    description: 'Master the art and science of building a high-performing startup investment portfolio.',
    price: 299,
    duration: '5 weeks',
    instructor: 'Alex Rivera',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Investment',
    rating: 4.7,
    students: 654,
    modules: [
      { title: 'Risk Assessment Frameworks', duration: '60 min' },
      { title: 'Diversification Strategies', duration: '45 min' },
      { title: 'Due Diligence Deep Dive', duration: '90 min' },
      { title: 'Performance Tracking Metrics', duration: '60 min' },
      { title: 'Exit Strategy Planning', duration: '75 min' }
    ]
  }
];

export default courses;