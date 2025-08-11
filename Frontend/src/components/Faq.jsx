import React, { useState } from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "What is MindWeave?",
      answer: "MindWeave is an AI-powered concept mapping tool that helps you organize your ideas visually."
    },
    {
      question: "How do I use it?",
      answer: "Simply enter your topic, and the AI will generate a structured map with connected nodes."
    },
    {
      question: "Can I customize my map?",
      answer: "Yes! You can change colors, shapes, and layout, and even export your map."
    }
  ];

  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="w-[60rem] mx-auto mt-10 space-y-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-500 pb-2">
          <button
            className="flex justify-between items-center w-full text-left text-lg font-medium"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="text-xl">{openStates[index] ? "−" : "+"}</span>
          </button>
          {openStates[index] && (
            <p className="mt-2 text-gray-300">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
