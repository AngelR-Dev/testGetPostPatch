const express = require('express')

const port = 6000

const app = express()


app.get('/profile', (req, res) => {
  res.json({
    name: 'Angel Roldan',
    age: 31,
    country: 'Mexico'
  })
})

app.post('/ejemploPost', (req, res) => {
  res.json({
    likeToWork_at: ['Globant', 'Honeywell', 'Ecomsur']
  })
})

app.patch('/ejemploPatch', (req, res) => {
  res.json({
    hobbies: ['gaming', 'anime', 'movies']
  })
})


app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})