# jira-mini-logger
This **chrome extension** provides a little progress bar to help you quickly check your daily logged hours.
# Works and tested on Jira V7.7.1.**

![Image of progress bar](https://i.redd.it/ifk9ole1v5s51.jpg)

## Configuration

Before installing, make sure to change the following:

In `manifest.json` change `<JIRA_IP>` with your **JIRA IP** server.

In `contentScript.js` inside `js` folder, change `<JIRA_IP>` and `<JIRA_PORT>` with your Jira's Server.

## Installation

Installation is very straight forward,
1. Go to `chrome://extensions`.
2. Activate `Developer Mode`.
3. Click `Load Unpacked` and choose the **extension folder**.
