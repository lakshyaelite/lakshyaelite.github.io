---
layout: post
title: "My Linux Mint experience after 1 month"
date: 2026-05-18
---

Windows is a great operating system and all, but as Microsoft slowly started adding more and more features, Windows 11 on old hardware starts to age. Even after resetting, the lag now no longer goes away. So, I decided to switch to Linux. Here are some things I learned after a month using it.

# Picking a Distro
This was the step I thought was gonna be easy, but I was proved wrong almost instantly after I picked the wrong one for myself. **Initially, I thought that I would go with Linux Mint**, and it worked great in the Live environment. But, there was a display scaling issue. Windows by default scales the display to have a nice and big font, as it has the right drivers. Linux, on the other hand, does not have the right drivers to do so (sometimes). And Linux Mint had a very small display scaling (100%) instead of the regular size of Windows (150%). Now, there is "Fractional Scaling", but since Mint uses X11 desktop environment instead of Wayland, there comes a lot of graphical issues if you try to use it. So, after researching, **I decided to go with Kubuntu**, as it has a default scaling instead of Fractional scaling. **But then I had to install Linux Mint right after one day** as I tried to tweak Kubuntu to my personal liking. First, I tried to get rid of snap, but then I ran into issues like KeePassXC not being able to connect to FireFox, no matter what I tried. Then, my other disk had issues mounting, since it was NTFS. So, I had to run a command every time I restarted my laptop, because Dolphin could not mount it correctly causing read and write issues.
In the end, I thought that I'd rather have small text than to run that command everytime to mount my disk, getting locked out of websites as my passkey was stored inside of KeePassXC and probably getting more issues in the future. Hence, I picked Linux Mint.
The display scaling might get fixed though, as mentioned [here](https://blog.linuxmint.com/?p=5019), by **December 2026** as it **might introduce Wayland as the default instead of X11**.

# Some Sacrifices
To switch to Linux, I had make a few sacrifices. This for me however, was small. As I am a web developer, I do not require software that work only on Windows. For documents and presentations, however, I am using a Windows VM to run Microsoft Office inside it. I am starting to getting the hang of Google Docs, Slides and Sheets, and also LibreOffice as I don't want to have a VM running just for MS Office. And also Windows optimizes the speaker and microphone output, well Linux ruined the quality. It's still usable, but not as good as before. Other than that, I don't need to sacrifice anything else. I use OpenShot for video editing, GIMP for photos, VS Code for development, NodeJS and Python. All of them work on Linux.

# Updates
To update stuff, it's pretty easy, especially on Linux Mint with the update manager. To update programs, I simply need to click on the shield icon in the bottom right to search and update all of my programs. It is pretty convenient as you can also update Linux from right there with a GUI. This also works on other Debian based distros, but many of them need a command instead, which is still pretty convenient but mintupdate (Mint's update manager) gives you a GUI and a system tray icon.

# Cinnamon Features
Cinnamon, Linux Mint's main UI, has a lot of features. Here are some that I found useful.

## Accounts integration
Since Mint's Cinnamon uses GNOME at it's very core, so it has also inherited a very useful feature: Online accounts, which lets you link you Google, Microsoft, and more to Linux Mint. I have linked my Google account, and now it lets me view my Google Drive files directly from the file manager (Nemo) and view and manage my calendar directly from the system tray calendar. It sounds niche until you try it out yourself.

## Customization
If you're coming from Windows 11, you are gonna absolutely love the customization offered in Cinnamon. For example, you can place the system tray on the left and the Menu and pinned programs on the right, or do whatever you want, add as many panels as you wish on any side of the screen, place pinned programs center and menu left, literally whatever you want! And you can download more applets and add more things to the panel. You can also get desktop widgets. Mint has only 2 built-in, but you can download more! And the fact that amazes me is that this level of customization is built in, so there will be no extra system resource usage like in Windows, in which customization programs have to "stick" on top on the explorer.exe, which also causes instability and bugs.

# Conclusion
There is a that I still have to explore about Linux Mint, and as soon as I hit 1 year of use, I will post my findings so stay tuned and subscribe via the RSS feed. Till then, have a nice day!
