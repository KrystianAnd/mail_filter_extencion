# Recruitment Message Highlighter

A Chrome extension that highlights Gmail messages based on keywords related to job recruitment outcomes.

## 📌 Version: 1.0

This extension colors messages in your Gmail inbox depending on their content:

- **Inbox view**: Messages are colored based on the subject line and preview snippet (because Gmail dynamically renders message content, making full analysis harder at this stage).
- **Opened message view**: Full content is analyzed and highlighted based on keyword detection.

### 🎨 Highlighting Colors

- 🟩 **Green**: Positive recruitment messages (e.g., job offers, interview invites)
- 🟥 **Red**: Negative responses (e.g., rejections)
- 🟦 **Blue**: Neutral/unknown messages

---

## 🚀 How to Install

1. Open Google Chrome.
2. Go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked**.
5. Select the `main` folder containing the extension files.

---

## ✏️ Customizing Keywords

If you want to change the keywords that determine whether a message is positive or negative:

1. Open the `content.js` file.
2. Modify the contents of these arrays:
   ```js
   const positiveWords = [ ... ];
   const negativeWords = [ ... ];
