import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

const generateUserId = async () => {
  let currentId = parseInt(
    (await findLastUserId()) || (0).toString().padStart(5, '0')
  )
  currentId += 1
  return currentId.toString()
}

export default generateUserId
