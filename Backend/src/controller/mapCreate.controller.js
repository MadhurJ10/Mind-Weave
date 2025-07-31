import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const mapCreate = async (req, res) => {
    const { content, depth } = req.body

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
                const prompt = `
            You are an expert system designed to create structured mind map data. Your task is to generate a hierarchical mind map for a given topic with a specified depth.

        Instructions:

        Read the user's {TOPIC:"react"} and {DEPTH:3}.

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

        The mind map should reach the user-specified {{DEPTH:4} where logically possible.`
//         const prompt = `Generate a JSON array representing a concept map for the topic: "react". The structure should include:

// A main node with id: 'main_topic', text: 'YOUR_TOPIC', depth: 0, parent: null, and children: ['subtopic_a', 'subtopic_b', 'subtopic_c'], and color: 'color-orange'.

// Three subtopics (subtopic_a, subtopic_b, subtopic_c) with depth: 1, appropriate text labels related to the topic, and each having 2 children.

// Each of those 6 child nodes (sub_a_1, sub_a_2, sub_b_1, etc.) should be depth: 2, have no children, and have color 'color-green'.

// The JSON must follow this exact structure and use these specific IDs and depth values.`
        const result = await model.generateContent(prompt);
        const response = result.response
        // console.log(response)
        return res.json({
            msg: "worked",
            response
        })
    } catch (error) {
        res.json({
            msg:"error hai map mai",
            error
        })
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