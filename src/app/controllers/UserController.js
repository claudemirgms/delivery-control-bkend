const bcrypt =  require('bcryptjs')
const User = require('../models/User');

module.exports = {
    async create_user(req, res){
        const { email, password } = req.body;
        const password_hash = await bcrypt.hash(password, 8);
        let user = await User.findOne({email});
        if(user){
            return res.json({ error: 'E-mail já cadastrado' });
        }
        user = await User.create({ 
            email,
            password: password_hash, 
            confirmed: false
        });        
         
        return res.json(user);
    }    
}
