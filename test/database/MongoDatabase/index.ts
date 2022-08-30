import mongoose from 'mongoose'

/*
const connector = mongoose()

connector.connect('mongodb://localhost/socialapp')
connector.
*/
mongoose.connect('mongodb://localhost/socialapp')
mongoose.Promise = global.Promise

module.exports = mongoose