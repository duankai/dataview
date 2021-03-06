const express = require('express')
const path = require('path')

const app = express()
const port = 4500

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './client/index.html'))
})

app.get('/map', function(req, res){
    res.sendFile(path.join(__dirname, './client/map.html'))
})

app.get('/heatmap', function(req, res){
    res.sendFile(path.join(__dirname, './client/heatmap.html'))
})

app.get('/province_user', function(req, res){
    res.sendFile(path.join(__dirname, './client/province_user.html'))
})

app.use('/static/', express.static(path.join(__dirname, './dist')))


app.listen(port, function(err){
  if(err){
    throw new Error(err)
  }else
  {
    console.log(`server listen on:  ${port}`)
  }
})
