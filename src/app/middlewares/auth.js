const jwt = require('jsonwebtoken');
const { promisify } = require('util');

require('dotenv/config');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        return res.status(401).json({error: 'Token não pode ser nulo'})
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).json({error: 'Erro de Token'})
    }
    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).json({error: 'Token mal formatado'})
    }

    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
        if(err) return res.status(401).json({error: 'Token inválido'})
        req.userId = decoded.id        
        return next();
    })
}
