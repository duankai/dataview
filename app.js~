const express = require('express')
const path = require('path')

const app = express()
const port = 4500

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './client/index.html'))
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
