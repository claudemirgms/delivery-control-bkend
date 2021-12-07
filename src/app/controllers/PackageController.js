const Package = require('../models/Package');

module.exports = {
    async create_package(req, res){
        const package = await Package.create(req.body);
        
        return res.json(package);
    },
    async get_packages(req, res){        
        const packages = await Package.aggregate([
            {
                $lookup:{
                    from: "unities",
                    localField: "unity_id",
                    foreignField: "_id",
                    as: "unity"
                }
            }
        ]);
        return res.json(packages);
    },
    async deliver_package(req, res){
        const { package_id } = req.params
        const { dateDelivery, status } = req.body
        let package = await Package.findById(package_id);
        if(package){
            package.dateDelivery = dateDelivery
            package.status = status
            await package.save()
        }
        return res.json(package);
    }        
}
