const Package = require('../models/Package');

module.exports = {
    async create_package(req, res){
        console.log(req.body)
        let findPackage = await Package.find({
            unity_id: req.body.unity_id,
            company: req.body.company,
            package_cod: req.body.package_cod,
            dateArrival: req.body.dateArrival
        });
        console.log(findPackage.length)
        if(findPackage.length > 0){
            return res.json({ error: 'Pacote já cadastrado' });
        }

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
    },
    async delete_package(req, res){
        const { package_id } = req.params
        console.log(package_id)        
        await Package.deleteOne({_id: `${package_id}`});
        
        return res.send(200);
    }                
}
