
// Initialize Lucide Icons
lucide.createIcons();

// --- DATA ---
const TESTIMONIALS = [
    {
        id: 1,
        headline: "Adjust protocols \nanytime with a provider",
        bullets: [
            "Low administrative burden to help your staff focus on treatment",
            "Adjust your staffing levels as needed to balance patient load and burnout",
            "Change operational protocols in partnership with department heads at any time, instantly"
        ],
        doctorName: "Dr. Sandra Wilson",
        doctorRole: "SVP of Emergency Ops, UnitSync",
        imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1964&auto=format&fit=crop"
    },
    {
        id: 2,
        headline: "Real-time insights for \nbetter patient outcomes",
        bullets: [
            "Identify bottlenecks before they become critical issues in the ER",
            "Streamline communication between departments instantly",
            "Data-driven decisions that save lives and optimize resources"
        ],
        doctorName: "Dr. Sarah Chen",
        doctorRole: "Chief of Cardiology, Mercy Hospital",
        imageSrc: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1964&auto=format&fit=crop"
    }
];

const FAQS = [
    {
        question: "Do we need to replace our current ERP or EHR?",
        answer: "No. UnitSync acts as an intelligent layer that integrates bi-directionally with your existing systems (Epic, Cerner, etc.) to enhance their capabilities without replacement."
    },
    {
        question: "Is this affordable for public hospitals?",
        answer: "Yes. Unlike enterprise suites like SAP or IBM Watson, UnitSync is priced specifically for mid-sized public sector budgets, with no hidden implementation fees."
    },
    {
        question: "How long does implementation take?",
        answer: "Our standardized Pilot Phase allows for rapid deployment in Emergency Departments. Most hospitals are live within 4-6 weeks and see ROI within the first quarter."
    },
    {
        question: "Is data handling HIPAA & GDPR compliant?",
        answer: "Absolutely. We maintain the highest security standards with end-to-end encryption, regular audits, and full compliance with HIPAA, GDPR, and local data residency laws."
    },
    {
        question: "Can I customize the dashboard views?",
        answer: "Yes. Every department head can configure their own 'Control Tower' view to track the KPIs that matter most to their specific workflow and staff."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We provide 24/7 dedicated support for critical issues, along with a dedicated Success Manager who helps you optimize workflows during and after onboarding."
    },
    {
        question: "Does it work on mobile devices?",
        answer: "UnitSync is fully responsive and secure on mobile. Doctors can access schedules, handoff notes, and alerts directly from their secure hospital-issued tablets or phones."
    },
    {
        question: "How do updates work?",
        answer: "As a SaaS platform, updates are automatic and seamless. You always have access to the latest features and security patches without any downtime or IT maintenance."
    }
];

// --- NAVBAR ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- TESTIMONIALS CAROUSEL ---
    let currentTestimonialIndex = 0;
    const headlineEl = document.getElementById('testimonial-headline');
    const bulletsEl = document.getElementById('testimonial-bullets');
    const imageEl = document.getElementById('testimonial-image');
    const authorEl = document.getElementById('testimonial-author');
    const roleEl = document.getElementById('testimonial-role');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    function renderTestimonial(index) {
        const item = TESTIMONIALS[index];
        // Fade out transition content could be added here

        headlineEl.textContent = item.headline; // Note: \n handling might need CSS 'whitespace-pre-line'
        imageEl.src = item.imageSrc;
        imageEl.alt = item.doctorName;
        authorEl.textContent = item.doctorName;
        roleEl.textContent = item.doctorRole;

        // Render bullets
        bulletsEl.innerHTML = item.bullets.map(bullet => `
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <div class="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <i data-lucide="check" class="w-3.5 h-3.5 text-orange-600 stroke-[3]"></i>
                </div>
              </div>
              <p class="ml-4 text-lg text-slate-700 font-medium leading-snug">${bullet}</p>
            </div>
        `).join('');

        // Re-init icons for new content
        lucide.createIcons();
    }

    if (headlineEl) {
        renderTestimonial(0); // Init

        nextBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % TESTIMONIALS.length;
            renderTestimonial(currentTestimonialIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
            renderTestimonial(currentTestimonialIndex);
        });
    }


    // --- FAQ SECTION ---
    const faqGrid = document.getElementById('faq-grid');
    if (faqGrid) {
        faqGrid.innerHTML = FAQS.map((faq, index) => `
            <div class="flex flex-col items-start faq-item">
                <button class="flex items-start text-left w-full group focus:outline-none faq-btn" data-index="${index}">
                  <div class="flex-shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors duration-200 bg-slate-900 group-hover:bg-slate-700 faq-icon-bg">
                       <i data-lucide="chevron-down" class="w-4 h-4 text-white faq-icon"></i>
                  </div>
                  <span class="text-xl font-serif font-bold text-slate-900 leading-tight">${faq.question}</span>
                </button>
                <div class="grid transition-all duration-300 ease-in-out grid-rows-[0fr] opacity-0 faq-content">
                  <div class="overflow-hidden">
                    <p class="text-slate-600 leading-relaxed pl-10 text-base mt-4">${faq.answer}</p>
                  </div>
                </div>
            </div>
        `).join('');
        lucide.createIcons();

        // FAQ Toggle Logic
        document.querySelectorAll('.faq-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const content = this.nextElementSibling;
                const iconBg = this.querySelector('.faq-icon-bg');
                const icon = this.querySelector('.faq-icon');

                // Toggle state
                const isOpen = content.classList.contains('grid-rows-[1fr]');

                // Close all others (optional, but good for accordion)
                document.querySelectorAll('.faq-content').forEach(c => {
                    c.classList.remove('grid-rows-[1fr]', 'opacity-100');
                    c.classList.add('grid-rows-[0fr]', 'opacity-0');
                });
                document.querySelectorAll('.faq-icon-bg').forEach(bg => {
                    bg.classList.remove('bg-[#2E5BFF]');
                    bg.classList.add('bg-slate-900');
                });
                document.querySelectorAll('.faq-icon').forEach(i => {
                    // Reset icon usage logic if needed, but simpler to just re-render is hard without re-running lucide
                    // For static, CSS rotation is better.
                });

                if (!isOpen) {
                    content.classList.remove('grid-rows-[0fr]', 'opacity-0');
                    content.classList.add('grid-rows-[1fr]', 'opacity-100');
                    iconBg.classList.remove('bg-slate-900');
                    iconBg.classList.add('bg-[#2E5BFF]');
                }
            });
        });
    }

    // --- ASSISTANT ---
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    let messages = [
        { role: 'model', text: 'Hi! I can answer questions about UnitSync deployment, compliance, and features. How can I help?' }
    ];

    function renderMessages() {
        chatMessages.innerHTML = messages.map(msg => `
            <div class="flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="${msg.role === 'user' ? 'bg-[#2E5BFF] text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-200 shadow-sm rounded-bl-none'} max-w-[80%] rounded-2xl px-4 py-2.5 text-sm">
                  ${msg.text}
                </div>
            </div>
        `).join('');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    if (chatToggle && chatWindow) {
        renderMessages();

        chatToggle.addEventListener('click', () => {
            chatWindow.classList.remove('hidden');
            chatToggle.classList.add('hidden');
        });

        closeChat.addEventListener('click', () => {
            chatWindow.classList.add('hidden');
            chatToggle.classList.remove('hidden');
        });

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            // Add User Message
            messages.push({ role: 'user', text });
            chatInput.value = '';
            renderMessages();

            // Mock Response (Simulating AI)
            const loadingDiv = document.createElement('div');
            loadingDiv.className = "flex justify-start";
            loadingDiv.innerHTML = `
                <div class="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 flex space-x-1">
                  <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                  <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                  <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                </div>
            `;
            chatMessages.appendChild(loadingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(() => {
                chatMessages.removeChild(loadingDiv);
                // Simple keyword matching for demo
                let responseText = "I can help with that! UnitSync integrates with Epic and Cerner, is HIPAA compliant, and deployment usually takes 4-6 weeks.";
                if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) {
                    responseText = "UnitSync is priced specifically for public hospital budgets. Contact our sales team for a custom quote.";
                } else if (text.toLowerCase().includes('mobile')) {
                    responseText = "Yes, UnitSync is fully responsive and works on all hospital-issued tablets and smartphones.";
                }

                messages.push({ role: 'model', text: responseText });
                renderMessages();
            }, 1000);
        });
    }

});
