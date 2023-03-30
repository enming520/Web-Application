const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Serve the static files from the React app
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// allow server to access to different port
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Connect to MongoDB
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

  mongoose.set("strictQuery", true);
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.ztbtldb.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// schema holds strings entered by the user in the upload form
const MovieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String,
  director: String
});

const movieModel = mongoose.model('movies', MovieSchema);


// server listen the post request from localhost.
app.post('/api/movies', (req, res) => {
  console.log(req.body);

  movieModel.create({
    title: req.body.title,
    year: req.body.year,
    poster: req.body.poster,
    director: req.body.director
  })
  res.send('Movie Added');
})

// listen to the request json
app.get('/api/movies', (req, res) => {

  movieModel.find((err, data) => {
    console.log(data);
    res.json(data);
  })
})

app.get('/api/movie/:id', (req, res) => {
  console.log(req.params.id);
  movieModel.findById(req.params.id, (err, data) => {
    console.log(data);
    res.json(data);
  })
})

// Update new movie informations
app.put('/api/movie/:id', (req, res) => {
  console.log("Update: " + req.params.id);

  movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

// MERN stack - Delete movie from the list
app.delete('/api/movie/:id', (req, res) => {
  console.log('Delete: ' + req.params.id);
  // activate this function when user click the delete function
  movieModel.deleteOne({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})


// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});


// listen the connections on the port specified above
app.listen(port, () => {
  console.log(`Movie App listening on port ${port}`)
})
