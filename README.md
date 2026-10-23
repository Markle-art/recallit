# Recallit — AZ-900 Study Companion

**Learn it. Test it. Recall it.**

Recallit is a lightweight, interactive study companion built for learners preparing for the Microsoft Azure Fundamentals (AZ-900) certification. It brings practice questions, explanations, flashcards, and topic progress into one focused learning experience.

Built for the **Vibe Coding Hackathon: AZ-900 Exam Prep Edition (#1MillionDevs)**, Recallit explores how a learner's own preparation journey can inspire a more useful way to study.

## The Problem

Preparing for a certification exam can become a cycle of reading notes, answering questions, and forgetting concepts later. Learners need more than a score: they need opportunities to practise, understand mistakes, revisit key concepts, and monitor their progress.

## The Solution

Recallit brings essential study activities together in one place:

- **Practice:** Answer multiple-choice questions and review explanations.
- **Flashcards:** Review key concepts through active recall.
- **Topic-based learning:** Study Cloud Concepts, Azure Architecture and Services, and Azure Management and Governance.
- **Progress tracking:** Follow study activity and topic progress to help decide what to review next.

The goal is to make exam preparation more structured, approachable, and focused on understanding rather than memorising answers alone.

## Features

### Practice Questions

- A starter bank of 30 AZ-900 practice questions.
- Multiple-choice answers with explanations.
- Questions organised around the main AZ-900 exam domains.

### Flashcard Coach

- Review essential cloud and Azure terminology.
- Reveal definitions and explanations during revision.
- Reinforce concepts through repeated practice.

### Study Dashboard

- Navigate between study activities.
- View topic-level progress and learning statistics.
- Use a responsive interface on desktop and mobile screens.

### Learning-First Design

Recallit combines practice and review in one place, helping learners move from answering a question to revisiting the underlying concept.

## Technology Stack

- **React** — user interface
- **Vite** — development server and production build
- **JavaScript** — application logic
- **CSS** — responsive styling
- **Browser local storage** — local study progress
- **Git and GitHub** — version control and collaboration

## Getting Started

### Prerequisites

- Node.js and npm
- Git

### Run Locally

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

Open the local URL printed by Vite in your terminal.

### Verify the Production Build

```bash
npm run build
```

Vite generates the production output in the `dist/` directory.

## Project Structure

```text
recallit/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## What Makes Recallit Different?

Recallit is designed around a simple learning loop:

**Practise → Understand → Recall → Review**

Rather than treating an exam score as the only outcome, Recallit brings questions, explanations, flashcards, and progress into a single study workflow.

The project is an initial step toward more personalised revision, where learners can use their performance to identify knowledge gaps and focus their next study session.

## Current Scope and Limitations

Recallit is an MVP, and its current capabilities should be understood accordingly.

- The question bank is a starter set, not comprehensive coverage of the entire AZ-900 syllabus.
- Practice questions are intended for learning and revision, not as a prediction of official exam results.
- Study progress is stored locally in the browser; cross-device synchronisation and user accounts are not currently part of the documented MVP.
- AI tutoring and AI-generated study plans are future improvements unless implemented and verified in a later version.

## Future Improvements

- Personalised study plans based on missed questions.
- Stronger readiness insights across exam domains.
- Expanded question coverage mapped to official learning objectives.
- More detailed explanations and links to trusted learning resources.
- Optional AI-assisted explanations with source verification.

## Responsible Use

Recallit is an independent learning project. It is not affiliated with, endorsed by, or an official product of Microsoft.

Microsoft Azure and AZ-900 are Microsoft trademarks. Users should consult the official exam study guide and Microsoft Learn for authoritative and up-to-date preparation material.

Official resource: [Microsoft Azure Fundamentals (AZ-900)](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/)

## Hackathon Context

Built for the **Vibe Coding Hackathon: AZ-900 Exam Prep Edition (#1MillionDevs)**, inspired by the theme:

*Building Smarter Exam Prep Tools from Our Own Learning Journey.*

The project demonstrates an accessible, hands-on approach to building a focused study tool using modern web technologies.

## Author and Repository

**GitHub:** [Markle-art/recallit](https://github.com/Markle-art/recallit)


Contributions, suggestions, and feedback that improve the learning experience are welcome.
