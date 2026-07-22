const express = require('express');
const router = express.Router();
const allExams = require('../data/index');

// GET /api/exams - list with filter, search, pagination
router.get('/', (req, res) => {
  try {
    let results = [...allExams];
    const { volume, search, difficulty, category, tags, page = 1, limit = 20 } = req.query;

    if (volume) {
      results = results.filter(e => e.volume === parseInt(volume));
    }
    if (difficulty) {
      results = results.filter(e => e.difficulty === parseInt(difficulty));
    }
    if (category) {
      results = results.filter(e =>
        e.category && e.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    if (tags) {
      const tagList = tags.split(',').map(t => t.trim().toLowerCase());
      results = results.filter(e =>
        e.tags && tagList.some(t => e.tags.map(x => x.toLowerCase()).includes(t))
      );
    }
    if (search) {
      const q = search.toLowerCase();
      results = results.filter(e =>
        e.name.toLowerCase().includes(q) ||
        (e.acronym && e.acronym.toLowerCase().includes(q)) ||
        (e.conductingBody && e.conductingBody.toLowerCase().includes(q)) ||
        (e.category && e.category.toLowerCase().includes(q)) ||
        (e.tags && e.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    const total = results.length;
    const pageNum = parseInt(page);
    const limitNum = Math.min(parseInt(limit), 100);
    const start = (pageNum - 1) * limitNum;
    const paginated = results.slice(start, start + limitNum);

    res.json({
      exams: paginated,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      limit: limitNum
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exams', details: err.message });
  }
});

// GET /api/exams/random - get random exam for discovery
router.get('/random', (req, res) => {
  const count = Math.min(parseInt(req.query.count) || 5, 20);
  const shuffled = [...allExams].sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, count));
});

// GET /api/exams/search/suggestions - autocomplete
router.get('/search/suggestions', (req, res) => {
  const { q } = req.query;
  if (!q || q.length < 2) return res.json([]);
  const query = q.toLowerCase();
  const suggestions = allExams
    .filter(e =>
      e.name.toLowerCase().includes(query) ||
      (e.acronym && e.acronym.toLowerCase().includes(query))
    )
    .slice(0, 8)
    .map(e => ({ id: e.id, name: e.name, acronym: e.acronym, volume: e.volume }));
  res.json(suggestions);
});

// GET /api/exams/:id - single exam
router.get('/:id', (req, res) => {
  const exam = allExams.find(e => e.id === req.params.id);
  if (!exam) {
    return res.status(404).json({ error: `Exam with id '${req.params.id}' not found` });
  }
  res.json(exam);
});

module.exports = router;
