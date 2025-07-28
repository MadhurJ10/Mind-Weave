import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const mapCreate = async (req, res) => {
    const { content, depth } = req.body

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `
    You are an expert system designed to create structured mind map data. Your task is to generate a hierarchical mind map for a given topic with a specified depth.

Instructions:

Read the user's {{TOPIC:"operating system"}} and {{DEPTH:3}}.

Generate a JSON array of objects representing the mind map.

The final output must be only the JSON array, with no introductory text, explanations, or markdown formatting.

JSON Object Schema:
Each object in the array must have the following keys:

id: A unique string identifier (e.g., "main_topic", "sub_a", "sub_a_1").

text: The string label for the node.

depth: A 0-indexed integer representing the level in the hierarchy.

parent: The id of the parent node. The root node must have parent: null.

children: An array of strings, where each string is the id of a direct child node. Leaf nodes must have children: [].

color: A string representing the color class. Assign colors based on depth:

depth 0: "color-orange"

depth 1: "color-blue"

depth 2: "color-green"

depth 3: "color-light-purple"

depth 4: "color-yellow"

Rules:

The hierarchy must be logical and consistent. A child's depth must be its parent's depth + 1.

The parent and children properties must be consistent across all nodes.

The mind map should reach the user-specified {{DEPTH:3} where logically possible.`
        const result = await model.generateContent(prompt);
        const response = result.response.
            console.log(response)
        return res.json({
            msg: "worked",
            response
        })
    } catch (error) {
        console.log('error')
    }
    // if (depth === 5) {
    //     return res.json({
    //         msg: "5 depth"
    //         , content
    //     })
    // }
    // else if (depth === 4) {
    //     return res.json({
    //         msg: "depth 4"
    //         , content
    //     })
    // }

    // else {
    //     return res.json({
    //         msg: "depth 3"
    //         , content
    //     })
    // }
}