import { motion } from "framer-motion";
import { Edit, Share2, FileText, Cpu } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Enter Your Topic",
        desc: "Type your main idea or concept — no need to overthink it.",
        icon: FileText
    },
    {
        id: 2,
        title: "AI Generates Your Map",
        desc: "Our AI instantly creates a structured, connected mind map.",
        icon: Cpu
    },
    {
        id: 3,
        title: "Customize & Style",
        desc: "Edit colors, shapes, and connections — like in Excalidraw.",
        icon: Edit
    },
    {
        id: 4,
        title: "Export or Share",
        desc: "Download as PNG/PDF or share with your team.",
        icon: Share2
    }
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-black text-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    How It Works
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.id}
                                className="flex flex-col items-center relative"
                            >
                                {/* Card */}
                                <motion.div
                                    className="p-6 rounded-2xl text-center shadow-lg border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] max-w-xs"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Icon className="w-12 h-12 mx-auto text-white mb-6" />
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-400">{step.desc}</p>
                                </motion.div>

                                {/* Connector SVG */}
                                {index < steps.length - 1 && (
                                    <svg
                                        className="hidden md:block absolute right-[-100px] top-1/2 -translate-y-1/2"
                                        width="200"
                                        height="80"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.2)"
                                        strokeWidth="2"
                                    >
                                        <path d="M0 40 Q100 0, 200 40" />
                                    </svg>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
