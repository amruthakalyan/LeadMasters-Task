It is a full-stack exam-taking application (student-side only) built using React.js, Node.js (Express), and MongoDB. The application allows students to register, log in, take an exam, answer randomized MCQs, track their time with an exam timer, and view their results upon submission.
<br>
🚀 Features

✅ User Authentication

Secure registration & login with JWT-based authentication

✅ Exam Module

Fetches randomized questions from backend

Supports Next/Previous navigation

Displays multiple-choice questions with options

Tracks answers in real-time

✅ Timer & Auto Submit

30-minute countdown timer

Auto-submits exam when time expires

✅ Result Display

Calculates and shows final score after submission

✅ Responsive Design

Mobile-first responsive layout

Modern dark theme UI with clean styling
<br>

🛠️ Tech Stack

Frontend (React.js)

React (Hooks & Context API for state management)

Axios (API calls)

Responsive CSS (Custom styles + Flex/Grid)

Backend (Node.js + Express.js)

Express.js for API handling

JWT for authentication

bcryptjs for password hashing

Database (MongoDB)

Stores users, questions, and exam results 

<br>
📌 API Endpoints
Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login & get JWT

Exam

GET /api/exam/questions → Fetch random questions

POST /api/exam/submit → Submit answers & calculate score

Results

GET /api/result/:userId → Fetch user’s result
