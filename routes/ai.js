const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_CONTEXT = `You are ExamArena AI — an expert assistant for engineering career guidance and exam preparation in India and worldwide. 
You have deep knowledge of:
- All Indian engineering exams: GATE, ESE/IES, ISRO, BARC, DRDO, PSU exams (BHEL, NTPC, ONGC, IOCL, HPCL, SAIL, HAL, BEL, NPCIL, GAIL, etc.)
- Government exams: UPSC CSE, SSC CGL, CDS, NDA, Banking (IBPS, SBI, RBI), Railways (RRB JE, NTPC, Group D)
- State Engineering Service exams for all Indian states
- MBA entrances: CAT, XAT, SNAP, NMAT, CMAT, GMAT
- Research/Fellowship exams: CSIR NET, UGC NET, JRF, GATE for PhD, DST-INSPIRE, PMRF
- International exams: GRE, TOEFL, IELTS, PTE, FE Exam, PE Exam, Chartered Engineer (UK/Australia/Canada)
- Defence entries: NDA, CDS, TGC, AFCAT, UES, Coast Guard
- All state AE/JE exams: UPPCL, KPTCL, TANGEDCO, APTRANSCO, TSSPDCL, MSEDCL, etc.

Always provide:
- Accurate eligibility criteria
- Complete syllabus topics
- Current salary ranges and pay bands
- Clear career progression paths
- Official website URLs
- Practical preparation advice
- Recent changes to exam patterns if known

Be concise, accurate, and helpful. Format responses with clear headings and bullet points.`;

// POST /api/ai/ask - General exam question
router.post('/ask', async (req, res) => {
  try {
    const { question, examId, context } = req.body;
    if (!question || question.trim().length === 0) {
      return res.status(400).json({ error: 'Question is required' });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'AI service not configured. Set GEMINI_API_KEY environment variable.' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    let prompt = SYSTEM_CONTEXT + '\n\n';
    
    if (examId) {
      const allExams = require('../data/index');
      const exam = allExams.find(e => e.id === examId);
      if (exam) {
        prompt += `Context - Exam Details:\n${JSON.stringify(exam, null, 2)}\n\n`;
      }
    }
    
    if (context) {
      prompt += `Additional context: ${context}\n\n`;
    }
    
    prompt += `User Question: ${question}\n\nProvide a comprehensive, accurate, and helpful response:`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    res.json({
      answer: text,
      model: 'gemini-1.5-flash',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('AI Error:', err);
    res.status(500).json({ 
      error: 'AI request failed', 
      details: err.message 
    });
  }
});

// POST /api/ai/compare - Compare exams
router.post('/compare', async (req, res) => {
  try {
    const { examIds } = req.body;
    if (!examIds || examIds.length < 2) {
      return res.status(400).json({ error: 'At least 2 exam IDs required for comparison' });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'AI service not configured' });
    }

    const allExams = require('../data/index');
    const exams = examIds.map(id => allExams.find(e => e.id === id)).filter(Boolean);

    if (exams.length < 2) {
      return res.status(404).json({ error: 'One or more exams not found' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const prompt = `${SYSTEM_CONTEXT}

Compare these ${exams.length} exams in detail:
${exams.map((e, i) => `\nExam ${i+1}: ${JSON.stringify(e, null, 2)}`).join('\n')}

Provide a structured comparison covering:
1. Difficulty & Competition Level
2. Salary & Benefits
3. Career Growth Potential
4. Preparation Time Required
5. Job Security & Stability
6. Which exam suits which type of candidate
7. Final Recommendation

Format with clear sections and bullet points.`;

    const result = await model.generateContent(prompt);
    res.json({
      comparison: result.response.text(),
      exams: exams.map(e => ({ id: e.id, name: e.name, acronym: e.acronym })),
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Compare AI Error:', err);
    res.status(500).json({ error: 'Comparison failed', details: err.message });
  }
});

// POST /api/ai/realtime - Get real-time updated exam info
router.post('/realtime/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'AI service not configured' });
    }

    const allExams = require('../data/index');
    const exam = allExams.find(e => e.id === id);

    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: { responseMimeType: 'application/json' }
    });
    const prompt = `${SYSTEM_CONTEXT}

For the exam: ${exam.name} (${exam.acronym})

Our static database has this information:
${JSON.stringify(exam, null, 2)}

You are an expert data retrieval system. Return ONLY a valid JSON object with the following exact keys, containing accurate and real-time data for this specific exam. If data is unknown or highly variable, provide a realistic estimate or common range (e.g., "500-1000", "Irregular"). DO NOT use markdown code blocks like \`\`\`json, just return the raw JSON object.

Keys required:
- notificationFrequency (e.g., "Annual", "Biannual", "Irregular")
- examMonth (e.g., "February")
- applicationMonth (e.g., "September - October")
- vacancies (e.g., "Varies (approx 2000+)")
- applicants (e.g., "~8-10 Lakhs")
- successRate (e.g., "1-2%")
- applicationFee (e.g., "General: Rs 100, SC/ST: Free")
- reservationRules (brief description)
- attemptsAllowed (e.g., "6 for General, 9 for OBC")
- ageRelaxation (e.g., "SC/ST: +5 years, OBC: +3 years")
- postingLocations (e.g., "All over India")
- trainingPeriod (e.g., "1-2 years")
- bondAgreement (e.g., "Rs 5 Lakhs for 3 years" or "None")
- promotionTimeline (e.g., "Time-bound after 3-4 years")
- previousCutoffs (e.g., "2023: Gen 72.5, OBC 68.0")
- previousPapersUrl (link or "Available on official site")
- importantBooks (short array of strings)
- officialSyllabusPdf (link or "Available on official site")
- latestNotificationPdf (link or "Available on official site")
- examCalendar (link or "Check UPSC/SSC calendar")
- recentChanges (brief description of any pattern changes)
- physicalStandards (brief or "Not applicable")
- medicalStandards (brief or "Standard medical fitness")
- interviewDetails (e.g., "Personality test for 275 marks")
- careerAlternatives (brief suggestion)
`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    let parsedJson;
    try {
      parsedJson = JSON.parse(responseText.replace(/```json/g, '').replace(/```/g, '').trim());
    } catch (e) {
      console.error("Failed to parse JSON from Gemini:", responseText);
      return res.status(500).json({ error: 'Failed to parse AI response' });
    }

    res.json({
      examId: id,
      examName: exam.name,
      realtimeData: parsedJson,
      timestamp: new Date().toISOString(),
      note: 'Information fetched dynamically by Gemini AI. Verify from official website.'
    });
  } catch (err) {
    console.error('Realtime AI Error:', err);
    res.status(500).json({ error: 'Realtime info fetch failed', details: err.message });
  }
});

// POST /api/ai/roadmap - Career roadmap for a specific goal
router.post('/roadmap', async (req, res) => {
  try {
    const { goal, currentStatus, interests } = req.body;
    if (!goal) {
      return res.status(400).json({ error: 'Goal is required' });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'AI service not configured' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const prompt = `${SYSTEM_CONTEXT}

Create a detailed career roadmap for:
Goal: ${goal}
Current Status: ${currentStatus || 'B.E./B.Tech student or graduate'}
Interests: ${interests || 'Mechanical Engineering'}

Provide:
1. Recommended exam sequence (which exams to appear in what order)
2. Timeline (year-by-year plan)
3. Preparation strategy for each exam
4. Backup options at each stage
5. Resources and study materials
6. Realistic salary progression
7. Do's and Don'ts

Format as a structured roadmap with clear phases.`;

    const result = await model.generateContent(prompt);
    res.json({
      roadmap: result.response.text(),
      goal,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Roadmap AI Error:', err);
    res.status(500).json({ error: 'Roadmap generation failed', details: err.message });
  }
});

module.exports = router;
