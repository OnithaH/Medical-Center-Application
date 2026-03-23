const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

class AuthService {
    async login(username, password) {
        const user = await User.findOne({ where: { Username: username } });

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.Password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign(
            { id: user.id, Username: user.Username, Role: user.Role },
            process.env.JWT_SECRET || 'your-default-secret',
            { expiresIn: '1d' }
        );

        return {
            user: {
                id: user.id,
                Username: user.Username,
                Role: user.Role
            },
            token
        };
    }
}

module.exports = new AuthService();
