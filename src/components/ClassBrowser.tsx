import React, { useState } from 'react';

interface YogaClass {
    id: number;
    name: string;
    instructor: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    type: string;
    time: string;
    duration: number;
    date: string;
    spots_available: number;
    max_spots: number;
    price: number;
    description: string;
    image_color: string;
}

const classes: YogaClass[] = [
    {
        id: 1,
        name: 'Morning Flow Vinyasa',
        instructor: 'Aarav Sharma',
        level: 'Intermediate',
        type: 'Vinyasa Flow',
        time: '6:00 AM',
        duration: 60,
        date: '2026-04-16',
        spots_available: 8,
        max_spots: 20,
        price: 499,
        description: 'Dynamic flow to energize your morning and set positive intentions',
        image_color: 'from-green-400 to-green-600'
    },
    {
        id: 2,
        name: 'Gentle Hatha Yoga',
        instructor: 'Vihaan Gupta',
        level: 'Beginner',
        type: 'Hatha',
        time: '9:00 AM',
        duration: 75,
        date: '2026-04-16',
        spots_available: 12,
        max_spots: 15,
        price: 399,
        description: 'Perfect for beginners. Build strength and flexibility at your own pace',
        image_color: 'from-blue-400 to-blue-600'
    },
    {
        id: 3,
        name: 'Midday Stress Relief',
        instructor: 'Ishaan Verma',
        level: 'Beginner',
        type: 'Yin Yoga',
        time: '12:00 PM',
        duration: 45,
        date: '2026-04-16',
        spots_available: 5,
        max_spots: 15,
        price: 349,
        description: 'Restore balance during your lunch break with gentle, restorative poses',
        image_color: 'from-purple-400 to-purple-600'
    },
    {
        id: 4,
        name: 'Power Yoga Challenge',
        instructor: 'Ayaan Singh',
        level: 'Advanced',
        type: 'Power Yoga',
        time: '5:30 PM',
        duration: 60,
        date: '2026-04-16',
        spots_available: 3,
        max_spots: 20,
        price: 599,
        description: 'High-energy workout combining strength, cardio, and flexibility',
        image_color: 'from-orange-400 to-orange-600'
    },
    {
        id: 5,
        name: 'Evening Restorative',
        instructor: 'Arnav Mehta',
        level: 'All Levels',
        type: 'Restorative',
        time: '7:00 PM',
        duration: 90,
        date: '2026-04-16',
        spots_available: 10,
        max_spots: 18,
        price: 449,
        description: 'Wind down and relax with deep stretches and guided relaxation',
        image_color: 'from-indigo-400 to-indigo-600'
    },
    {
        id: 6,
        name: 'Kundalini Awakening',
        instructor: 'Reyansh Agarwal',
        level: 'Intermediate',
        type: 'Kundalini',
        time: '6:30 PM',
        duration: 75,
        date: '2026-04-17',
        spots_available: 6,
        max_spots: 16,
        price: 529,
        description: 'Spiritual practice combining movement, breathing, and meditation',
        image_color: 'from-pink-400 to-pink-600'
    }
];

const levelColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-red-100 text-red-800'
};

export default function ClassBrowser() {
    const [selectedLevel, setSelectedLevel] = useState<string>('All');
    const [selectedType, setSelectedType] = useState<string>('All');
    const [bookedClasses, setBookedClasses] = useState<Set<number>>(new Set());

    const types = ['All', ...new Set(classes.map(c => c.type))];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    const filtered = classes.filter(c => {
        const levelMatch = selectedLevel === 'All' || c.level === selectedLevel;
        const typeMatch = selectedType === 'All' || c.type === selectedType;
        return levelMatch && typeMatch;
    });

    const handleBook = (classId: number) => {
        const newBooked = new Set(bookedClasses);
        if (newBooked.has(classId)) {
            newBooked.delete(classId);
        } else {
            newBooked.add(classId);
        }
        setBookedClasses(newBooked);
    };

    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div class="mb-12 bg-secondary/30 rounded-xl p-6 sm:p-8 border border-border">
                <h2 class="text-xl font-heading font-semibold text-foreground mb-6">Filter Classes</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Level Filter */}
                    <div>
                        <label class="block text-sm font-semibold text-foreground mb-3">Experience Level</label>
                        <div class="space-y-2">
                            {levels.map(level => (
                                <label key={level} class="flex items-center p-3 border border-border rounded-lg hover:bg-background/50 cursor-pointer transition-colors">
                                    <input
                                        type="radio"
                                        name="level"
                                        value={level}
                                        checked={selectedLevel === level}
                                        onChange={(e) => setSelectedLevel(e.target.value)}
                                        class="rounded-full border-input"
                                    />
                                    <span class="ml-3 font-medium text-foreground">{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Type Filter */}
                    <div>
                        <label class="block text-sm font-semibold text-foreground mb-3">Class Type</label>
                        <div class="space-y-2">
                            {types.map(type => (
                                <label key={type} class="flex items-center p-3 border border-border rounded-lg hover:bg-background/50 cursor-pointer transition-colors">
                                    <input
                                        type="radio"
                                        name="type"
                                        value={type}
                                        checked={selectedType === type}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                        class="rounded-full border-input"
                                    />
                                    <span class="ml-3 font-medium text-foreground">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <p class="text-sm text-muted-foreground mt-6">
                    Showing {filtered.length} of {classes.length} classes
                </p>
            </div>

            {/* Classes Grid */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(yogaClass => (
                    <div key={yogaClass.id} class="bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                        {/* Card Header Image */}
                        <div class={`h-32 bg-gradient-to-br ${yogaClass.image_color} relative overflow-hidden`}>
                            <div class="absolute top-4 right-4">
                                <span class={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[yogaClass.level]}`}>
                                    {yogaClass.level}
                                </span>
                            </div>
                            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-16"></div>
                        </div>

                        {/* Card Content */}
                        <div class="p-6 space-y-4">
                            {/* Class Title */}
                            <div>
                                <h3 class="text-lg font-heading font-semibold text-foreground mb-1">{yogaClass.name}</h3>
                                <p class="text-sm text-primary font-medium">with {yogaClass.instructor}</p>
                            </div>

                            {/* Class Details */}
                            <div class="space-y-2 text-sm">
                                <div class="flex items-center gap-2 text-muted-foreground">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.99 5V1h-1v4H8.5V1h-1v4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.5V1h-1v4H12zm8 16H4V10h16v11z" />
                                    </svg>
                                    <span>{new Date(yogaClass.date).toLocaleDateString()} at {yogaClass.time}</span>
                                </div>
                                <div class="flex items-center gap-2 text-muted-foreground">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.99 5V1h-1v4H8.5V1h-1v4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.5V1h-1v4H12zm-6 8h12v6H5.99z" />
                                    </svg>
                                    <span>{yogaClass.duration} minutes</span>
                                </div>
                                <div class="flex items-center gap-2 text-muted-foreground">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                    </svg>
                                    <span>{yogaClass.type}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p class="text-sm text-muted-foreground">{yogaClass.description}</p>

                            {/* Availability */}
                            <div class="py-3 border-t border-border">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-xs font-semibold text-foreground">Spots Available</span>
                                    <span class="text-xs font-bold text-primary">{yogaClass.spots_available}/{yogaClass.max_spots}</span>
                                </div>
                                <div class="w-full h-2 bg-border rounded-full overflow-hidden">
                                    <div
                                        class="h-full bg-gradient-to-r from-primary to-accent transition-all"
                                        style={{ width: `${(yogaClass.spots_available / yogaClass.max_spots) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Price and Book Button */}
                            <div class="flex items-center justify-between pt-2">
                                <div class="text-2xl font-heading font-bold text-primary">₹{yogaClass.price}</div>
                                <button
                                    onClick={() => handleBook(yogaClass.id)}
                                    class={`px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${bookedClasses.has(yogaClass.id)
                                            ? 'bg-accent text-white shadow-lg'
                                            : 'bg-primary text-white hover:bg-accent'
                                        }`}
                                >
                                    {bookedClasses.has(yogaClass.id) ? '✓ Booked' : 'Book Now'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filtered.length === 0 && (
                <div class="text-center py-16">
                    <svg class="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
                    </svg>
                    <h3 class="text-lg font-heading font-semibold text-foreground mb-2">No classes found</h3>
                    <p class="text-muted-foreground">Try adjusting your filters to find more classes</p>
                </div>
            )}

            {/* Booked Classes Summary */}
            {bookedClasses.size > 0 && (
                <div class="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-accent text-white p-6 rounded-xl shadow-xl max-w-xs">
                    <h4 class="font-heading font-bold mb-2">Bookings Summary</h4>
                    <p class="text-sm mb-4">{bookedClasses.size} class{bookedClasses.size !== 1 ? 'es' : ''} booked</p>
                    <button class="w-full py-2 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                        Complete Booking
                    </button>
                </div>
            )}
        </div>
    );
}
