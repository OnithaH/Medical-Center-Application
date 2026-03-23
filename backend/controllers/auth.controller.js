const authService = require('../services/auth.service');

class AuthController {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const result = await authService.login(username, password);
            res.json(result);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    async logout(req, res) {
        // Since we are using stateless JWT, "logout" on server-side is mostly 
        // about telling the client to delete the token.
        // If we had a token blacklist, we would add the token here.
        res.json({ message: 'Logout successful' });
    }
}

module.exports = new AuthController();
