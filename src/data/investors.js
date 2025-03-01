const investors = [
  {
    id: 'inv1',
    name: 'Sequoia Capital',
    type: 'Venture Capital',
    focus: ['Technology', 'Healthcare', 'Financial Services'],
    description: 'A leading venture capital firm focused on energy, financial, enterprise, healthcare, internet, and mobile startups.',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc',
    website: 'https://www.sequoiacap.com',
    foundedYear: 1972,
    aum: '$85B',
    notableInvestments: ['Apple', 'Google', 'Airbnb', 'Stripe'],
    investmentStages: ['Seed', 'Early', 'Growth'],
    minimumInvestment: '$1M',
    averageInvestment: {
      seed: '$2M - $5M',
      seriesA: '$8M - $15M',
      seriesB: '$15M - $30M'
    }
  },
  {
    id: 'inv2',
    name: 'Andreessen Horowitz',
    type: 'Venture Capital',
    focus: ['Software', 'Crypto', 'Fintech', 'Bio'],
    description: 'A venture capital firm that backs bold entrepreneurs building the future through technology.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    website: 'https://a16z.com',
    foundedYear: 2009,
    aum: '$35B',
    notableInvestments: ['Facebook', 'Twitter', 'Coinbase', 'Airbnb'],
    investmentStages: ['Seed', 'Early', 'Growth'],
    minimumInvestment: '$500K',
    averageInvestment: {
      seed: '$1M - $3M',
      seriesA: '$5M - $12M',
      seriesB: '$15M - $25M'
    }
  },
  {
    id: 'inv3',
    name: 'SoftBank Vision Fund',
    type: 'Private Equity',
    focus: ['AI', 'Robotics', 'IoT', 'Computational Biology'],
    description: 'The world\'s largest technology-focused venture capital fund, investing in transformative technologies.',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa',
    website: 'https://visionfund.com',
    foundedYear: 2017,
    aum: '$100B',
    notableInvestments: ['Uber', 'WeWork', 'ByteDance', 'Slack'],
    investmentStages: ['Late', 'Growth', 'Pre-IPO'],
    minimumInvestment: '$100M',
    averageInvestment: {
      growth: '$100M - $500M',
      preIPO: '$500M - $5B'
    }
  }
];

export default investors;