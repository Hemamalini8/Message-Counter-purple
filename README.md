# 💜 MESSAGE COUNTER — Purple World Edition
Clean design. Live character tracking. Instant limit alerts.

💜 A sleek, interactive message counter web application built with **Tailwind CSS** and **Vanilla JavaScript** to track character counts in real time, enforce a 200-character limit, and provide instant visual feedback.

---

## ✨ Key Features
- 📝 **Interactive Textarea** — Smooth, centered message box styled with custom focus borders and Google Fonts (`Agrave Pro`)
- 🎨 **Dynamic Focus States** — Card background subtly shifts color on focus (`#E5E7EB`) and resets on blur (`#F5F3FF`)
- 🔢 **Live Character Counter** — Real-time tracking (`0 typed / 200 max`) that updates immediately as you type, paste, or delete
- ✂️ **Automatic Character Cap** — Uses JavaScript `.slice(0, 200)` to prevent input from exceeding the 200-character maximum
- ⚠️ **Instant Limit Warning** — Displays a bold red alert banner the moment the 200-character limit is reached

---

## 🛠️ Tech Stack
**HTML5** · **Tailwind CSS (v2.2.19)** · **Google Fonts** · **JavaScript (DOM Manipulation)**

---

## 🔄 How It Works
`Focus Textarea` → `Type Message` → `Track Live Count` → `Enforce 200-Char Limit`

1. Click inside the **"Share Your Thoughts"** textarea to activate focus mode and highlight the card.
2. Type or paste your message to watch the live character counter update after every keystroke.
3. Once you reach **200 characters**, extra text is automatically trimmed and a warning alert appears until you delete characters back below the limit.

---

## 🌐 Live Demo
🔗 [View Live Project Here](https://hemamalini8.github.io/Message-Counter-purple/)

---

## 📂 Project Structure
```text
Message_Counter/
├── index.html      # Main structure, Google Fonts & Tailwind CSS styling
├── script.js       # Focus/blur effects, live counter & character limit logic
└── README.md       # Project documentation
```

---

Built with 💜 by **Hemamalini R**
