import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: "manya04092005@gmail.com",
      subject: `New Message from ${name}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5001, () => console.log("📬 Mail API running on http://localhost:5001"));
