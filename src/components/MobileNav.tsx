import React, { useState } from 'react';

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Scheduling', href: '/#scheduling' },
    { label: 'Blog', href: '/#blog' },
    { label: 'Upcoming Events', href: '/#upcoming-events' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Team', href: '/#team' },
    { label: 'Contact', href: '/contact' },
];

const authLinks: NavLink[] = [
    { label: 'Browse Classes', href: '/browse-classes' },
    { label: 'Login', href: '/login' },
    { label: 'Sign Up', href: '/signup' },
];

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                class="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                aria-label="Toggle menu"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    ></path>
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden z-40">
                    <nav className="flex flex-col p-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors block"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="border-t border-border my-2"></div>
                        {authLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors block ${link.label === 'Sign Up'
                                        ? 'bg-gradient-to-r from-primary to-accent text-white font-semibold'
                                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
