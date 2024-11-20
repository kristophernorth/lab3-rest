import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
}
Rats = mongoose.model('Rat')

Missions = mongoose.model('Mission')

Locations = mongoose.model('Location')

export const dbContext = new DbContext()
