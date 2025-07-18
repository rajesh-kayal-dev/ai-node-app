# ✨ Gemini 2.5 Text Generation API - Node.js Project

This is a beginner-friendly Node.js project that integrates the **Gemini 2.5 model** from Google AI to generate text from a prompt using the official Gemini SDK.

---

## 🚀 Features

- Uses Google AI's **Gemini 2.5** model
- Cleanly structured with separate routes and logic directories
- Beginner-friendly structure to help you learn while building
- API to generate text responses from user input

---

## 🗂️ Project Structure

gemini-node-app/
├── node_modules/
├── routes/
│ └── generateText.js
├── controllers/
│ └── textGenerator.js
├── .env
├── app.js
├── package.json
└── README.md

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies

npm install
3. Create a .env file
API_KEY=your_gemini_api_key_here
📝 Replace your_gemini_api_key_here with your actual API key from Google AI Studio or Developer Console.

▶️ Run the Server

node app.js
Visit http://localhost:3000/generate with a POST request to test the API.

📬 API Usage
POST /generate

Request Body (JSON):


{
  "prompt": "How does AI work?"
}
Response:


{
  "response": "AI works by using machine learning algorithms..."
}
📚 Learn More
Gemini API Documentation

Node.js Docs

🧑‍💻 Author
Rajesh Kayal
💻 Backend Developer 
🌐 GitHub

📄 License
This project is open source and available under the MIT License.

---

Let me know if you want the `LICENSE` file, a Postman collection, or if you're deploying it (like on Render or Vercel).
