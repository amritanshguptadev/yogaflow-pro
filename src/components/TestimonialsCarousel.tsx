import React, { useState } from 'react';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    email: string;
    title: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "YogaFlow Pro has completely transformed my yoga practice. The personalized recommendations are spot-on, and booking classes is now incredibly easy. I've discovered new instructors and styles I never would have found otherwise.",
        author: "Aarav Sharma",
        email: "aarav.sharma@gmail.com",
        title: "Yoga Enthusiast"
    },
    {
        id: 2,
        quote: "As someone with a busy schedule, I love how YogaFlow Pro learns my preferences and suggests classes at times that work for me. It's like having a personal yoga assistant in my pocket.",
        author: "Vihaan Gupta",
        email: "vihaan.gupta@gmail.com",
        title: "Corporate Professional"
    },
    {
        id: 3,
        quote: "The community aspect of YogaFlow Pro is amazing. I've connected with other practitioners, joined workshops, and grown so much in my yoga journey. This platform truly cares about holistic wellness.",
        author: "Ishaan Verma",
        email: "ishaan.verma@gmail.com",
        title: "Wellness Advocate"
    },
    {
        id: 4,
        quote: "I started as a complete beginner, and YogaFlow Pro's intake form and recommendations helped me feel welcome and supported every step of the way. The platform is so intuitive and encouraging!",
        author: "Ayaan Singh",
        email: "ayaan.singh@gmail.com",
        title: "Beginner Yogi"
    }
];

export default function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-xl border border-border p-8 md:p-12 shadow-sm">
                {/* Quote */}
                <div className="mb-6">
                    <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.021-5-7-5" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.021-5-7-5" />
                    </svg>
                    <p className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed">
                        "{currentTestimonial.quote}"
                    </p>
                </div>

                {/* Author */}
                <div className="mb-8 border-t border-border pt-6">
                    <p className="font-semibold text-foreground text-lg">{currentTestimonial.author}</p>
                    <p className="text-sm text-muted-foreground mb-1">{currentTestimonial.email}</p>
                    <p className="text-primary font-medium">{currentTestimonial.title}</p>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={goToPrevious}
                        className="p-2 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-muted'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goToNext}
                        className="p-2 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
