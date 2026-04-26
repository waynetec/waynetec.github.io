const communicationOptions = {
    basics: [
        { text: "Hello", color: "blue", emoji: "👋" },
        { text: "Yes", color: "green", emoji: "✅" },
        { text: "No", color: "red", emoji: "❌" },
        { text: "Please", color: "yellow", emoji: "🙏" },
        { text: "Thank you", color: "purple", emoji: "😊" },
        { text: "I want", color: "orange", emoji: "🤲" },
        { text: "Help", color: "pink", emoji: "🆘" },
    ],
    feelings: [
        { text: "Happy", color: "teal", emoji: "😄" },
        { text: "Sad", color: "blue", emoji: "😢" },
        { text: "Angry", color: "red", emoji: "😣" },
        { text: "Tired", color: "gray", emoji: "😴" },
        { text: "Scared", color: "purple", emoji: "😨" },
        { text: "Sick", color: "red", emoji: "🤒" },
    ],
    needs: [
        { text: "Drink", color: "indigo", emoji: "🥤" },
        { text: "Eat", color: "rose", emoji: "🍽️" },
        { text: "Diaper", color: "cyan", emoji: "🩲" },
        { text: "Milk", color: "gray", emoji: "🥛" },
        { text: "Snack", color: "orange", emoji: "🍎" },
        { text: "Blanket", color: "teal", emoji: "🛌" },
    ],
    activities: [
        { text: "Play", color: "lime", emoji: "🎲" },
        { text: "Sleep", color: "blue", emoji: "🛌" },
        { text: "Bath", color: "cyan", emoji: "🛁" },
        { text: "Book", color: "green", emoji: "📖" },
        { text: "Toy", color: "yellow", emoji: "🧸" },
        { text: "Music", color: "indigo", emoji: "🎵" },
    ],
    other: [
        { text: "Outside", color: "green", emoji: "🌳" },
        { text: "Hug", color: "pink", emoji: "🤗" },
        { text: "Quiet", color: "gray", emoji: "🤫" },
        { text: "More", color: "lime", emoji: "➕" },
        { text: "All done", color: "gray", emoji: "🙅" },
    ],
};

// Category definitions
const categories = [
    { id: "basics", label: "Basic" },
    { id: "feelings", label: "Feelings" },
    { id: "needs", label: "Needs" },
    { id: "activities", label: "Activities" },
    { id: "other", label: "Other" },
];

let currentCategory = "basics";

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

function createButtons(options) {
    const board = document.getElementById('communicationBoard');
    board.innerHTML = '';
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'comm-button';
        button.style.backgroundColor = getColor(option.color);
        
        button.innerHTML = `
            <span class="emoji">${option.emoji}</span>
            <span class="label">${option.text}</span>
        `;
        
        button.addEventListener('click', () => speakText(option.text));
        button.addEventListener('touchstart', (e) => {
            e.preventDefault();
            speakText(option.text);
        });
        
        board.appendChild(button);
    });
}

function getColor(colorName) {
    const colors = {
        blue: '#3b82f6',
        green: '#22c55e',
        red: '#ef4444',
        yellow: '#eab308',
        purple: '#a855f7',
        orange: '#f97316',
        pink: '#ec4899',
        teal: '#14b8a6',
        gray: '#6b7280',
        indigo: '#6366f1',
        rose: '#f43f5e',
        cyan: '#06b6d4',
        lime: '#84cc16',
        white: '#94a3b8',
    };
    return colors[colorName] || colors.blue;
}

function showCategory(catId) {
    currentCategory = catId;
    const options = communicationOptions[catId] || [];
    createButtons(options);
}

function renderCategories() {
    const catContainer = document.getElementById('categories');
    catContainer.innerHTML = '';
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-button';
        if (cat.id === currentCategory) {
            btn.classList.add('active');
        }
        btn.textContent = cat.label;
        btn.addEventListener('click', () => showCategory(cat.id));
        catContainer.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    showCategory('basics');
});