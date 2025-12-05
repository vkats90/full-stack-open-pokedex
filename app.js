const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error...'
  res.status(200).send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
