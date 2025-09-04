import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from '../lib/prisma.js';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const mapCreate = async (req, res) => {
    const { content, depth } = req.body

    const promptt = {
        //         3: `Generate a JSON array representing a concept map for the topic: {operating system}. The structure should include:

        // A main node with:
        // - id: 'main_topic'
        // - text: 'YOUR_TOPIC'
        // - depth: 0
        // - parent: null
        // - children: ['subtopic_a', 'subtopic_b', 'subtopic_c']
        // - color: 'color-orange'

        // Three subtopics:
        // - IDs: 'subtopic_a', 'subtopic_b', 'subtopic_c'
        // - depth: 1
        // - appropriate text labels related to the topic
        // - each having 2 children

        // Each of those 6 child nodes:
        // - IDs: 'sub_a_1', 'sub_a_2', 'sub_b_1', 'sub_b_2', 'sub_c_1', 'sub_c_2'
        // - depth: 2
        // - no children
        // - color: 'color-green'

        // The JSON must follow this exact structure and use these specific IDs and depth values.`,
        //         4: `Generate a JSON array representing a detailed, three-level concept map for the topic: "react".

        // The final output must be a single JSON array containing multiple node objects. The structure must be hierarchical and follow these exact specifications for each level:

        // 1. **Main Topic Node (Depth 0):**
        //    * id: 'main_topic'
        //    * text: 'YOUR_TOPIC'
        //    * depth: 0
        //    * parent: null
        //    * children: ['subtopic_a', 'subtopic_b', 'subtopic_c']
        //    * color: 'color-orange'

        // 2. **Primary Subtopic Nodes (Depth 1):**
        //    * Create three nodes with ids: 'subtopic_a', 'subtopic_b', and 'subtopic_c'
        //    * text: relevant high-level subtopic label for 'YOUR_TOPIC'
        //    * depth: 1
        //    * parent: 'main_topic'
        //    * children: ['sub_a_1', 'sub_a_2'] / ['sub_b_1', 'sub_b_2'] / ['sub_c_1', 'sub_c_2']
        //    * color: 'color-blue'

        // 3. **Secondary Subtopic Nodes (Depth 2):**
        //    * Six nodes: 'sub_a_1', 'sub_a_2', 'sub_b_1', 'sub_b_2', 'sub_c_1', 'sub_c_2'
        //    * text: more specific detail or example
        //    * depth: 2
        //    * parent: respective depth 1 ID
        //    * children: ['sub_a_1_1', 'sub_a_1_2'], etc.
        //    * color: 'color-purple'

        // 4. **Leaf Nodes (Depth 3):**
        //    * Twelve nodes: 'sub_a_1_1', 'sub_a_1_2', ..., 'sub_c_2_2'
        //    * text: granular detail or fact
        //    * depth: 3
        //    * parent: respective depth 2 ID
        //    * children: []
        //    * color: 'color-green'

        // Ensure the final output is a valid JSON array containing all 22 nodes (1 + 3 + 6 + 12) and strictly follows all specified ID, depth, parent, children, and color values.`,

        //         5: `You are an AI assistant designed to generate structured data for creating concept maps. Your task is to generate a list of nodes for a concept map about the central topic: "Nodejs".

        // The output must be a clean JSON array of objects, with no extra text or explanations.

        // Follow these rules for generation:

        // 1.  **Root Node:** The first node (id: "1") must be the central topic itself. Give it a strong, vibrant background color (e.g., an orange, blue, or deep purple).

        // 2.  **Primary Branches:** Identify 3 to 4 major sub-topics that branch directly from the root.
        //     * Assign each of these primary branches a unique and distinct pastel background color. These colors will define the "theme" for their children. For example, one branch could be light pink, another light blue, another light green.

        // 3.  **Child Nodes:** For each primary branch, generate 2 to 3 child nodes that are examples or components of that branch.
        //     * **Crucially, these child nodes MUST use the exact same background color as their parent primary branch.** This creates visual clusters.

        // 4.  **Formatting:** Each object in the array must have the following structure:
        //     { id: "sequential_number", data: { label: "Node Label" }, style: { background: "#hexcode" } }

        //     * The id must be a string that increments sequentially from "1".
        //     * The background must be a valid 6-digit hex color code.
        //     * Do not include the color or baseStyle properties in your output.

        // **Central Topic:** "Nodejs"`,
        //         6: `You are an AI assistant designed to generate structured data for creating concept maps. Your task is to generate a list of nodes for a concept map about the central topic: "${content}".

        // The output must be a clean JSON array of objects, with no surrounding text or explanations.

        // Follow these rules for generation:

        // 1.  **Total Nodes:** You must generate a JSON array containing **exactly 10 objects** (nodes) in total.

        // 2.  **Structure:** The 10 nodes must be structured as follows:
        //     * **1 Root Node:** The central topic itself.
        //     * **3 Primary Branch Nodes:** The main sub-topics.
        //     * **6 Child Nodes:** Exactly 2 child nodes for each of the 3 primary branches.

        // 3.  **Color Coding:**
        //     * The root node must have a strong, vibrant background color.
        //     * Each of the 3 primary branches must have its own unique and distinct pastel background color.
        //     * The child nodes **MUST use the exact same background color** as their parent primary branch.

        // 4.  **Formatting:** Each object in the array must be a simple, flat object with exactly three key-value pairs:
        //     * "id": A string that increments sequentially from "1" to "10".
        //     * "label": A string for the node's title.
        //     * "background": A string containing a 6-digit hex color code.

        //     The required structure is: { "id": "...", "label": "...", "background": "..." }.

        // **Central Topic:** "${content}"`,
        3: `Generate a concept map on the topic of "${content}" for my "Mind Weave" application. The output must be a single JSON object.

Follow these rules precisely:
1.  **JSON Structure:** The top-level keys should be sequential integers starting from '1'. The value for each key must be an object with three properties: id (a string version of the key), label (the concept name as a string), and background (a hex color code as a string).
2.  **Hierarchy:**
    * The first item (key '1') should be the central topic.
    * Identify 3-4 main sub-topics that branch from the central topic.
    * For each main sub-topic, provide 2-3 specific concepts or examples.
3.  **Color Coding:**
    * The central topic (item '1') must have a unique, vibrant background color (e.g., a shade of pink, red, or purple).
    * All direct sub-topics and their corresponding specific concepts must share the same background color. Each group of sub-topics should have a color that is distinct from the other groups and from the central topic.

**Example for context (on the topic "React"):**
{
  "1": { "id": "1", "label": "React", "background": "#FF4081" },
  "2": { "id": "2", "label": "Components", "background": "#B2DFDB" },
  "3": { "id": "3", "label": "State Management", "background": "#FFCC80" },
  "4": { "id": "4", "label": "Lifecycle", "background": "#A7FFEB" },
  "5": { "id": "5", "label": "Functional Components", "background": "#B2DFDB" },
  "6": { "id": "6", "label": "Class Components", "background": "#B2DFDB" },
  "7": { "id": "7", "label": "Redux", "background": "#FFCC80" },
  "8": { "id": "8", "label": "Context API", "background": "#FFCC80" },
  "9": { "id": "9", "label": "Mounting", "background": "#A7FFEB" },
  "10": { "id": "10", "label": "Updating", "background": "#A7FFEB" }
}

Now, generate the JSON object for the topic: **${content}**.`
        , 4: `Generate a concept map on the topic of "${content}" for my "Mind Weave" application. The output must be a single JSON object containing exactly 22 nodes.

Follow these rules precisely:

JSON Structure: The top-level keys must be sequential integers from '1' to '22'. The value for each key must be an object with three properties: id (a string version of the key), label (the concept name as a string), and background (a hex color code as a string).

Hierarchy and Node Count: The map must be structured with a specific hierarchy to ensure a total of 22 nodes:

Item '1': The central topic.

Items '2', '3', '4': Exactly 3 main sub-topics that branch from the central topic.

Items '5' - '22': For each of the 3 main sub-topics, provide exactly 6 specific concepts or examples. This will create three groups of six specific concepts.

Color Coding:

The central topic (item '1') must have a unique, vibrant background color (e.g., a shade of pink, red, or purple).

The first main sub-topic (item '2') and its six specific concepts must all share one distinct color.

The second main sub-topic (item '3') and its six specific concepts must all share a second distinct color.

The third main sub-topic (item '4') and its six specific concepts must all share a third distinct color.`
    };


    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        // console.log(promptt[ 6 ])
        const result = await model.generateContent(promptt[ depth ]);
        //7 is for 3 depth , 8 is for 4th depth
        const response = result.response
        // console.log(response)
        return res.json({
            depth,
            msg: `${content} mind map`,
            text: response.candidates[ 0 ].content.parts[ 0 ].text
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

export const mapIntro = async (req, res) => {
    const { content } = req.body;

    const introPrompt = `You are MindWeave, an AI guide. Write a short, engaging introduction (3–4 sentences) about the topic: "${content}".  
- Start with a simple overview in plain language.  
- Mention 2–3 key subtopics or aspects in a clear, list-like style.  
- End with a curious question or suggestion to explore further.  
Keep it concise and direct, no extra formatting.  
`;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(introPrompt);
        const response = result.response
        return res.json({
            msg: "worked intro",
            text: response.candidates[ 0 ].content.parts[ 0 ].text
        })
    } catch (error) {
        res.json({
            msg: "error hai intro mai",
            error
        })
    }
}

export const mapSave = async (req, res) => { //Map Save endpoint (api)
    const { title, data, depth } = req.body
    const { userId, user } = req

    try {
        const save = await prisma.map.create({
            data: {

                userId,
                title,
                data,
                depth
            }
        })
        return res.json({
            msg: 'working',
            save,
            user
        })
    } catch (error) {
        console.log(error)
        return res.json({
            msg: "not saving",
            error
        })
    }


}

export const mapGet = async (req, res) => {
    const { userId } = req

    try {
        const getMap = await prisma.map.findMany({
            where: { userId: userId }
        })
        const getdata = getMap.data
        return res.json({
            msg: "here is your map",
            // getdata
            getMap
        })
    } catch (error) {
        return res.json({
            msg: "not getting map",
            error
        })
    }
}

export const mapDelete = async (req, res) => {
    const { id } = req.body
    const { userId } = req

    try {
        const delMap = await prisma.map.delete({
            where: { id: id }
        })

        return res.json({
            msg:"deleted",
            delMap
        })
    } catch (error) {

    }
}