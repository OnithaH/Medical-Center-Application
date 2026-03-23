const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authenticate = require('../middlewares/auth.middleware');
const authorize = require('../middlewares/role.middleware');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       403:
 *         description: Access denied
 */
router.get('/', authenticate, authorize('Admin'), userController.getAll);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Username
 *               - Password
 *               - Role
 *             properties:
 *               Username:
 *                 type: string
 *               Password:
 *                 type: string
 *               Role:
 *                 type: string
 *                 enum: [Admin, Doctor, Assistant]
 *     responses:
 *       201:
 *         description: User created
 *       403:
 *         description: Access denied
 */
router.post('/', authenticate, authorize('Admin'), userController.create);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted
 *       403:
 *         description: Access denied
 */
router.delete('/:id', authenticate, authorize('Admin'), userController.delete);

module.exports = router;
