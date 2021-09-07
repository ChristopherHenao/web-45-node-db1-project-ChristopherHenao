const router = require('express').Router()
const Accounts = require('./accounts-model')
const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  const accounts = await Accounts.getAll()
  try {
    res.json(accounts)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  try {
    res.json(req.account)
  }
  catch (error) {
    next(error)
  }
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  const data = await Accounts.create({ name: req.name, budget: req.body.budget })
  try {
    res.status(201).json(data)
  }
  catch (error) {
    next(error)
  }
})

router.put('/:id', checkAccountId, checkAccountPayload, async (req, res, next) => {
  const updatedAccount = await Accounts.updateById(req.params.id, {name: req.name, budget: req.body.budget})
  try {
    res.json(updatedAccount)
  }
  catch (error) {
    next(error)
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  const deletedAccount = await Accounts.deleteById(req.params.id)
  try {
    res.json(deletedAccount)
  }
  catch (error) {
    next(error)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ message: err.message, stack: err.stack })
})

module.exports = router;
