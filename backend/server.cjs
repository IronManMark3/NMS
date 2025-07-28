const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/submit", async (req, res) => {
  const { recaptchaToken } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secretKey}&response=${recaptchaToken}`,
  });

  const data = await response.json();

  if (!data.success) {
    return res.status(400).json({ message: "reCAPTCHA failed" });
  }

  // Continue with saving form or emailing...
  res.status(200).json({ message: "reCAPTCHA verified successfully" });
});

app.listen(PORT, () => console.log(`Backend server running on http://localhost:${PORT}`));
