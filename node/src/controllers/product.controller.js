const Product = require('../models/product.model');

module.exports = {

    async getAllProducts(request, response) {
        return response.json(await Product.find());
    },

    async storeProducts(request, response) {
        const {
            type,
            name,
            quantity,
            description,
            images,
            price,
            descount,
            isPaused
        } = request.body

        let product = await Product.findOne({ name });

        if (!product) {

            product = await Product.create({
                type,
                name,
                quantity,
                description,
                images,
                price,
                descount,
                isPaused
            });
        }
        return response.json(product)
    },

    async updateProducts(request, response){
        const {
            type,
            name,
            quantity,
            description,
            images,
            price,
            descount,
            isPaused
        } = request.body

        await Product.findOneAndUpdate({ 
            type,
            name,
            quantity,
            description,
            images,
            price,
            descount,
            isPaused
         });

        return response.json(await Product.findOne({ name }));
    }

}