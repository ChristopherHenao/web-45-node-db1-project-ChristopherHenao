const router = require('express').Router()
const Accounts = require('./accounts-model')

router.get('/', async (req, res, next) => {
  const accounts = await Accounts.getAll()
  try {
    res.json(accounts)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  const data = await Accounts.getById(req.params.id)
  try {
    res.json(data)
  }
  catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const data = await Accounts.create(req.body)
  try {
    console.log(data)
    res.json(data)
  }
  catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  const data = await Accounts.updateById(req.params.id, req.body)
  try {
    console.log(data)
    res.json(data)
  }
  catch (error) {
    next(error)
  }
});

router.delete('/:id', async (req, res, next) => {
  const data = await Accounts.deleteById(req.params.id)
  try {
    console.log(data)
    res.json(data)
  }
  catch (error) {
    next(error)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ message: err.message, stack: err.stack })
})

module.exports = router;
