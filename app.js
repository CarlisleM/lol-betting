const express = require('express'); 
const cors = require('cors');
const app = express(); 
var bodyParser = require('body-parser');

const services = require('./services/requests')

const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json()); 
app.use(express.static('build')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/upcoming', (req, res) => { 
  services.getAllUpcomingGames(req, res);
});

app.get('/api/games', (req, res) => {
  services.getAllGames(req, res);
});

app.get('/api/scrapegames', (req, res) => {
  services.getAllGamesScrape(req, res);
});

app.get('/api/leagues', (req, res) => {
  services.getAllLeagues(req, res);
});

app.get('/api/teams', (req, res) => {
  services.getAllTeams(req, res);
});

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(PORT, () => { 
  console.log(`App is running on ${PORT}`)
}) 