import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import TelegramBot from "node-telegram-bot-api";
import { log } from "console";

const app = express();
const POST = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

const bot = new TelegramBot("YOUR_TELEGRAM_BOT_TOKEN", { polling: false });
const CHAT_ID = "YOUR_TELEGRAM_CHAT_ID";

app.post("api/contact", async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: "Имя и телефон обязательны" });
    }

    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: "your-email@gmail.com",
      subject: "Новое заявка с сайта",
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong> ${message || "Не указано"}</p>
        <p><strong>Дата:</strong> ${new Date().toLocaleString("ru-RU")}</p>
      `,
    });

    await bot.sendMessage(
      CHAT_ID,
      `📩 Новая заявка с сайта\n\n*Имя:* ${name}\n*Телефон:* ${phone}\n*Сообщение:* ${message || "Не указано"}\n*Дата:* ${new Date().toLocaleString("ru-RU")}`,
      { parse_mode: "Markdown" },
    );
    res.json({ succes: true });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    res.status(500).json({ error: "Ошибка при отправке формы" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
