
import { Database } from '@vuex-orm/core'
import User from '../models/User'
import * as user from '../store/user'

const database = new Database()

database.register(User, user)

export default database