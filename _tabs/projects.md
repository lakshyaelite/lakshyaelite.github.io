---
layout: default
title: Projects
permalink: /projects/
icon: fas fa-code
order: 2
---

## 🚀 Featured Projects


<style>
 :root {
   --project-card-bg: #fff;
   --project-card-color: #222;
   --project-card-border: #e0e0e0;
   --project-card-title: #222;
   --project-card-text: #222;
   --project-card-link: #222;
 }
 
 /* Automatic dark mode based on system preference */
 @media (prefers-color-scheme: dark) {
   :root {
     --project-card-bg: #1E1E1E;
     --project-card-color: #f1f3f6;
     --project-card-border: #1E1E1E;
     --project-card-title: #f1f3f6;
     --project-card-text: #f1f3f6;
     --project-card-link: #f1f3f6;
   }
 }
 
 /* Manual theme overrides */
 html[data-mode="dark"],
 body[data-mode="dark"],
 [data-bs-theme="dark"],
 .dark-mode {
   --project-card-bg: #1E1E1E;
   --project-card-color: #f1f3f6;
   --project-card-border: #1E1E1E;
   --project-card-title: #f1f3f6;
   --project-card-text: #f1f3f6;
   --project-card-link: #f1f3f6;
 }
 
 html[data-mode="light"],
 body[data-mode="light"],
 [data-bs-theme="light"],
 .light-mode {
   --project-card-bg: #fff;
   --project-card-color: #222;
   --project-card-border: #e0e0e0;
   --project-card-title: #222;
   --project-card-text: #222;
   --project-card-link: #222;
 }
 
 .card.project-card, .project-card {
   background-color: var(--project-card-bg) !important;
   color: var(--project-card-color) !important;
   border: 1px solid var(--project-card-border) !important;
   border-radius: 0.5rem;
   transition: background 0.2s, color 0.2s, border-color 0.2s;
 }
 
 .card.project-card .card-title,
 .card.project-card .card-text,
 .card.project-card .card-link,
 .project-card .card-title,
 .project-card .card-text,
 .project-card .card-link {
   color: var(--project-card-color) !important;
 }
 
 .card.project-card .card-title,
 .project-card .card-title {
   color: var(--project-card-title) !important;
 }
 
 .card.project-card .card-text,
 .project-card .card-text {
   color: var(--project-card-text) !important;
 }
 
 .card.project-card .card-link,
 .project-card .card-link {
   color: var(--project-card-link) !important;
   text-decoration: underline;
 }
 
 .card.project-card .card-link:hover,
 .project-card .card-link:hover {
   opacity: 0.8;
 }
</style>


<div class="container-fluid px-0">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for project in site.data.projects.featured %}
      <div class="col d-flex align-items-stretch">
        <div class="card h-100 shadow-sm project-card w-100">
          <img src="{{ project.image }}" class="card-img-top" style="object-fit: cover; width: 100%; height: 180px; aspect-ratio: 16/9; background: #222; border-radius: 0.5rem 0.5rem 0 0;" alt="{{ project.title }} Screenshot">
          <div class="card-body d-flex flex-column p-3 pb-2">
            <h3 class="card-title mb-1 mt-0" style="font-size: 1.25rem; line-height: 1.2; font-family: 'Lato', sans-serif;">{{ project.emoji }} {{ project.title }}</h3>
            {% if project.badges %}
            <div class="mb-1" style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem !important;">
              {% for badge in project.badges %}
                <span style="display: inline-flex; align-items: center; margin-right: 0.5rem;">{{ badge.markdown | markdownify }}</span>
              {% endfor %}
            </div>
            {% endif %}
            <p class="card-text mb-2 mt-1" style="font-size: 1rem; line-height: 1.5; font-family: 'Source Sans Pro', sans-serif;">{{ project.description }}</p>
            <div class="mt-auto pt-2">
              <a href="{{ project.live }}" class="card-link">🔗 Live site</a><br>
              <a href="{{ project.repo }}" class="card-link">💻 Source code</a>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

---

## 🧱 Other Projects



<div class="container-fluid px-0">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for project in site.data.projects.others %}
      <div class="col d-flex align-items-stretch">
        <div class="card h-100 shadow-sm project-card w-100">
          <img src="{{ project.image }}" class="card-img-top" style="object-fit: cover; width: 100%; height: 180px; aspect-ratio: 16/9; background: #222; border-radius: 0.5rem 0.5rem 0 0;" alt="{{ project.title }} Screenshot">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title mb-1 mt-0" style="font-size: 1.25rem; line-height: 1.2; ">{{ project.emoji }} {{ project.title }}</h3>
            {% if project.badges %}
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
              {% for badge in project.badges %}
                <span style="display: inline-flex; align-items: center; margin-right: 0.5rem;">{{ badge.markdown | markdownify }}</span>
              {% endfor %}
            </div>
            {% endif %}
            <p class="card-text mb-2 mt-1" style="font-size: 1rem; line-height: 1.5;">{{ project.description }}</p>
            <div class="mt-auto pt-2">
              <a href="{{ project.live }}" class="card-link">🔗 Live site</a><br>
              <a href="{{ project.repo }}" class="card-link">💻 Source code</a>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
