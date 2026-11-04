module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    app: 'VEIL & VOW',
    status: 'Backend LIVE - Same Colors Navy #0A1931 Gold #C6A664 - No 404!',
    message: 'VEIL & VOW Backend is LIVE!',
    theme: { navy: '#0A1931', gold: '#C6A664', offwhite: '#F9F7F2' },
    endpoints: ['/api/feed', '/api/verify'],
    algos: { goldToGold: 'Gold sees Gold only', foreign: 'USA/UK only Gold', indiaPakBlock: 'PK-IN banned' },
    pricing: { signup: 'PK/IN FREE Rest ' }
  });
};
