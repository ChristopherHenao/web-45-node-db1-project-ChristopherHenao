const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  return db('accounts').where('id', id).first()
}

const create = async (account) => {
  const { name, budget } = account
  const [id] = await db('accounts').insert({name, budget})
  return getById(id)
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update({ name: account.name, budget: account.budget })
  return getById(id)
}

const deleteById = async (id) => {
  const deletedAccount = await getById(id)
  await db('accounts').where('id', id).delete()
  return deletedAccount
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
