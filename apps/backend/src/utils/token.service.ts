import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export function generateAccessToken(username: string) {
    dotenv.config();
    // return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
	return jwt.sign(username, '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611', { expiresIn: 60 * 30 })
};

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
		console.log(err)

		if (err) return res.sendStatus(403)

		req.user = user

		next()
    })
}