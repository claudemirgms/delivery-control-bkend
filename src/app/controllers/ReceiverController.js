const Receiver = require('../models/Receiver');

module.exports = {
    async create_receiver_package(req, res){
        const { package_id, name, date } = req.body;
        let receiver = await Receiver.findOne({package_id});
        if(receiver){
            return res.json({ error: 'Pacote já recebido' });
        }
        receiver = await Receiver.create({
            package_id, 
            name,
            date
        });        
         
        return res.json(receiver);
    },
    async show(req, res){       
          
        const users = await Receiver.find();

        return res.json(users);
    },
    
}