---
layout: layouts/post.njk
title: "Introducing Toffee 🍬 — A Simple Way to Accept UPI Tips"
date: 2025-09-03
tags: posts
cover: /images/toffee.png
---

I’m excited to share my latest side project — **Toffee 🍬**, a lightweight open-source tool to accept tips in India via UPI.  

---

## The Problem
If you’re a blogger, indie dev, or creator in India, you’ve probably thought about adding a “Support Me” button. But most payment integrations are either **too heavy** (full backend, gateways, KYC, etc.) or **too restrictive**.  

Sometimes, all you really want is:  
👉 *A simple way for someone to send you ₹10 as a “thank you”*.  

---

## The Solution: Toffee
**Toffee** is my attempt at solving this.  

- 🟢 **No backend needed** — it’s just HTML + JavaScript.  
- 📱 **UPI-first** — works with any UPI app in India.  
- 🎨 **Polished design** — consistent dark mode + responsive layout.  
- 📷 **Built-in QR code** — instantly generated with [QRious](https://github.com/neocotic/qrious).  
- 🔗 **Embed or share** — copy a direct link, or use the iframe snippet to add it to your site.  

---

## How It Works
1. Go to the Toffee generator page.  
2. Enter your UPI ID, name, and the price per “toffee”.  
3. Hit **Generate Link** → Toffee creates:  
   - A sharable link you can post anywhere.  
   - An embeddable widget you can add to your site.  

Here’s what the payment page looks like 👇  

![Payment screen](https://lakshya-img.netlify.app/screenshots/20250903/payment.png)

---

## Try It Out
- **Live Demo:** [getmetoffee.vercel.app](https://getmetoffee.vercel.app)  
- **Repo:** [GitHub](https://github.com/lakshyaelite/toffee)  

It’s free, open-source, and you can customize it to fit your site.  

---

## What’s Next?
I’d love to hear feedback from creators and developers. Possible future additions:  
- Support for predefined “packs” (like 5 toffees at once).  
- Custom themes (so Toffee blends into your site’s design).  
- Better QR code styling.  

---

💡 If you like the project, give it a star on GitHub or share it with someone who might use it.  

And if you try Toffee out, let me know — I’d be thrilled to see it in action!