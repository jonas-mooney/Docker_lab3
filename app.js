const express = require('express');
const app = express();
const student = require('./router/student')
const port = process.env.PORT || 8080;

app.use('/homepage', express.static('public'))
app.use(express.urlencoded({extended: false}));
app.use('/student', student)

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(port, () => {
  console.log(`Server is up. Listening on port: ${port}`)
})

