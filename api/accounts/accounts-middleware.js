const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  try {
    if (name === undefined || budget === undefined) {
      next({ status: 400, message: "name and budget are required" })
    }
    else if (typeof name !== 'string') {
      next({ status: 400, message: "name of account must be a string" })
    }
    else if (name.trim().length < 3 || name.trim().length > 100) {
      next({ status: 400, message: "name of account must be between 3 and 100" })
    }
    else if (typeof budget !== 'number') {
      next({ status: 400, message: "must be a number" })
    }
    else if (budget < 0 || budget > 1000000) {
      next({ status: 400, message: "budget of account is too large or too small" })
    }
    else {
      req.name = name.trim()
      next()
    }
  }
  catch (error) {
    next(error)
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  const account = await Accounts.getById(req.params.id)
    try {
      if (!account) {
        next({ status: 404, message: 'account not found' })
      }
      else {
        req.account = account
        next()
      }
    }
    catch (error) {
      next(error)
    }
}
