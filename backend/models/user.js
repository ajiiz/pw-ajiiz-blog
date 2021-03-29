import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required:  true },
    password: { type: String, required: true },
})

const user = mongoose.model('User', user)

export default user