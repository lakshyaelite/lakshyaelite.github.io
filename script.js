// Sample Data
const projects = [
    {
        title: "Toffee",
        desc: "The easiest way to accept digital sweet in India.",
        img: "https://lakshya-img.netlify.app/screenshots/toffee.webp",
        link: "https://github.com/lakshyaelite/toffee"
    },
    {
        title: "COVID-19 Tracker (broken)",
        desc: "View wrong amount of COVID-19 cases.",
        img: "images/covid_tracker_project.png",
        link: "https://github.com/lakshyaelite/covid-tracker"
    },
    {
        title: "Random Image Giver",
        desc: "Gets simple images from Lorem Picsum.",
        img: "https://lakshya-img.netlify.app/screenshots/random_image_giver.webp",
        link: "https://github.com/lakshyaelite/random-image-giver"
    }
];

const certificates = [
    {
        title: "Full Stack Development Course",
        issuer: "Whitehat Jr",
        date: "2023",
        img: "https://placehold.co/400x200?text=Whitehat+Jr+Certificate"
    }
];

// Card Renderer
function renderCards(data, containerId, isProject) {
    const container = document.getElementById(containerId);
    if (!container) return;
    data.forEach(item => {
        container.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <img src="${item.img}" class="card-img-top" alt="${item.title}" loading="lazy">
                    <div class="card-body p-4">
                        <h5 class="card-title fw-bold">${item.title}</h5>
                        <p class="card-text text-muted small mb-4">
                            ${isProject ? item.desc : 'Issued by ' + item.issuer}
                        </p>
                        ${isProject 
                            ? `<a href="${item.link}" class="btn btn-outline-primary rounded-pill btn-sm px-3">Live Demo</a>` 
                            : `<span class="badge rounded-pill bg-light text-primary border border-primary">${item.date}</span>`}
                    </div>
                </div>
            </div>
        `;
    });
}

// Mailto Logic
function initContactForm() {
    const form = document.getElementById('emailForm');
    if(!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = form.dataset.email || "me@example.com";
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        
        window.location.href = mailtoLink;
    });
}

// Listen for system theme changes (auto dark mode)
function initThemeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
    });
}

// Start everything
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded fired');
        renderCards(projects, 'project-container', true);
        renderCards(certificates, 'certificate-container', false);
        initContactForm();
        initCodeBlocks();
        convertBlockquotesToAlerts();
        initThemeListener();
    });
} else {
    console.log('DOM already loaded');
    renderCards(projects, 'project-container', true);
    renderCards(certificates, 'certificate-container', false);
    initContactForm();
    initCodeBlocks();
    convertBlockquotesToAlerts();
    initThemeListener();
}

// Code block enhancements
function initCodeBlocks() {
    // Code blocks are now handled server-side, but we can add any client-side enhancements here
}

// Blockquote to Bootstrap Alert conversion
const promptMappings = {
    'prompt-warning': { alertClass: 'alert-warning', icon: 'bi-exclamation-triangle-fill' },
    'prompt-info': { alertClass: 'alert-info', icon: 'bi-info-circle-fill' },
    'prompt-danger': { alertClass: 'alert-danger', icon: 'bi-x-octagon-fill' },
    'prompt-success': { alertClass: 'alert-success', icon: 'bi-check-circle-fill' },
    'prompt-tip': { alertClass: 'alert-info', icon: 'bi-lightbulb-fill' }
};

function convertBlockquotesToAlerts() {
    console.log('Running convertBlockquotesToAlerts');
    const blockquotes = document.querySelectorAll('blockquote');
    console.log('Found blockquotes:', blockquotes.length);
    blockquotes.forEach((blockquote, index) => {
        console.log(`Checking blockquote ${index}:`, blockquote.textContent);
        const text = blockquote.textContent;
        const match = text.match(/\{: \.([a-z0-9-]+) \}/);
        console.log('Match:', match);
        if (match) {
            const promptClass = match[1];
            console.log('Prompt class:', promptClass);
            const mapping = promptMappings[promptClass];
            if (mapping) {
                console.log('Mapping found:', mapping);
                // Remove the marker from the blockquote's innerHTML
                blockquote.innerHTML = blockquote.innerHTML.replace(/\{: \.[a-z0-9-]+ \}/g, '');
                console.log('After remove:', blockquote.innerHTML);
                // Create the alert div
                const alertDiv = document.createElement('div');
                alertDiv.className = `alert ${mapping.alertClass} d-flex align-items-start gap-2`;
                alertDiv.setAttribute('role', 'alert');

                // Create the icon
                const icon = document.createElement('i');
                icon.className = `bi ${mapping.icon}`;

                // Create the content div
                const contentDiv = document.createElement('div');

                // Move the blockquote content to contentDiv
                while (blockquote.firstChild) {
                    contentDiv.appendChild(blockquote.firstChild);
                }

                // Append icon and contentDiv to alertDiv
                alertDiv.appendChild(icon);
                alertDiv.appendChild(contentDiv);

                // Replace blockquote with alertDiv
                blockquote.parentNode.replaceChild(alertDiv, blockquote);
                console.log('Replaced blockquote');
            } else {
                console.log('No mapping for', promptClass);
            }
        } else {
            console.log('No match for blockquote', index);
        }
    });
}

// Copy code functionality for server-rendered toolbars
function copyCode(button) {
    const wrapper = button.closest('.code-block-wrapper');
    const codeElement = wrapper.querySelector('code');

    if (codeElement) {
        navigator.clipboard.writeText(codeElement.textContent).then(() => {
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="bi bi-check"></i> Copied!';
            button.classList.add('copied');

            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="bi bi-x"></i> Failed';
            setTimeout(() => {
                button.innerHTML = originalHTML;
            }, 2000);
        });
    }
}