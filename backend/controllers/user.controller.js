const { User } = require('../models');
const bcrypt = require('bcryptjs');

class UserController {
    async getAll(req, res) {
        try {
            const users = await User.findAll({ attributes: { exclude: ['Password'] } });
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async create(req, res) {
        try {
            const { Username, Password, Role } = req.body;
            const hashedPassword = await bcrypt.hash(Password, 10);
            const user = await User.create({ Username, Password: hashedPassword, Role });
            const { Password: _, ...userWithoutPassword } = user.toJSON();
            res.status(201).json(userWithoutPassword);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await User.destroy({ where: { id } });
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();
