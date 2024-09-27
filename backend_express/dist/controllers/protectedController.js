"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
// GET /dashboard
const getDashboard = (req, res) => {
    var _a;
    res.status(200).json({ message: `Welcome ${(_a = req.user) === null || _a === void 0 ? void 0 : _a.username}, this is your dashboard!` });
};
exports.getDashboard = getDashboard;
