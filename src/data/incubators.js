const incubators = [
  {
    id: 'inc1',
    name: 'TechStars',
    location: 'Boulder, CO',
    focus: ['SaaS', 'AI', 'FinTech'],
    description: 'A leading global accelerator that helps entrepreneurs succeed through mentorship-driven accelerator programs.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    website: 'https://www.techstars.com',
    foundedYear: 2006,
    successRate: 78,
    averageInvestment: '$120K',
    programDuration: '3 months',
    alumni: [
      { name: 'SendGrid', exitValue: '$2B' },
      { name: 'DigitalOcean', exitValue: '$5B' }
    ]
  },
  {
    id: 'inc2',
    name: 'Y Combinator',
    location: 'Mountain View, CA',
    focus: ['Technology', 'Biotech', 'Consumer'],
    description: 'The world\'s most powerful startup incubator, providing seed funding, advice, and connections.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
    website: 'https://www.ycombinator.com',
    foundedYear: 2005,
    successRate: 85,
    averageInvestment: '$150K',
    programDuration: '3 months',
    alumni: [
      { name: 'Airbnb', exitValue: '$31B' },
      { name: 'Dropbox', exitValue: '$10B' }
    ]
  },
  {
    id: 'inc3',
    name: 'Founders Factory',
    location: 'London, UK',
    focus: ['HealthTech', 'EdTech', 'Media'],
    description: 'A corporate-backed accelerator and incubator, building and scaling early-stage technology companies.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    website: 'https://foundersfactory.com',
    foundedYear: 2015,
    successRate: 72,
    averageInvestment: '£100K',
    programDuration: '6 months',
    alumni: [
      { name: 'Hoop', exitValue: 'Acquired' },
      { name: 'Vidsy', exitValue: 'Series A' }
    ]
  }
];

export default incubators;