document.addEventListener('DOMContentLoaded', () => {
    
    // Simulate dynamic feed items for the MySky mockup
    const feedContainer = document.getElementById('feed-demo');
    if (!feedContainer) return;

    const mockData = [
        {
            type: "Workflow Idea",
            time: "2 mins ago",
            content: "Based on your recent voice note about 'Infinite Canvas UIs', I generated a rough React prototype. Want me to refine it?"
        },
        {
            type: "Draft Tweet",
            time: "1 hour ago",
            content: "Extracted from your journal: 'Local-first AI isn't just about privacy, it's about ownership of the mind.' — Should I post this?"
        },
        {
            type: "Audio Processing",
            time: "3 hours ago",
            content: "I've cleaned up the background noise and generated a minimal video for your 5-minute audio ramble. Ready for review."
        }
    ];

    function createFeedItem(data, index) {
        const item = document.createElement('div');
        item.className = 'feed-item';
        
        item.innerHTML = `
            <div class="feed-item-header">
                <span>${data.type}</span>
                <span>${data.time}</span>
            </div>
            <div class="feed-item-content">
                ${data.content}
            </div>
            <div class="feed-actions">
                <button class="action-btn like" onclick="this.innerHTML='✓ Approved'; this.style.pointerEvents='none';">👍 Approve & Publish</button>
                <button class="action-btn comment">💬 Tweak</button>
                <button class="action-btn dislike">🗑️ Discard</button>
            </div>
        `;

        return item;
    }

    // Stagger the loading of feed items
    let delay = 500;
    mockData.forEach((data, index) => {
        setTimeout(() => {
            const el = createFeedItem(data, index);
            feedContainer.appendChild(el);
            
            // Trigger reflow to apply animation
            void el.offsetWidth;
            el.classList.add('visible');
            
            // Auto scroll to bottom smoothly
            feedContainer.scrollTo({
                top: feedContainer.scrollHeight,
                behavior: 'smooth'
            });
            
        }, delay);
        delay += 1500; // Add new item every 1.5 seconds
    });

    // Handle scroll animations for other elements on the page
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab elements that should fade in on scroll but don't have the immediate fade-up class
    const scrollElements = document.querySelectorAll('.card, .feature-card, .section-title');
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
