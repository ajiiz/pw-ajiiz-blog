import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    image:
    {
        data: Buffer,
        contentType: String
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)
export default PostMessage