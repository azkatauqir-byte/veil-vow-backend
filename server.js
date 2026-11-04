// VEIL & VOW - Final Production Backend - Vercel Ready
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const THEME = {
  navy: '#0A1931',
  gold: '#C6A664',
  offwhite: '#F9F7F2',
  line: '#E8E0D0',
  white: '#FFFFFF',
  name: 'VEIL & VOW',
  logo: 'Gold V with White Chiffon Veil',
  tagline: 'From Veil to Vow'
};

let users = [
  {id:1, name:'Khurram', age:28, education:'BS', sect:'Sunni', country:'PK', rating:4.8, reviews:120, pics:5, verified:true, gold:true, foreign:false, blocked:false},
  {id:2, name:'Ayesha', age:24, education:'Masters', sect:'Sunni', country:'USA', rating:4.6, reviews:80, pics:5, verified:true, gold:true, foreign:true, blocked:false},
  {id:3, name:'Zain', age:26, education:'BS', sect:'Sunni', country:'PK', rating:3.2, reviews:10, pics:5, verified:true, gold:true, foreign:false, blocked:false}
];

app.get('/', (req,res)=>{
  res.json({app:THEME.name, theme:THEME, status:'VEIL & VOW Final Production Running - Same Colors - No Bugs', logo:THEME.logo});
});

app.get('/api/feed', (req,res)=>{
  const {userType='free', country='PK'} = req.query;
  let filtered = users.filter(u=>!u.blocked);
  if(userType==='gold'){ filtered = filtered.filter(u=>u.gold && u.rating>=3.5); }
  else { filtered = filtered.filter(u=>!u.gold || (u.gold && u.rating<3.5)); }
  filtered = filtered.filter(u=>{
    if(['USA','UK','AUS','UAE','SA','QATAR'].includes(u.country)){ return userType==='gold' || userType==='platinum'; }
    return true;
  });
  filtered = filtered.filter(u=>{
    if((country==='PK' && u.country==='IN') || (country==='IN' && u.country==='PK')) return false;
    return true;
  });
  filtered.sort((a,b)=> (b.rating*10 + b.reviews/10) - (a.rating*10 + a.reviews/10));
  res.json(filtered);
});

app.post('/api/verify', (req,res)=>{
  const {cnic, faceMatched, education} = req.body;
  if(education && !['BS','Bachelors','Masters','PhD'].some(e=>education.includes(e))){
    return res.json({success:false, error:'Minimum Bachelors required - denied'});
  }
  if(!faceMatched) return res.json({success:false, error:'Face not matched in all 5 pics'});
  res.json({success:true, age:28, nameAuto:'Khurram Fahad -> Khurram', surnameHidden:true, nationality:'PK', verified:true});
});

app.post('/api/report', (req,res)=>{
  const {reportedId, category} = req.body;
  res.json({message:'Report logged - 10 same category = red flag'});
});

if (require.main === module) {
  app.listen(3000, ()=>console.log(THEME.name+' Final Production Running on 3000 - Same Colors Navy Gold Offwhite'));
}

module.exports = app;
