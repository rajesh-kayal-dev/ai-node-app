const { GoogleGenAI } = require ("@google/genai");
require('dotenv').config();


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});



const generatedContent  =  async (req, res) => {
    try {
        const prompt = req.body.prompt;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return res.status(200).json({
            status: true,
            result: response.text
        });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ error: "Failed to generate content" });
    }
};

module.exports = generatedContent;