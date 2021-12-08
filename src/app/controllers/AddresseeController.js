const Addressee = require('../models/Addressee');

module.exports = {
    async create_addressee(req, res){
        const { name } = req.body;
        const { unity_id } = req.headers;
        console.log(unity_id)
        let addressee = await Addressee.findOne({name});
        if(addressee){
            return res.json({ error: 'Remetente já cadastrado' });
        }
        addressee = await Addressee.create({ 
            name,
            unity_id                
        });        
         
        return res.json(addressee);
    },
    async show(req, res){       
          
        const users = await Addressee.find();

        return res.json(users);
    },
    
}