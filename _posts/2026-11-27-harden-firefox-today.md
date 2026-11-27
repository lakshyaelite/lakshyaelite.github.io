---
layout: post
---

Firefox, the browser people trust for their privacy. But the truth is, Firefox isn't as private it was anymore. Telemetry being sent to Mozilla, sponsored content on the new tab, data being sent to Mozilla about your interaction with the browser by default, as their privacy policy states. Sure, all of it can be disabled, but that would just not send telemetry data to Mozilla. In this post, I will show you how you can **harden** firefox and tune it up to unleash privacy and performance--all while keeping convenience. 

## Betterfox: Make firefox better
[Betterfox](github.com/yokoffing/BetterFox) is a user.js file which hardens your profile. Just download it, go to `about:profiles`, locate your profile (often labeled Default - Release), copy and paste the user.js file into the highlighted folder, not the folder which is currently opened.

## Install uBlock Origin
This extension is mandatory for online privacy. It blocks ads and tracker. Install it, then go to it's settings (Click uBlock icon > Gear icon) then go to filter lists. Inside it, enable the filters as shown in [this page](https://github.com/yokoffing/filterlists#recommended-filters-for-ublock-origin). Then you're done! You are now ready for privacy online!

## Conclusion
This was a small post, because betterfox does most of the job by default. If you are a power user (like me), you can also enable [Optional hardening](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening). Thanks for reading and be sure to subscribe via RSS to not miss any updates!