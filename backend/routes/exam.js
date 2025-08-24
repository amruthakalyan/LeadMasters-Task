const express = require("express");
const Question = require("../models/Question");
const auth = require("../middleware/auth");
const router = express.Router();

// Get random 5 questions
router.get("/questions", auth, async (req, res) => {
  const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
  res.json(questions);
});

// Submit answers
router.post("/submit", auth, async (req, res) => {
  const { answers } = req.body;
  let score = 0;
  for (let ans of answers) {
    const q = await Question.findById(ans.questionId);
    if (q && q.correctAnswer === ans.selected) score++;
  }
  res.json({ score, total: answers.length });
});

module.exports = router;
