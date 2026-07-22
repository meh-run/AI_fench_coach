# MEMORY.md

# Student Memory Specification

---

# Purpose

This file represents the complete learning state of the student.

It is the single source of truth for all progress.

The application updates this file after every learning session.

The AI teacher reads this file before starting a new lesson.

---

# Rules

* Never guess values.
* Never overwrite completed progress.
* Update only after a lesson is finished.
* Preserve learning history.
* One student only.

---

# Student Profile

```yaml
student:

  name: Mehran

  target_language: French

  exam: TEF / TCF Canada

  target_level: B2

  current_level: A0

  start_date: 2026-07-22

  target_date: 2026-12-31

  total_days: 160
```

---

# Current Progress

```yaml
progress:

  current_day: 1

  current_phase: Phase 1

  current_lesson: Lesson 1

  completed_lessons: 0

  completion_percentage: 0
```

---

# CEFR Progress

```yaml
cefr:

  current: A0

  next_goal: A1

  estimated_readiness: 0
```

---

# Grammar Progress

```yaml
grammar:

  completed: []

  current: null

  next:

    - Alphabet

    - Pronunciation

    - Greetings
```

---

# Vocabulary Progress

```yaml
vocabulary:

  learned_words: 0

  review_words: 0

  mastery_percentage: 0

  weak_topics: []

  strong_topics: []
```

---

# Listening

```yaml
listening:

  total_minutes: 0

  completed_resources: []

  comprehension_score: 0
```

---

# Speaking

```yaml
speaking:

  total_sessions: 0

  confidence_score: 0

  pronunciation_notes: []
```

---

# Writing

```yaml
writing:

  total_assignments: 0

  completed: []

  average_score: 0
```

---

# Reading

```yaml
reading:

  completed_texts: []

  comprehension_score: 0
```

---

# Homework

```yaml
homework:

  assigned: []

  completed: []

  pending: []
```

---

# Weekly Tests

```yaml
weekly_tests:

  completed: []

  average_score: 0
```

---

# Mock Exams

```yaml
mock_exams:

  completed: []

  latest_score: null

  estimated_exam_level: A0
```

---

# Study Statistics

```yaml
statistics:

  total_study_days: 0

  total_hours: 0

  streak: 0

  missed_days: 0
```

---

# Learning Resources

```yaml
resources:

  current_book: null

  current_podcast: null

  current_video: null

  anki_deck: null
```

---

# Weakness Tracking

```yaml
weaknesses:

  grammar: []

  vocabulary: []

  listening: []

  speaking: []

  writing: []
```

---

# Teacher Notes

This section is written only by the AI teacher.

```yaml
teacher_notes:

  latest_feedback: ""

  next_focus: ""

  reminders: []
```

---

# Session History

Every completed lesson appends one record.

Example

```yaml
history:

  - day: 1

    lesson: 1

    completed: true

    grammar:

      - Alphabet

    vocabulary:

      - Greetings

    listening:

      minutes: 15

    speaking:

      minutes: 10

    writing:

      completed: true

    homework:

      assigned: Exercise 1

      completed: true

    teacher_comment: Good progress.
```

---

# Update Policy

After each lesson:

* Update progress.
* Update vocabulary count.
* Update completed grammar topics.
* Update homework.
* Append one history record.
* Never delete history.

---

# Final Principle

This file is the student's memory.

Every AI model must read this file before teaching.

Every lesson ends by updating this file.

Nothing else stores learning progress.
