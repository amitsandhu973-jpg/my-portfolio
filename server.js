const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// आपका सिक्योर एडमिन नंबर (अब यह केवल बैकएंड सर्वर पर सुरक्षित है)
const SECURE_ADMIN_MOBILE = "8053770934";

app.post('/api/verify-login', (req, res) => {
    const { mobile } = req.body;
    if (!mobile) return res.status(400).json({ success: false, message: "Mobile required" });

    if (mobile.includes(SECURE_ADMIN_MOBILE)) {
        return res.json({ success: true, isAdmin: true });
    }
    return res.json({ success: true, isAdmin: false });
});

// लोकल टेस्टिंग के लिए
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
