import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const secret = process.env.SECRET_TOKEN
        let decodedData = jwt.verify(token, secret)

        req.userId = decodedData?.id

        next()
    } catch (e) {
        res.status(500).json({ message: "Something went wrong. " + e })
    }
}

export default auth