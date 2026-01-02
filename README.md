# HBK – QA Automation Project (Playwright)

QA Automation portfolio project built with **Playwright**.  
Application under test: https://automationintesting.online/ (Shady Meadows B&B)

---

## Project Scope

### UI Automated Tests
- Admin login (valid / invalid)
- Contact form validation
  - valid submission
  - invalid email
  - invalid phone
  - required fields

### API Automated Tests
- Get all rooms
- Get room by ID
- Get room with invalid ID
- Rooms endpoint validation

### Unstable Tests
Some tests are intentionally excluded from the main execution and stored under:

e2e/_unstable/

These tests are kept for:
- investigation
- debugging
- future stabilization

---

## Tech Stack
- Node.js
- Playwright Test Runner
- JavaScript
- HTML Report

---

## Project Structure

e2e/
├── ui/          # UI automated tests
├── api/         # API automated tests
└── _unstable/   # unstable / flaky tests

---

## How to Run Tests

Install dependencies:
npm ci  
npx playwright install

Run all stable tests (Chromium):
npx playwright test --project=chromium

Open HTML report:
npx playwright show-report

---

## Author
Fatima Zahra Idmhand  
QA Automation Engineer
