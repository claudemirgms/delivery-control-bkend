const Unity = require('../models/Unity');

module.exports = {    
    async create_unities(req, res){
            
        const promises = req.body.map(async (unity, idx) => {
            await Unity.create(unity)
        });
        
        await Promise.all(promises);
        
        return res.send(200);
    },    
    async get_unities(req, res){       
        const unities = await Unity.aggregate([           
            {
                $lookup:{
                    from: "addressees",
                    localField: "_id",
                    foreignField: "unity_id",
                    as: "addressees"
                }
            }
        ]);
        return res.json(unities);
    }    
    
}
