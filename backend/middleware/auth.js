import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader.split(' ')[1]
        const secret = process.env.SECRET_TOKEN
        let decodedData = jwt.verify(token, secret)
        req.userId = decodedData?.id // Optional_chaining
        next()
    } catch (e) {
        res.status(500).json({ message: "Something went wrong. " + e })
    }
}

export default auth