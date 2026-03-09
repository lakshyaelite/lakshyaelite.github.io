---
layout: layouts/post.njk
title: "Essential Windows 11 Recovery and Repair Commands"
description: "Learn essential Windows 11 recovery and repair commands like SFC, DISM, Bootrec, and CHKDSK to troubleshoot and fix common system issues without third-party tools."
date: 2025-06-18
tags: posts
cover: /images/windows_repair_commands.png
---

When your Windows 11 system isn't behaving as it should, built-in recovery and repair tools can help fix a variety of issues. Below is a comprehensive list of essential commands every power user and technician should know.

## System File Checker (SFC)

The System File Checker scans and attempts to repair corrupted or missing system files.

```bash
sfc /scannow
```

## Deployment Imaging Service and Management Tool (DISM)

DISM can check the health of your Windows image and restore missing or damaged files.

```bash
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /ScanHealth
DISM /Online /Cleanup-Image /RestoreHealth
```

## System Reset Options

Use these commands to reset your PC either with a clean install or via the built-in recovery interface.

```bash
systemreset -cleanpc        # Resets using a clean Windows image
systemreset                 # Opens the Reset this PC interface
```

## Boot to Advanced Startup Options

Boot into the Windows Recovery Environment (WinRE) for troubleshooting options like Startup Repair.

```bash
shutdown /r /o /f /t 0
```

## Boot Configuration Repair

These commands help fix boot-related issues, especially useful after a failed update or drive corruption.

```bash
bootrec /fixmbr
bootrec /fixboot
bootrec /scanos
bootrec /rebuildbcd
```

## Check Disk Utility

Checks for disk errors and attempts to fix them.

```bash
chkdsk C: /f /r /x
```

## Restore Registry from Backup (From WinRE Command Prompt)

If your registry is corrupted, restore it using backups stored in the `RegBack` folder.

```bash
cd C:\Windows\System32\config
ren DEFAULT DEFAULT.bak
copy C:\Windows\System32\config\RegBack\DEFAULT DEFAULT
copy C:\Windows\System32\config\RegBack\SYSTEM SYSTEM
copy C:\Windows\System32\config\RegBack\SOFTWARE SOFTWARE
```

---

By mastering these commands, you can troubleshoot and fix many common Windows 11 issues without relying on third-party tools. Bookmark this page or keep a PDF handy for future use.
