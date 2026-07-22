# PROJECT.md

# Language Learning AI

### MVP Product Definition (v1.0)

---

# Vision

Language Learning AI is **not** another language learning application.

It is a lightweight personal learning coach designed for **one student only**.

The purpose of Version 1 is extremely simple:

> Help one learner go from absolute beginner (A0) to B2 French for the TEF / TCF Canada exam within approximately 160 days.

Everything else is secondary.

---

# Primary Goal

The application should answer only one question:

> **What should I study today?**

Every screen, feature and design decision must support this goal.

---

# Project Philosophy

This project values:

* Simplicity over completeness.
* Consistency over intelligence.
* Progress over features.
* Daily habit over automation.

The application is **not** trying to replace a teacher.

The application organizes the learning process.

The AI (ChatGPT or another LLM) is the teacher.

---

# MVP Scope

Version 1 must include only the following capabilities.

## Daily Lesson

Display today's lesson.

Example:

* Grammar
* Vocabulary
* Listening
* Speaking
* Writing
* Homework

---

## Progress Tracking

Track learning progress.

Example:

* Current Day
* Current CEFR Level
* Vocabulary Count
* Grammar Progress
* Homework Completion
* Weekly Score

---

## Curriculum Viewer

Display the predefined learning roadmap.

The curriculum is fixed.

The application never generates new lessons.

---

## Homework

Display homework assigned by the teacher.

Allow the student to mark homework as completed.

---

## Learning Dashboard

Display:

* Today's lesson
* Current progress
* Remaining days
* Current phase
* Weekly objective

---

# What This Application Is NOT

This project intentionally avoids complexity.

Do NOT implement:

* Multi-Agent Systems
* RAG
* Vector Databases
* Semantic Search
* Backend Servers
* Authentication
* User Accounts
* Payments
* Cloud Infrastructure
* Notifications
* Social Features
* Gamification
* AI Lesson Generation
* Automatic Curriculum Planning
* Speech Recognition
* Pronunciation Scoring
* Recommendation Engines

If a feature is not explicitly requested here, **do not build it**.

---

# Target User

Exactly one user.

The developer himself.

There is no need to support multiple students.

---

# Learning Workflow

Every day follows exactly the same workflow.

1. Open the application.
2. See today's lesson.
3. Study with ChatGPT.
4. Complete homework.
5. Mark today's lesson as completed.
6. Update progress.
7. Close the application.

Nothing more.

---

# Teacher

The teacher is external.

The application never teaches.

Instead, it stores learning state.

The teaching happens inside ChatGPT.

---

# Student State

The application must always know:

* Current Day
* Current Phase
* Current Lesson
* Grammar Progress
* Vocabulary Progress
* Listening Progress
* Speaking Progress
* Writing Progress
* Homework Status
* Weekly Test Result

---

# Data Storage

Everything should work locally.

Preferred storage:

* JSON
  or

* SQLite

No backend.

No online database.

---

# Internet Dependency

The application must continue working without internet.

The only external dependency is opening ChatGPT in the browser.

---

# User Interface

The interface should be minimal.

Suggested pages:

## Dashboard

Shows today's lesson.

---

## Curriculum

Shows the roadmap.

---

## Progress

Shows learning progress.

---

## Homework

Shows homework history.

---

## Settings

Very small.

Nothing more.

---

# Design Principles

The UI should feel calm.

Avoid unnecessary animations.

Avoid distractions.

The application should encourage studying, not browsing.

---

# Technical Principles

Keep the codebase small.

Readable code is more important than clever code.

Avoid unnecessary abstractions.

Avoid overengineering.

---

# Future Vision

After the student successfully reaches B2, future versions may include:

* Local AI Models
* Speaking Evaluation
* Pronunciation Feedback
* Multi-language Courses
* Multi-user Support
* AI Curriculum Adaptation
* Offline AI Teacher

These are Version 2 features.

They must not appear in Version 1.

---

# Definition of Done

Version 1 is complete when a learner can:

* Open the app.
* See today's lesson.
* Follow the curriculum.
* Track progress.
* Complete homework.
* Continue the next day.

Nothing else is required.

---

# Development Rules

Every implementation decision must follow these rules:

1. Keep it simple.
2. Build only what is necessary.
3. Never optimize for scale.
4. Never optimize for multiple users.
5. Never introduce unnecessary AI.
6. Never add features outside the MVP.
7. Finish quickly.
8. The application exists to support studying, not to become the project itself.

---

# Final Principle

> The student's progress is more important than the software.

If adding a feature delays learning, do not build the feature.
