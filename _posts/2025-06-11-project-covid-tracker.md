---
title: "Building an India COVID-19 Tracker with HTML, CSS, JavaScript"
description: "In this post, we'll walk through the process of creating a responsive, interactive, and visually appealing COVID-19 tracker specifically for India using HTML, CSS, JavaScript"
image: https://lh3.googleusercontent.com/d/183retVTFvzaZKiHF1rSp5GzFDIIz4RJe
date: 2025-06-11
categories: [Software, Projects]
tags: [projects]
---

This project was built while vibing code with **ChatGPT**, which made the whole process a lot more fun and collaborative. 😄

---

## 🔧 Tools & Technologies

* **HTML5** – Structure of the site
* **CSS3** – Styling and responsive layout
* **JavaScript** – Dynamic data fetching
* **disease.sh API** – Free and public COVID-19 API

---

## 🎨 Features

* 🌗 **Dark Mode** toggle with local storage persistence
* 📱 **Responsive Design** for mobile devices
* 🔄 **Real-time Data** pulled from the disease.sh API

---

## 📁 File Structure

```plaintext
covid-tracker/
├── index.html
├── style.css
├── script.js
```

---

## 🌐 API Integration

We used the [disease.sh](https://disease.sh/) API to get real-time COVID-19 data:

```js
fetch('https://disease.sh/v3/covid-19/countries/India')
```

We extracted:

* `active` cases
* `recovered` cases
* `deaths`

---

## 💡 Dark Mode

Dark mode was implemented by toggling a class on the `body` and saving user preference with `localStorage`:

```js
localStorage.setItem('theme', 'dark');
```

---

## 📱 Responsive Design

With max-width containers and flexible layout using CSS, the site looks great on phones and desktops alike.

---

## ✅ Final Touches

* Tooltip toggle icon for better UX
* Aesthetic improvements and color contrast for light/dark modes
* All functionality is **fully client-side**, no backend needed

---

## 🚀 Live Preview & Source Code

Want to see it live or fork the project?

> [🔗 GitHub Repository](https://github.com/lakshyagithub/covid-tracker)

---

## 🙌 Conclusion

Creating your own COVID-19 tracker helps you learn modern web technologies while building something practical. We combined real-time data, themes, and accessibility – all in one clean project.

Whether you're a student or a frontend enthusiast, this project is a great showcase for your portfolio.

---

**Stay safe and keep coding! 🇮🇳**

---

Feel free to comment or share your version of the tracker!
