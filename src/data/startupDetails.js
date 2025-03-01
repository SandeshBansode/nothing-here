const startupDetails = {
  'startup1': {
    id: 'startup1',
    name: 'EcoTech Solutions',
    tagline: 'Developing sustainable energy solutions for urban environments',
    description: 'EcoTech Solutions is pioneering innovative solar and wind energy technologies designed specifically for urban environments. Our patented micro-grid systems enable buildings to generate and store their own renewable energy, reducing carbon footprints and energy costs.',
    founded: 2019,
    location: 'Austin, TX',
    stage: 'Series A',
    funding: {
      total: '$4.5M',
      rounds: [
        { type: 'Seed', amount: '$750K', date: '2020-03' },
        { type: 'Series A', amount: '$3.75M', date: '2022-01' }
      ]
    },
    team: [
      { name: 'Sarah Chen', position: 'CEO', image: 'https://randomuser.me/api/portraits/women/23.jpg' },
      { name: 'David Rodriguez', position: 'CTO', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
      { name: 'Aisha Patel', position: 'COO', image: 'https://randomuser.me/api/portraits/women/67.jpg' }
    ],
    metrics: {
      revenue: '$1.2M ARR',
      growth: '125% YoY',
      customers: 28,
      retention: '94%'
    },
    category: 'CleanTech',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7',
      'https://images.unsplash.com/photo-1548168917-210a51fa5a97'
    ],
    pitch: 'https://example.com/ecotech-pitch.pdf',
    website: 'https://ecotechsolutions.example.com',
    contact: 'info@ecotechsolutions.example.com'
  },
  'startup2': {
    id: 'startup2',
    name: 'HealthAI',
    tagline: 'AI-powered healthcare diagnostics and monitoring',
    description: 'HealthAI leverages artificial intelligence to revolutionize healthcare diagnostics and patient monitoring. Our platform analyzes medical imaging, patient data, and vital signs to provide early disease detection and personalized treatment recommendations.',
    founded: 2020,
    location: 'Boston, MA',
    stage: 'Seed',
    funding: {
      total: '$2.1M',
      rounds: [
        { type: 'Pre-seed', amount: '$500K', date: '2020-09' },
        { type: 'Seed', amount: '$1.6M', date: '2021-11' }
      ]
    },
    team: [
      { name: 'Dr. James Wilson', position: 'CEO', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { name: 'Dr. Maria Lopez', position: 'Chief Medical Officer', image: 'https://randomuser.me/api/portraits/women/28.jpg' },
      { name: 'Kevin Zhang', position: 'CTO', image: 'https://randomuser.me/api/portraits/men/59.jpg' }
    ],
    metrics: {
      accuracy: '97.8%',
      hospitals: 12,
      patients: '5,000+',
      diagnosisTime: '75% reduction'
    },
    category: 'HealthTech',
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842'
    ],
    pitch: 'https://example.com/healthai-pitch.pdf',
    website: 'https://healthai.example.com',
    contact: 'contact@healthai.example.com'
  },
  'startup3': {
    id: 'startup3',
    name: 'FinFlow',
    tagline: 'Next-generation financial management platform',
    description: 'FinFlow is building the future of financial management for businesses and individuals. Our platform combines AI-driven insights, automated accounting, and predictive analytics to optimize cash flow, reduce expenses, and maximize investment returns.',
    founded: 2018,
    location: 'New York, NY',
    stage: 'Series B',
    funding: {
      total: '$18.5M',
      rounds: [
        { type: 'Seed', amount: '$1.5M', date: '2018-07' },
        { type: 'Series A', amount: '$7M', date: '2020-04' },
        { type: 'Series B', amount: '$10M', date: '2022-09' }
      ]
    },
    team: [
      { name: 'Michael Brown', position: 'CEO', image: 'https://randomuser.me/api/portraits/men/83.jpg' },
      { name: 'Jennifer Taylor', position: 'CFO', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
      { name: 'Robert Chen', position: 'CTO', image: 'https://randomuser.me/api/portraits/men/36.jpg' }
    ],
    metrics: {
      users: '75,000+',
      businessClients: 320,
      transactionVolume: '$1.2B annually',
      savingsGenerated: '$45M'
    },
    category: 'FinTech',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6'
    ],
    pitch: 'https://example.com/finflow-pitch.pdf',
    website: 'https://finflow.example.com',
    contact: 'business@finflow.example.com'
  }
};

export default startupDetails;