module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const url = req.url || '';
  if (url.includes('/feed')) {
    return res.json([
      {id:1, name:'Khurram', age:28, education:'BS', sect:'Sunni', country:'PK', rating:4.8, reviews:120, pics:5, verified:true, gold:true, foreign:false},
      {id:2, name:'Ayesha', age:24, education:'Masters', sect:'Sunni', country:'USA', rating:4.6, reviews:80, pics:5, verified:true, gold:true, foreign:true},
      {id:3, name:'Zain', age:26, education:'BS', sect:'Sunni', country:'PK', rating:4.2, reviews:50, pics:5, verified:true, gold:true, foreign:false}
    ]);
  }
  return res.json({
    app: 'VEIL & VOW',
    status: 'Backend LIVE - Same Colors Navy #0A1931 Gold #C6A664 - No 404!',
    message: 'VEIL & VOW Backend is LIVE!',
    theme: { navy: '#0A1931', gold: '#C6A664', offwhite: '#F9F7F2' }
  });
};
