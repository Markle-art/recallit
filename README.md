# Recallit — AZ-900 Study Companion

Recallit is a lightweight study companion being developed for the **Vibe Coding Hackathon: AZ-900 Exam Prep Edition**.

The goal is to help learners prepare for the Microsoft Azure Fundamentals (AZ-900) certification through practice questions, flashcards, explanations, and progress tracking.

**Project status:** MVP in development.

## Project Goals

Recallit aims to make AZ-900 revision more interactive and help learners identify topics that need more practice.

The project focuses on three exam domains:

1. Cloud concepts
2. Azure architecture and services
3. Azure management and governance

## Current Features

- **Dashboard:** View study progress and revision activity.
- **Practice questions:** Answer multiple-choice questions and receive immediate feedback and explanations.
- **Flashcards:** Practise active recall of key concepts.
- **Topic tracking:** Review progress across study topics.
- **Progress persistence:** Save study progress locally in the browser.

## Technology Stack

- React
- Vite
- JavaScript
- CSS
- Git and GitHub

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/Markle-art/recallit.git
cd recallit
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Production Build

To check whether the application builds successfully, run:

```bash
npm run build
```

## Practice Question Contributions

The project needs original, accurate practice questions that help beginners understand AZ-900 concepts.

For the initial review, the question contributor will prepare **three sample questions**:

- One about cloud concepts
- One about Azure architecture and services
- One about Azure management and governance

Each question should include:

- Topic and learning objective
- Question written in original wording
- Four answer options
- One correct answer
- A beginner-friendly explanation
- A reference source URL, where available
- Verification status: `Needs Review` or `Verified`

Questions should be checked for technical accuracy before being added to the application. Uncertain answers must be marked `Needs Review`.

The first three questions will be reviewed before the question bank is expanded.

## Contribution Guidelines

- Keep contributions focused on the hackathon assignment.
- Write clear, beginner-friendly content.
- Use original practice questions; do not copy real certification exam questions or exam dumps.
- Explain why the correct answer is correct.
- Verify technical claims against reliable documentation.
- Test changes before proposing them for integration.
- Coordinate with the project maintainer before changing application code or shared files.

## Disclaimer

Recallit is an independent educational project. It is not affiliated with, endorsed by, or sponsored by Microsoft.

AZ-900 is a Microsoft certification. The practice questions in Recallit are original learning materials and are not actual Microsoft certification exam questions.

## Project Repository

GitHub: https://github.com/Markle-art/recallit

## Project Objective

Build a useful, responsive AZ-900 study companion that supports active recall, provides meaningful explanations, and helps learners identify areas for further revision.
