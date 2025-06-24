# Smart PR Automator

A simple web application built with **NestJS** (backend) and **vanilla HTML/CSS/JS** (frontend) to automate the processing of Pull Requests (PRs). It matches PR titles and descriptions with predefined rules and assigns them to the relevant developers with comments.

---

## Features

- Input PR details: Title, Description, and Author.
- Matches PR against predefined rules (`bug`, `feature`, `documentation`).
- Displays matched rules with colored badges and assignment info.
- Clean and responsive user interface.
- Backend implemented with NestJS, serving a REST API endpoint.

---
## Install dependencies:
npm install

## Start the NestJS backend server:
npm run start

## Open your browser and navigate to:
http://localhost:3000

## How It Works
User submits PR details via a form in the frontend.

The frontend sends a POST request to /pr API.

Backend service processes the input, matches rules based on keywords in title or description.

Backend returns matched rules.

Frontend displays matched rules as colored badges with assignment information.
