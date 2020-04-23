const User = require('../models/user.model');


module.exports = {

    async getUserByLogin(request, response) {
        const { login } = request.body;
        return response.json(await User.findOne({ login }));
    },

    async storeUser(request, response) {
        const {
            name,
            login,
            password,
            userType
        } = request.body

        let user = await User.findOne({ login });

        if (!user) {

            user = await User.create({
                name,
                login,
                password,
                userType
            });

            return response.json(user)
        }else{
            return response.json('Usuário já cadastrado');
        }
    },

    async updateUsers(request, response) {
        const {
            name,
            login,
            password,
            userType
        } = request.body

        await User.findOneAndUpdate({
            name,
            login,
            password,
            userType
        });

        return response.json(await User.findOne({ login }));
    }

}