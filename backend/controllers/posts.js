import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {

    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const createPost = async (req, res) => {

    const { title, content, selectedFile } = req.body;
    const newPostMessage = new PostMessage({ title, content, selectedFile })

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" })
    }

    try {
        await newPostMessage.save()
        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}