import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const {token}=req.headers;
    if(!token){
        return res.status(401).json({succcess:"false",message:"Not authorized login"});
    }
    try {
        const token_decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.userId=token_decoded.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({succcess:"false",message:"error"});
    }
}

export default authMiddleware;