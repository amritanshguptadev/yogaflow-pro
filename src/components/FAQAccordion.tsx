import React, { useState } from 'react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "How does YogaFlow Pro personalize class recommendations?",
        answer: "YogaFlow Pro uses an intelligent algorithm that learns from your intake form responses, booking history, and feedback. It considers your experience level, goals, preferred class types, and available times to suggest classes that are perfect for you."
    },
    {
        id: 2,
        question: "Can I book classes in advance?",
        answer: "Yes! You can browse upcoming classes and book them as far in advance as they're available. Our platform shows real-time class availability, and you can manage all your bookings in one convenient dashboard."
    },
    {
        id: 3,
        question: "What types of yoga classes are available?",
        answer: "We offer a wide variety of yoga styles including Vinyasa Flow, Hatha, Restorative, Hot Yoga, Yin Yoga, Kundalini, and Power Yoga. Each class is taught by certified instructors, and you can filter by difficulty level and duration."
    },
    {
        id: 4,
        question: "Is YogaFlow Pro suitable for beginners?",
        answer: "Absolutely! YogaFlow Pro is designed for yogis at all levels. Our intake form helps us understand you're a beginner, and we'll recommend beginner-friendly classes with experienced instructors who specialize in introducing newcomers to yoga."
    },
    {
        id: 5,
        question: "How do I manage my bookings?",
        answer: "Your bookings are displayed in your dashboard where you can view class details, set reminders, reschedule, or cancel. You can also sync your bookings with your personal calendar for easy planning."
    },
    {
        id: 6,
        question: "Is my personal information secure?",
        answer: "Yes, your privacy and security are our top priorities. We use industry-standard encryption and follow strict data protection guidelines. Please review our Privacy Policy for detailed information about how we handle your data."
    }
];

export default function FAQAccordion() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="space-y-3">
            {faqs.map((faq) => (
                <div key={faq.id} className="border border-border rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-secondary/20 transition-colors text-left"
                    >
                        <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                        <svg
                            className={`w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${openId === faq.id ? 'transform rotate-180' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                    {openId === faq.id && (
                        <div className="px-6 py-4 bg-secondary/10 border-t border-border">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
