import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export function generateAccessToken(userCreds: object) {
    dotenv.config();
    return jwt.sign(userCreds, process.env.TOKEN_SECRET, { expiresIn: 60 * 30 });
};

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
      if (err) return res.sendStatus(403)

      req.user = user

      next()
    })
}