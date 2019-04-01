# Weather-app-with-Server

Web Srever = Express

To install express 
``` npm i express```

const express=require('express')
const app = express()

'Now <b>app</b> can be used to set up the server.'

Here are the steps shown to setup the the server at localhost:3000
```
app.get('',(req,res)=>{
  res.send('Hello Express!')
})
```
```
app.get('/weather',(req,res)=>{
  res.send('Your Weather')
})
```
```app.get(arg1,arg2)``` has 2 arguments <br>
1.  <br>
2. arg2 -> is a callback function with arguments request and respond.
