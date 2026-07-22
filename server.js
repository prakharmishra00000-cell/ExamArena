require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const examRoutes = require('./routes/exams');
const aiRoutes = require('./routes/ai');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'fonts.gstatic.com'],
      fontSrc: ["'self'", 'fonts.googleapis.com', 'fonts.gstatic.com'],
      connectSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
}));

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  message: { error: 'Too many requests, please try again later.' }
});
app.use('/api/', limiter);

// AI rate limiter (more strict)
const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  message: { error: 'AI rate limit exceeded. Please wait a minute.' }
});
app.use('/api/ai/', aiLimiter);

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/exams', examRoutes);
app.use('/api/ai', aiRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'ExamArena API'
  });
});

// Stats endpoint
app.get('/api/stats', (req, res) => {
  const allExams = require('./data/index');
  const stats = {
    totalExams: allExams.length,
    volumes: {},
    avgDifficulty: 0,
    categories: {}
  };

  let totalDiff = 0;
  allExams.forEach(exam => {
    stats.volumes[exam.volume] = (stats.volumes[exam.volume] || 0) + 1;
    totalDiff += exam.difficulty || 3;
    stats.categories[exam.category] = (stats.categories[exam.category] || 0) + 1;
  });
  stats.avgDifficulty = (totalDiff / allExams.length).toFixed(1);
  res.json(stats);
});

// Volumes endpoint
app.get('/api/volumes', (req, res) => {
  const allExams = require('./data/index');
  const volumeMap = {
    1: { id: 1, name: 'Indian Technical Engineering Exams', shortName: 'Technical', color: '#3b82f6', icon: '⚙️' },
    2: { id: 2, name: 'Government Non-Technical Exams', shortName: 'Government', color: '#8b5cf6', icon: '🏛️' },
    3: { id: 3, name: 'State Engineering Services & AE Exams', shortName: 'State AE', color: '#10b981', icon: '🏗️' },
    4: { id: 4, name: 'MBA, Management & Higher Studies', shortName: 'Higher Studies', color: '#f59e0b', icon: '🎓' },
    5: { id: 5, name: 'International Exams & Licensure', shortName: 'International', color: '#ef4444', icon: '🌍' },
    6: { id: 6, name: 'Fellowships, Research & Defence', shortName: 'Research & Defence', color: '#06b6d4', icon: '🔬' }
  };

  const volumeCounts = {};
  allExams.forEach(e => { volumeCounts[e.volume] = (volumeCounts[e.volume] || 0) + 1; });

  const volumes = Object.values(volumeMap).map(v => ({
    ...v,
    count: volumeCounts[v.id] || 0
  }));
  res.json(volumes);
});

// Serve frontend for all non-API routes (SPA fallback)
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    res.status(404).json({ error: 'API endpoint not found' });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ExamArena API running on http://localhost:${PORT}`);
  console.log(`📚 Serving ${require('./data/index').length} exams`);
  console.log(`🤖 Gemini AI: ${process.env.GEMINI_API_KEY ? 'Connected' : 'NOT CONFIGURED - set GEMINI_API_KEY'}`);
});

module.exports = app;
