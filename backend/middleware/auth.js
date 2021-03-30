import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const secret = process.env.SECRET_TOKEN

        const decodedData = jwt.verify(token, secret)

        req.userId = decodedData?.id

        next()
    } catch (e) {
        console.log(e)
    }
}

export default auth