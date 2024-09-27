"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const protectedController_1 = require("../controllers/protectedController");
const router = express_1.default.Router();
router.get('/dashboard', authMiddleware_1.authenticateJWT, protectedController_1.getDashboard);
exports.default = router;
