const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const selectUserByEmailModel = require('../../models/users/selectUserByEmailModel')
const { invalidCredentialsError } = require("../../services/errorService");
const validateSchema = require('../../utils/validateSchema');
const loginUserSchema = require('../../schemas/users/loginUserSchema');


const loginUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        await validateSchema(loginUserSchema, req.body);

        const user = await selectUserByEmailModel(email);

        if (!user) {
            return invalidCredentialsError();
        }

        const validPass = await bcrypt.compare(password, user.password);

        if (!validPass) {
            return invalidCredentialsError();
        }

        const tokenInfo = {
            id: user.id,
            role: user.role
        };
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '7d'
        });

        res.send({
            status: 'ok',
            data: {
                token
            }
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUserController;
