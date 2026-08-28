const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const SECURE_ADMIN_MOBILE = "8053770934";

app.post('/api/verify-login', (req, res) => {
    const { mobile } = req.body;
    if (!mobile) return res.status(400).json({ success: false, message: "Mobile required" });

    if (mobile.includes(SECURE_ADMIN_MOBILE)) {
        return res.json({ success: true, isAdmin: true });
    }
    return res.json({ success: true, isAdmin: false });
});

module.exports = app;
