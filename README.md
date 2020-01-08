# codeforgso.github.io

This is a repo for the new CodeForGSO website.

## Previous site

The previous site can be viewed [here](https://codeforgso.github.io/codeforgreensboro.org) or [here](https://codeforgreensboro.org)

It has several problems. The biggest concern is that the website is not responsive and does not scale properly on mobile. Meaning phone users cannot easily interact with the site.  
The other major issue is the color scheme. Our current color scheme works well together but using red as a primary color is a little aggressive.

The website's copy is mostly okay but will require some updates.

## Current URLs

1. Dev URL https://codeforgsogithubio-git-dev.codeforgso.now.sh/

## Table of Contents

1. [Dev Setup](./docs/setup.md)
1. [NextJS Readme](./docs/next.md) for technical information

## Maintain Leadership data

1. Leadership data found on the "Who We Are" page is maintained in /static/leadership.json
1. Images for leadership is stored in /static/leadership/
1. Steps to maintain:
    1. Upload image into /static/leadership/
    1. Edit /static/leadership.json, copy existing array entry and modify the values as needed
1. Leadership cards are created in the same sequance in the leadership.json file
1. The leadership cards are displayed with maximum of 3 across depending on the viewport size