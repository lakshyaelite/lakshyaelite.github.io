const projects = [
    {
        title: "Amazing Portfolio",
        desc: "A modern, responsive portfolio website and blog built with Jekyll.",
        img: "https://placehold.co/400x200?text=Amazing+Portfolio",
        link: "#"
    },
    {
        title: "Toffee",
        desc: "The best way to accept tips via UPI in India.",
        img: "toffee.webp",
        link: "#"
    }
];

const certificates = [
    {
        title: "Full Stack Web Development",
        issuer: "WhiteHat Jr.",
        date: "2023",
        img: "https://placehold.co/400x200?text=Certification"
    }
];

const output = document.getElementById('typed-output');

if (output) {
    const phrases = ["building clean web apps", "exploring Linux", "playing chess", "reading books"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            output.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; 
        } else {
            output.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; 
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Renderer with centered column logic
function renderCards(data, containerId, isProject) {
    const container = document.getElementById(containerId);
    let html = "";

    data.forEach(item => {
        html += `
        <div class="col-11 col-sm-6 col-lg-4">
            <div class="card h-100 shadow-sm overflow-hidden">
                <img src="${item.img}" class="card-img-top" alt="${item.title}">
                <div class="card-body p-4">
                    <h5 class="card-title fw-bold">${item.title}</h5>
                    <p class="secondary-text small mb-4">
                        ${isProject ? item.desc : 'Issued by ' + item.issuer}
                    </p>
                    ${isProject 
                        ? `<a href="${item.link}" class="btn btn-outline-primary rounded-pill btn-sm px-4">View</a>` 
                        : `<span class="badge rounded-pill bg-primary px-3">${item.date}</span>`}
                </div>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// Mailto logic
document.addEventListener('DOMContentLoaded', () => {
    renderCards(projects, 'project-container', true);
    renderCards(certificates, 'certificate-container', false);

    // Contact Form
    document.getElementById('emailForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = "hello@yourdomain.com"; 
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    });
});