const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.Role)) {
            return res.status(403).json({ 
                message: 'Access denied: You do not have the required permissions' 
            });
        }
        next();
    };
};

module.exports = authorize;
