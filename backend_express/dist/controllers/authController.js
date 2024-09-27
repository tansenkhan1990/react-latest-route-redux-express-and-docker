"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const tokenUtils_1 = require("../utils/tokenUtils");
const validUsername = 'tansen';
const validPassword = 'tansen';
// POST /login
const login = (req, res) => {
    const { username, password } = req.body;
    if (username === validUsername && password === validPassword) {
        const token = (0, tokenUtils_1.generateToken)({ username });
        res.status(200).json({ token });
    }
    else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
};
exports.login = login;
// POST /logout
const logout = (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
};
exports.logout = logout;
