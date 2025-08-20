---
layout: default
title: Certificates
permalink: /certificates/
icon: fas fa-trophy
order: 1
---

Below are some of the certificates I’ve earned through competitions, courses, and achievements.

<div class="mb-3" style="font-size: 1rem; color: #888;">
  <em>Click the certificate preview to open</em>
</div>

<style>
 :root {
   --cert-card-bg: #fff;
   --cert-card-color: #222;
   --cert-card-border: #e0e0e0;
   --cert-card-title: #222;
   --cert-card-text: #222;
   --cert-card-link: #222;
   --cert-card-img-bg: #fff;
 }
 
 /* Automatic dark mode based on system preference */
 @media (prefers-color-scheme: dark) {
   :root {
     --cert-card-bg: #1E1E1E;
     --cert-card-color: #f1f3f6;
     --cert-card-border: #1E1E1E;
     --cert-card-title: #f1f3f6;
     --cert-card-text: #f1f3f6;
     --cert-card-link: #f1f3f6;
     --cert-card-img-bg: #23272f;
   }
 }
 
 /* Manual theme overrides */
 html[data-mode="dark"],
 body[data-mode="dark"],
 [data-bs-theme="dark"],
 .dark-mode {
   --cert-card-bg: #1E1E1E;
   --cert-card-color: #f1f3f6;
   --cert-card-border: #1E1E1E;
   --cert-card-title: #f1f3f6;
   --cert-card-text: #f1f3f6;
   --cert-card-link: #f1f3f6;
   --cert-card-img-bg: #23272f;
 }
 
 html[data-mode="light"],
 body[data-mode="light"],
 [data-bs-theme="light"],
 .light-mode {
   --cert-card-bg: #fff;
   --cert-card-color: #222;
   --cert-card-border: #e0e0e0;
   --cert-card-title: #222;
   --cert-card-text: #222;
   --cert-card-link: #222;
   --cert-card-img-bg: #fff;
 }
 
 .card.project-card, .project-card {
   background-color: var(--cert-card-bg) !important;
   color: var(--cert-card-color) !important;
   border: 1px solid var(--cert-card-border) !important;
   border-radius: 0.5rem;
   transition: background 0.2s, color 0.2s, border-color 0.2s;
 }
 
 .card.project-card .card-title,
 .card.project-card .card-text,
 .card.project-card .card-link,
 .project-card .card-title,
 .project-card .card-text,
 .project-card .card-link {
   color: var(--cert-card-color) !important;
 }
 
 .card.project-card .card-title,
 .project-card .card-title {
   color: var(--cert-card-title) !important;
 }
 
 .card.project-card .card-text,
 .project-card .card-text {
   color: var(--cert-card-text) !important;
 }
 
 .card.project-card .card-link,
 .project-card .card-link {
   color: var(--cert-card-link) !important;
   text-decoration: underline;
 }
 
 .card.project-card .card-link:hover,
 .project-card .card-link:hover {
   opacity: 0.8;
 }
 
 .project-card .card-img-top {
   background: var(--cert-card-img-bg) !important;
 }
</style>

{% assign categories = site.data.certificates %}

{% for category in categories %}
### {{ category[0] | capitalize }}

<div class="container-fluid px-0 mb-4">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for cert in category[1] %}
      <div class="col d-flex align-items-stretch">
        <div class="card h-100 shadow-sm project-card w-100">
          <a href="{{ cert.image }}" target="_blank" style="display:block;">
            <img src="{{ cert.image }}" class="card-img-top" style="object-fit: contain; width: 100%; height: 180px; aspect-ratio: 16/9; border-radius: 0.5rem 0.5rem 0 0;" alt="{{ cert.title }}">
          </a>
          <div class="card-body d-flex flex-column p-3 pb-2">
            <h3 class="card-title mb-1 mt-0" style="font-size: 1.15rem; line-height: 1.2;">{{ cert.title }}</h3>
            <p class="card-text mb-2 mt-1" style="font-size: 1rem; line-height: 1.5;">{{ cert.description }}</p>
            {% if cert.link %}
            <div class="mt-auto pt-2">
              <a href="{{ cert.link }}" target="_blank" class="card-link">:link: View Issuer</a>
            </div>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
{% endfor %}
