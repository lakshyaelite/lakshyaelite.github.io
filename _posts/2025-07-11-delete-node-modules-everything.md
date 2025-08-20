---
layout: post
title: "Free Up Space: Delete node_modules Using Everything"
description: "Learn how to quickly find and delete old node_modules folders on Windows using the Everything search tool — and free up gigabytes of space in seconds."
image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ywmtnhbf38xtzycafkdd.jpg"
date: 2025-07-11 19:11:43 +0530
categories: [Software, Windows]
tags: [windows]
---

{% include lang.html %}

As a JavaScript developer, you've likely collected countless `node_modules` folders over time. These directories can grow massive and are often left behind by forgotten or abandoned projects.

In this post, we’ll walk through how to easily find and delete these folders on Windows using the **Everything** search utility.

## :thinking: Why Delete `node_modules` Folders?

* They take up **huge amounts of disk space**
* Often leftover from projects you no longer use
* Cleaning them improves file system performance


![Heaviest objects](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yveo9ew9cd2xfp89puv1.webp)
_Credit: <https://tsh.io>_

## :inbox_tray: Step 1: Install the Everything App

Everything is a super-fast search tool for Windows that can instantly find files and folders by name.

[:point_right: Download Everything](https://www.voidtools.com/downloads/)

![Voidtools download page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/05pkmsphbg5t61iu3nkv.png)
_The voidtools website for Everything download_

## :mag_right: Step 2: Search for `node_modules`

Open Everything and type `node_modules`

You’ll instantly see all `node_modules` folders across all your drives.


![Everthing Selected](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j50sfucqp4ltfgvwljec.png)
_All of the selected files_

## :bar_chart: Step 3: Sort by Size (Optional)

To find the largest folders first:

1. Right-click the column headers.
2. Enable the **Size** column.
3. Click on **Size** to sort in descending order.

![Sort by size](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uu9xt5f1pmubd1919l1t.png)
_Sorting by size_

## :white_check_mark: Step 4: Verify Before Deleting

Right-click on any folder and choose **“Open path”** to inspect its contents.
Make sure it’s safe to delete (i.e., not from a current project).

![Verifying](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8k3vqrx0pytlqo6mud49.png)
_Verifying_

## :wastebasket: Step 5: Delete Multiple Folders at Once

1. Use <kbd>Ctrl</kbd> + <kbd>Click</kbd> to select multiple entries.
2. Press <kbd>Shift</kbd> + <kbd>Delete</kbd> to permanently remove them.

> **Be careful!** This bypasses the Recycle Bin.
{: .prompt-danger }

![There go the files!](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2yeeivjjp8mxjq4l4121.png)
_There go the files!_

## :zap: Bonus: PowerShell Cleanup Script

Want to automate the cleanup? Try this PowerShell script:

```powershell
Get-ChildItem -Path C:\ -Recurse -Directory -Force -ErrorAction SilentlyContinue \
    -Filter node_modules | Remove-Item -Recurse -Force -WhatIf
```

> Replace `-WhatIf` with `-Confirm:$false` to actually delete the folders.
{: .prompt-tip }

## :raised_hands: Conclusion

With the Everything app, cleaning up old `node_modules` folders is fast, easy, and satisfying. Clear the clutter and reclaim your disk space today!
