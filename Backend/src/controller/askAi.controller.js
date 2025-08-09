import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askAi = async (req, res) => {
    const word = req.params.word;
    const prompt = `You are an assistant explaining concepts in a concept map. 
The concept is "${word}".  
Follow these rules:  
1. Provide a short, clear explanation between 50 and 75 words.   
2. Start with a concise definition in the first sentence.  
3. If needed, include one example or analogy in simple language.  
4. Avoid overly technical terms unless essential, and explain them if used.  
5. Maintain an educational, beginner-friendly tone.  
6. No bullet points or lists—use plain paragraphs only.

Now explain the concept "${word}".`;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(prompt);

        // Extract just the text response
        const outputText = result.response.text();

        return res.status(200).json({
            msg: "AI response generated successfully",
            response: outputText
        });
    } catch (error) {
        console.error("Error generating AI response:", error);
        return res.status(500).json({
            msg: "Error generating AI response",
            error: error.message
        });
    }
};
