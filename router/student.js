const express = require('express');
const router = express.Router();
const fs = require('fs');
// const createObjectCSVWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const path = './MOCK_DATA.csv';

router.get('/', (req, res) => {
  res.send('Student pages');
})

// router.get('/report/:id/name/:newName', (req, res) => {
//   // const id = req.body.studentId
//   const id = req.params.id
//   const name = req.params.newName
//   res.send(`Student report: ${id}`)
// })


router.post('/report', (req, res) => {
  const id = req.body.studentId;
  // res.send(id)

  fs.createReadStream(path)
  .pipe(csv())
  .on('data', (row) => {
      if (row['id'] == id) {
        res.send(`<h2>ID: ${row.id}<h2>
        <h2>Email: ${row.email}<h2>
        <h2>First Name: ${row.first_name}<h2>
        <h2>Last Name: ${row.last_name}<h2>`)
    }
  })
  .on('end', () => {
    console.log(`done parsing`)
  })
})




router.post('/newUser', (req, res) => {
  console.log(req.body)
  let newUser = `\n${req.body.id},${req.body.first_name},${req.body.last_name},${req.body.email}`
  fs.appendFile(path, newUser, (err) => {
    if (err) throw err;
  })

  // .on('end', () => {
  //   console.log(`done parsing`)
  //   req.send('Data saved')
  // })

  res.send('Data saved')

})

module.exports = router;