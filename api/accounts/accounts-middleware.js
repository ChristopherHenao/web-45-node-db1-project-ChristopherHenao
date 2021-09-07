const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
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
