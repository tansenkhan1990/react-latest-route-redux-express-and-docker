"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const authenticateJWT = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1]; // Get token from Authorization header
    if (!token) {
        res.status(401).json({ message: 'Access Denied. No token provided.' });
        return;
    }
    try {
        const verified = jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET);
        req.user = verified; // Attach user data to the request object
        next();
    }
    catch (err) {
        res.status(403).json({ message: 'Invalid token.' });
    }
};
exports.authenticateJWT = authenticateJWT;
