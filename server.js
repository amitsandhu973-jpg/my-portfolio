const express = require('express');
const cors = require('cors');
const app = express();

// सभी जगहों से रिक्वेस्ट आने की अनुमति दें (CORS Fix)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

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
