# 🚀 ExamArena — Comprehensive Engineering Exam Roadmap Tool

> **500+ Indian & International Engineering Exams** | Real-time AI-powered | Full-stack Node.js + Gemini AI

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

---

## 📋 What is ExamArena?

ExamArena is the most comprehensive engineering career guidance platform covering **500+ exams** across 6 volumes:

| Volume | Category | Count |
|--------|----------|-------|
| Vol. 1 ⚙️ | Indian Technical Engineering Exams (GATE, ESE, ISRO, BARC, DRDO, PSUs) | 100+ |
| Vol. 2 🏛️ | Government Non-Technical Exams (UPSC, SSC, Banking, Railways) | 85+ |
| Vol. 3 🏗️ | State Engineering Services & AE Exams (all states) | 108+ |
| Vol. 4 🎓 | MBA, Management & Higher Studies (CAT, GATE M.Tech, Research) | 63+ |
| Vol. 5 🌍 | International Exams & Licensure (GRE, TOEFL, FE, PE, CEng) | 88+ |
| Vol. 6 🔬 | Fellowships, Research & Defence (CSIR, DST, NDA, CDS, Scholarships) | 86+ |

---

## ✨ Features

- 🔍 **Real-time Search** with instant suggestions
- 🤖 **Gemini AI Assistant** for personalized exam guidance
- 📊 **Compare Mode** — side-by-side exam comparison (up to 3)
- ⭐ **Bookmarks** saved locally
- 🗺️ **Career Roadmap** visual flowchart
- 📱 **Fully Responsive** — mobile, tablet, desktop
- ⚡ **Live AI Updates** — get the latest exam news via Gemini
- 🎯 **Smart Filters** — by volume, difficulty, salary, category

---

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **AI**: Google Gemini 1.5 Flash (via @google/generative-ai)
- **Frontend**: Vanilla HTML/CSS/JS (premium glassmorphism UI)
- **Hosting**: Render
- **Data**: 500+ exam objects with complete details

---

## 🚀 Quick Start (Local Development)

```bash
# Clone the repository
git clone https://github.com/prakharmishra00000-cell/ExamArena.git
cd ExamArena

# Install dependencies
npm install

# Create .env file
echo "GEMINI_API_KEY=your_gemini_api_key_here" > .env
echo "PORT=3000" >> .env

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 🌐 Deploy to Render

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial ExamArena deployment"
git push origin main
```

### Step 2: Create Render Web Service
1. Go to [render.com](https://render.com) and sign in
2. Click **New** → **Web Service**
3. Connect your GitHub repo: `ExamArena`
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment**: Node

### Step 3: Set Environment Variables
In Render dashboard → Environment → Add:
```
GEMINI_API_KEY = <YOUR_GEMINI_API_KEY>
PORT = 3000
NODE_ENV = production
```

### Step 4: Deploy
Click **Deploy** — your app will be live at `https://exam-arena.onrender.com`

---

## 📁 Project Structure

```
ExamArena/
├── server.js              # Express server (main entry point)
├── package.json           # Node.js dependencies
├── render.yaml            # Render deployment config
├── .gitignore
├── README.md
├── routes/
│   ├── exams.js           # /api/exams endpoints
│   └── ai.js              # /api/ai (Gemini) endpoints
├── data/
│   ├── index.js           # Master aggregator
│   ├── vol1_technical.js  # 100+ Indian Technical Exams
│   ├── vol2_government.js # 85+ Govt Non-Technical Exams
│   ├── vol3_state.js      # 108+ State AE/JE Exams
│   ├── vol4_higher.js     # 63+ MBA/Higher Studies
│   ├── vol5_international.js # 88+ International Exams
│   └── vol6_fellowship.js # 86+ Fellowships & Defence
└── public/
    ├── index.html         # Premium SPA frontend
    ├── css/
    │   └── style.css      # Glassmorphism dark theme
    └── js/
        └── app.js         # Complete frontend logic
```

---

## 🔌 API Reference

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/exams` | GET | List exams (filter: volume, search, difficulty, page, limit) |
| `/api/exams/:id` | GET | Get single exam details |
| `/api/exams/search/suggestions?q=` | GET | Autocomplete suggestions |
| `/api/volumes` | GET | List all 6 volumes with counts |
| `/api/stats` | GET | Database statistics |
| `/api/ai/ask` | POST | Ask Gemini any exam question |
| `/api/ai/compare` | POST | AI-powered exam comparison |
| `/api/ai/realtime/:id` | POST | Get real-time exam updates |
| `/api/ai/roadmap` | POST | Generate personalized career roadmap |
| `/api/health` | GET | Health check |

---

## 📝 Each Exam Includes

- ✅ Full exam name & acronym
- ✅ Conducting body
- ✅ Complete eligibility criteria (degree, age, percentage, nationality)
- ✅ Subject-wise syllabus
- ✅ Exam pattern (stages, marks, duration, types)
- ✅ Validity period
- ✅ Post-qualifying benefits
- ✅ Salary / Pay Band / CTC
- ✅ Career progression path
- ✅ Official website URL
- ✅ Preparation resources
- ✅ Difficulty rating (1-5 stars)
- ✅ Step-by-step selection process

---

## 🤝 Contributing

Feel free to submit PRs to add new exams or update existing data.

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

*Built with ❤️ for engineering aspirants across India and the world.*
