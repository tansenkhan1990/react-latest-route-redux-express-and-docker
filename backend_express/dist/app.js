"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const protectedRoutes_1 = __importDefault(require("./routes/protectedRoutes"));
const app = (0, express_1.default)();
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Public routes
app.use('/api/auth', authRoutes_1.default);
// Protected routes
app.use('/api/protected', protectedRoutes_1.default);
exports.default = app;
