import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const mapCreate = async (req, res) => {
    const { content, depth } = req.body

    const promptt = {
        3: `Generate a JSON array representing a concept map for the topic: {operating system}. The structure should include:

A main node with:
- id: 'main_topic'
- text: 'YOUR_TOPIC'
- depth: 0
- parent: null
- children: ['subtopic_a', 'subtopic_b', 'subtopic_c']
- color: 'color-orange'

Three subtopics:
- IDs: 'subtopic_a', 'subtopic_b', 'subtopic_c'
- depth: 1
- appropriate text labels related to the topic
- each having 2 children

Each of those 6 child nodes:
- IDs: 'sub_a_1', 'sub_a_2', 'sub_b_1', 'sub_b_2', 'sub_c_1', 'sub_c_2'
- depth: 2
- no children
- color: 'color-green'

The JSON must follow this exact structure and use these specific IDs and depth values.`,
        4: `Generate a JSON array representing a detailed, three-level concept map for the topic: "react".

The final output must be a single JSON array containing multiple node objects. The structure must be hierarchical and follow these exact specifications for each level:

1. **Main Topic Node (Depth 0):**
   * id: 'main_topic'
   * text: 'YOUR_TOPIC'
   * depth: 0
   * parent: null
   * children: ['subtopic_a', 'subtopic_b', 'subtopic_c']
   * color: 'color-orange'

2. **Primary Subtopic Nodes (Depth 1):**
   * Create three nodes with ids: 'subtopic_a', 'subtopic_b', and 'subtopic_c'
   * text: relevant high-level subtopic label for 'YOUR_TOPIC'
   * depth: 1
   * parent: 'main_topic'
   * children: ['sub_a_1', 'sub_a_2'] / ['sub_b_1', 'sub_b_2'] / ['sub_c_1', 'sub_c_2']
   * color: 'color-blue'

3. **Secondary Subtopic Nodes (Depth 2):**
   * Six nodes: 'sub_a_1', 'sub_a_2', 'sub_b_1', 'sub_b_2', 'sub_c_1', 'sub_c_2'
   * text: more specific detail or example
   * depth: 2
   * parent: respective depth 1 ID
   * children: ['sub_a_1_1', 'sub_a_1_2'], etc.
   * color: 'color-purple'

4. **Leaf Nodes (Depth 3):**
   * Twelve nodes: 'sub_a_1_1', 'sub_a_1_2', ..., 'sub_c_2_2'
   * text: granular detail or fact
   * depth: 3
   * parent: respective depth 2 ID
   * children: []
   * color: 'color-green'

Ensure the final output is a valid JSON array containing all 22 nodes (1 + 3 + 6 + 12) and strictly follows all specified ID, depth, parent, children, and color values.`,

5:`You are an AI assistant designed to generate structured data for creating concept maps. Your task is to generate a list of nodes for a concept map about the central topic: "Nodejs".

The output must be a clean JSON array of objects, with no extra text or explanations.

Follow these rules for generation:

1.  **Root Node:** The first node (id: "1") must be the central topic itself. Give it a strong, vibrant background color (e.g., an orange, blue, or deep purple).

2.  **Primary Branches:** Identify 3 to 4 major sub-topics that branch directly from the root.
    * Assign each of these primary branches a unique and distinct pastel background color. These colors will define the "theme" for their children. For example, one branch could be light pink, another light blue, another light green.

3.  **Child Nodes:** For each primary branch, generate 2 to 3 child nodes that are examples or components of that branch.
    * **Crucially, these child nodes MUST use the exact same background color as their parent primary branch.** This creates visual clusters.

4.  **Formatting:** Each object in the array must have the following structure:
    { id: "sequential_number", data: { label: "Node Label" }, style: { background: "#hexcode" } }

    * The id must be a string that increments sequentially from "1".
    * The background must be a valid 6-digit hex color code.
    * Do not include the color or baseStyle properties in your output.

**Central Topic:** "Nodejs"`,
6:`You are an AI assistant designed to generate structured data for creating concept maps. Your task is to generate a list of nodes for a concept map about the central topic: "operating system".

The output must be a clean JSON array of objects, with no surrounding text or explanations.

Follow these rules for generation:

1.  **Total Nodes:** You must generate a JSON array containing **exactly 10 objects** (nodes) in total.

2.  **Structure:** The 10 nodes must be structured as follows:
    * **1 Root Node:** The central topic itself.
    * **3 Primary Branch Nodes:** The main sub-topics.
    * **6 Child Nodes:** Exactly 2 child nodes for each of the 3 primary branches.

3.  **Color Coding:**
    * The root node must have a strong, vibrant background color.
    * Each of the 3 primary branches must have its own unique and distinct pastel background color.
    * The child nodes **MUST use the exact same background color** as their parent primary branch.

4.  **Formatting:** Each object in the array must be a simple, flat object with exactly three key-value pairs:
    * "id": A string that increments sequentially from "1" to "10".
    * "label": A string for the node's title.
    * "background": A string containing a 6-digit hex color code.

    The required structure is: { "id": "...", "label": "...", "background": "..." }.

**Central Topic:** "operating system"`
    };


    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        // const prompt = `
        //     You are an expert system designed to create structured mind map data. Your task is to generate a hierarchical mind map for a given topic with a specified depth.

        // Instructions:

        // Read the user's {TOPIC:"react"} and {DEPTH:4}.

        // Generate a JSON array of objects representing the mind map.

        // The final output must be only the JSON array, with no introductory text, explanations, or markdown formatting.

        // JSON Object Schema:
        // Each object in the array must have the following keys:

        // id: A unique string identifier (e.g., "main_topic", "sub_a", "sub_a_1").

        // text: The string label for the node.

        // depth: A 0-indexed integer representing the level in the hierarchy.

        // parent: The id of the parent node. The root node must have parent: null.

        // children: An array of strings, where each string is the id of a direct child node. Leaf nodes must have children: [].

        // color: A string representing the color class. Assign colors based on depth:

        // depth 0: "color-orange"

        // depth 1: "color-blue"

        // depth 2: "color-green"

        // depth 3: "color-light-purple"

        // depth 4: "color-yellow"

        // Rules:

        // The hierarchy must be logical and consistent. A child's depth must be its parent's depth + 1.

        // The parent and children properties must be consistent across all nodes.

        // The mind map should reach the user-specified {{DEPTH:4} where logically possible.`
        //         const prompt = `Generate a JSON array representing a concept map for the topic: "react". The structure should include:

        // A main node with id: 'main_topic', text: 'YOUR_TOPIC', depth: 0, parent: null, and children: ['subtopic_a', 'subtopic_b', 'subtopic_c'], and color: 'color-orange'.

        // Three subtopics (subtopic_a, subtopic_b, subtopic_c) with depth: 1, appropriate text labels related to the topic, and each having 2 children.

        // Each of those 6 child nodes (sub_a_1, sub_a_2, sub_b_1, etc.) should be depth: 2, have no children, and have color 'color-green'.

        // The JSON must follow this exact structure and use these specific IDs and depth values.`
        console.log(promptt[ 6 ])
        const result = await model.generateContent(promptt[ 6 ]);
        const response = result.response
        // console.log(response)
        return res.json({
            msg: "worked",
            response
        })
    } catch (error) {
        res.json({
            msg: "error hai map mai",
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