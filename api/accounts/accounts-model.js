const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  return db('accounts').where('id', id).first()
}

const create = account => {
  return 'create wired'
}

const updateById = (id, account) => {
  return 'update by id wired'
}

const deleteById = id => {
  return 'delete by id wired'
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
