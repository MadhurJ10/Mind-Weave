import React, { createContext } from 'react'

export const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
    const review = {
        "Mindweave_Reviews": [
            {
                "name": "Rebecca Down",
                "date": "2022-03-17",
                "review": "MindWeave transformed the way I organize my thoughts. It turned my messy ideas into clear, structured maps that made complex projects easier to manage. I now approach every challenge with confidence and clarity, saving hours each week.",
                "img": { "src": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", "alt": "Smiling young woman with long hair" }
            },
            {
                "name": "Francesca Cox",
                "date": "2021-12-26",
                "review": "Using MindWeave feels like having a personal assistant for my brain. The AI-driven maps made brainstorming faster, smoother, and surprisingly fun. It gave me focus when I was overwhelmed, and now it’s an essential tool for my studies.",
                "img": { "src": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe", "alt": "Confident woman in glasses smiling" }
            },
            {
                "name": "Sarah Robinson",
                "date": "2021-11-30",
                "review": "MindWeave helped me break down complex topics into simple, visual pathways. It’s like zooming out on my thoughts and instantly seeing the bigger picture. I’ve used it for research, projects, and even daily planning—it never disappoints.",
                "img": { "src": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", "alt": "Smiling woman with curly hair" }
            },
            {
                "name": "Helen Brown",
                "date": "2021-09-02",
                "review": "I used MindWeave to prepare for a major presentation, and it completely changed my process. Instead of scattered notes, I had a beautifully structured flow of ideas. My audience said it was the clearest talk I’d ever given.",
                "img": { "src": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", "alt": "Professional woman smiling in office" }
            },
            {
                "name": "Anonymous",
                "review": "As a developer, MindWeave has become my go-to tool for planning projects. The ability to visually connect APIs, features, and workflows makes collaboration so much easier. My team now uses it regularly to align ideas before coding begins.",
                "img": { "src": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61", "alt": "Male software developer working at desk" }
            },
            {
                "name": "Anonymous",
                "review": "MindWeave is more than just a concept-mapping tool—it’s a creativity booster. I’ve used it for hackathon planning, project design, and even personal goals. Every time, it helps me cut through chaos and build something meaningful with clarity.",
                "img": { "src": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", "alt": "Young man smiling outdoors" }
            }
        ]
    };

    return (
        <ReviewContext.Provider 
        value={{review}}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewProvider
