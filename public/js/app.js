// ExamArena Client Application - Real API & AI Integration

const state = {
    currentVolume: 'all',
    searchQuery: '',
    currentPage: 1,
    totalPages: 1,
    exams: [],
    stats: null,
    bookmarks: JSON.parse(localStorage.getItem('examBookmarks') || '[]'),
    compareSet: new Set(),
    filters: {
        volume: 'all',
        difficulty: null,
        category: '',
        edu: '',
        sector: '',
        location: '',
        domain: '',
        branch: '',
        salaryGt10: false,
        noInt: false,
        women: false,
        finalYear: false,
        remote: false,
        maxAge: 45
    },
    currentExamId: null,
    realtimeCache: {}
};

// DOM Elements
let elements = {};

function initElements() {
    elements = {
        navbar: document.getElementById('navbar'),
        navTabs: document.querySelectorAll('.nav-tabs .tab-btn'),
        mainSearch: document.getElementById('mainSearch'),
        searchSuggestions: document.getElementById('searchSuggestions'),
        statTotalExams: document.getElementById('statTotalExams'),
        filterToggle: document.getElementById('filterToggle'),
        filterPanel: document.getElementById('filterPanel'),
        closeFilters: document.getElementById('closeFilters'),
        applyFiltersBtn: document.getElementById('applyFiltersBtn'),
        resetFiltersBtn: document.getElementById('resetFiltersBtn'),
        categoryFilter: document.getElementById('categoryFilter'),
        
        // Advanced filters
        filterEdu: document.getElementById('filterEdu'),
        filterSector: document.getElementById('filterSector'),
        filterLocation: document.getElementById('filterLocation'),
        filterDomain: document.getElementById('filterDomain'),
        filterBranch: document.getElementById('filterBranch'),
        filterSalary: document.getElementById('filterSalary'),
        filterNoInt: document.getElementById('filterNoInt'),
        filterWomen: document.getElementById('filterWomen'),
        filterFinalYear: document.getElementById('filterFinalYear'),
        filterRemote: document.getElementById('filterRemote'),
        filterAge: document.getElementById('filterAge'),
        ageValText: document.getElementById('ageValText'),
        
        examGrid: document.getElementById('examGrid'),
        gridTitle: document.getElementById('gridTitle'),
        resultsCount: document.getElementById('resultsCount'),
        loadMoreBtn: document.getElementById('loadMoreBtn'),
        
        // Drawer
        examDrawer: document.getElementById('examDrawer'),
        drawerOverlay: document.getElementById('drawerOverlay'),
        closeDrawer: document.getElementById('closeDrawer'),
        dTabs: document.querySelectorAll('.d-tab'),
        tabPanes: document.querySelectorAll('.tab-pane'),
        
        // Realtime container
        realtimeLoader: document.getElementById('realtimeLoader'),
        realtimeContent: document.getElementById('realtimeContent'),
        detRealtimeGrid: document.getElementById('detRealtimeGrid'),
        
        // Compare
        bookmarkToggle: document.getElementById('bookmarkToggle'),
        navCompareBtn: document.getElementById('navCompareBtn'),
        compareCount: document.getElementById('compareCount'),
        compareBar: document.getElementById('compareBar'),
        compareItems: document.getElementById('compareItems'),
        clearCompareBtn: document.getElementById('clearCompareBtn'),
        compareNowBtn: document.getElementById('compareNowBtn'),
        compareModal: document.getElementById('compareModal'),
        compareTable: document.getElementById('compareTable'),
        
        // AI Chat
        aiChatFab: document.getElementById('aiChatFab'),
        aiChatPanel: document.getElementById('aiChatPanel'),
        closeChatBtn: document.getElementById('closeChatBtn'),
        chatMessages: document.getElementById('chatMessages'),
        chatForm: document.getElementById('chatForm'),
        chatInput: document.getElementById('chatInput'),
        chatContext: document.getElementById('chatContext')
    };
}

function init() {
    initElements();
    setupEventListeners();
    fetchStats();
    fetchExams();
}

function setupEventListeners() {
    // Nav Volume Tabs
    elements.navTabs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            elements.navTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filters.volume = btn.dataset.volume;
            state.currentPage = 1;
            fetchExams();
        });
    });

    // Search Input
    let debounceTimer;
    elements.mainSearch.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value.trim();
        state.searchQuery = query;
        
        if (query.length >= 2) {
            fetchSearchSuggestions(query);
        } else {
            elements.searchSuggestions.style.display = 'none';
        }

        debounceTimer = setTimeout(() => {
            state.currentPage = 1;
            fetchExams();
        }, 300);
    });

    // Filter Panel Toggles
    elements.filterToggle.addEventListener('click', () => elements.filterPanel.classList.add('open'));
    elements.closeFilters.addEventListener('click', () => elements.filterPanel.classList.remove('open'));
    
    // Age Slider
    if (elements.filterAge) {
        elements.filterAge.addEventListener('input', (e) => {
            elements.ageValText.textContent = e.target.value >= 45 ? 'Any' : `≤ ${e.target.value} yrs`;
        });
    }

    // Apply & Reset Filters
    elements.applyFiltersBtn.addEventListener('click', () => {
        const diffInput = document.querySelector('input[name="difficulty"]:checked');
        state.filters.difficulty = diffInput ? diffInput.value : null;
        state.filters.category = elements.categoryFilter.value;
        state.filters.edu = elements.filterEdu ? elements.filterEdu.value : '';
        state.filters.sector = elements.filterSector ? elements.filterSector.value : '';
        state.filters.location = elements.filterLocation ? elements.filterLocation.value : '';
        state.filters.domain = elements.filterDomain ? elements.filterDomain.value : '';
        state.filters.branch = elements.filterBranch ? elements.filterBranch.value : '';
        state.filters.salaryGt10 = elements.filterSalary ? elements.filterSalary.checked : false;
        state.filters.noInt = elements.filterNoInt ? elements.filterNoInt.checked : false;
        state.filters.women = elements.filterWomen ? elements.filterWomen.checked : false;
        state.filters.finalYear = elements.filterFinalYear ? elements.filterFinalYear.checked : false;
        state.filters.remote = elements.filterRemote ? elements.filterRemote.checked : false;
        state.filters.maxAge = elements.filterAge ? parseInt(elements.filterAge.value) : 45;
        
        state.currentPage = 1;
        elements.filterPanel.classList.remove('open');
        fetchExams();
    });

    elements.resetFiltersBtn.addEventListener('click', () => {
        document.querySelectorAll('input[name="difficulty"]').forEach(r => r.checked = false);
        if (elements.categoryFilter) elements.categoryFilter.value = '';
        if (elements.filterEdu) elements.filterEdu.value = '';
        if (elements.filterSector) elements.filterSector.value = '';
        if (elements.filterLocation) elements.filterLocation.value = '';
        if (elements.filterDomain) elements.filterDomain.value = '';
        if (elements.filterBranch) elements.filterBranch.value = '';
        if (elements.filterSalary) elements.filterSalary.checked = false;
        if (elements.filterNoInt) elements.filterNoInt.checked = false;
        if (elements.filterWomen) elements.filterWomen.checked = false;
        if (elements.filterFinalYear) elements.filterFinalYear.checked = false;
        if (elements.filterRemote) elements.filterRemote.checked = false;
        if (elements.filterAge) {
            elements.filterAge.value = 45;
            elements.ageValText.textContent = 'Any';
        }
        
        state.filters = {
            volume: state.filters.volume,
            difficulty: null, category: '', edu: '', sector: '', location: '', domain: '', branch: '',
            salaryGt10: false, noInt: false, women: false, finalYear: false, remote: false, maxAge: 45
        };
        
        state.currentPage = 1;
        elements.filterPanel.classList.remove('open');
        fetchExams();
    });

    // Drawer Controls
    elements.closeDrawer.addEventListener('click', closeDrawer);
    elements.drawerOverlay.addEventListener('click', () => {
        closeDrawer();
        elements.compareModal.classList.remove('show');
    });

    // Drawer Tabs
    elements.dTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            elements.dTabs.forEach(t => t.classList.remove('active'));
            elements.tabPanes.forEach(p => p.classList.remove('active'));
            
            const btn = e.currentTarget;
            btn.classList.add('active');
            
            const targetId = btn.dataset.target;
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');
            
            if (targetId === 'tab-realtime') {
                loadRealtimeData(state.currentExamId);
            }
        });
    });

    // Load More
    elements.loadMoreBtn.addEventListener('click', () => {
        state.currentPage++;
        fetchExams(true);
    });

    // Bookmarks Navigation
    elements.bookmarkToggle.addEventListener('click', () => {
        elements.navTabs.forEach(t => t.classList.remove('active'));
        elements.gridTitle.textContent = "My Saved Bookmarks";
        const bookmarkedExams = state.exams.filter(e => state.bookmarks.includes(e.id));
        renderCards(bookmarkedExams);
        elements.resultsCount.textContent = `${bookmarkedExams.length} saved`;
        elements.loadMoreBtn.style.display = 'none';
    });

    // Compare Controls
    elements.clearCompareBtn.addEventListener('click', () => {
        state.compareSet.clear();
        updateCompareBar();
        document.querySelectorAll('.compare-cb').forEach(cb => cb.checked = false);
    });
    elements.compareNowBtn.addEventListener('click', openCompareModal);
    const modalClose = document.querySelector('.close-modal');
    if (modalClose) modalClose.addEventListener('click', () => elements.compareModal.classList.remove('show'));
    
    // AI Chat
    elements.aiChatFab.addEventListener('click', () => elements.aiChatPanel.classList.add('open'));
    elements.closeChatBtn.addEventListener('click', () => elements.aiChatPanel.classList.remove('open'));
    elements.chatForm.addEventListener('submit', handleChatSubmit);
}

// Real Backend API Calls
async function fetchStats() {
    try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        state.stats = data;
        animateCounter(elements.statTotalExams, 0, data.totalExams || 538, 2000);
    } catch (err) {
        console.error('Failed to fetch stats:', err);
        animateCounter(elements.statTotalExams, 0, 538, 2000);
    }
}

async function fetchSearchSuggestions(q) {
    try {
        const res = await fetch(`/api/exams/search/suggestions?q=${encodeURIComponent(q)}`);
        const suggestions = await res.json();
        
        elements.searchSuggestions.innerHTML = '';
        if (Array.isArray(suggestions) && suggestions.length > 0) {
            suggestions.forEach(s => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerHTML = `<span class="volume-badge vol-${s.volume}-badge">Vol.${s.volume}</span>
                                 <div><strong>${s.acronym}</strong> - ${s.name}</div>`;
                div.addEventListener('click', () => {
                    elements.searchSuggestions.style.display = 'none';
                    elements.mainSearch.value = s.acronym;
                    state.searchQuery = s.acronym;
                    fetchExams();
                });
                elements.searchSuggestions.appendChild(div);
            });
            elements.searchSuggestions.style.display = 'block';
        } else {
            elements.searchSuggestions.style.display = 'none';
        }
    } catch (err) {
        console.error('Suggestions error:', err);
    }
}

async function fetchExams(append = false) {
    if (!append) {
        elements.examGrid.innerHTML = Array(6).fill('<div class="exam-card skeleton" style="height: 250px;"></div>').join('');
    }
    
    try {
        const params = new URLSearchParams();
        if (state.filters.volume !== 'all') params.append('volume', state.filters.volume);
        if (state.searchQuery) params.append('search', state.searchQuery);
        if (state.filters.difficulty) params.append('difficulty', state.filters.difficulty);
        if (state.filters.category) params.append('category', state.filters.category);
        params.append('page', state.currentPage);
        params.append('limit', 12);
        
        const res = await fetch(`/api/exams?${params.toString()}`);
        const data = await res.json();
        
        let filtered = data.exams || [];

        // Apply client-side advanced filter matching for instant accuracy
        if (state.filters.edu) {
            filtered = filtered.filter(e => JSON.stringify(e.eligibility || {}).toLowerCase().includes(state.filters.edu.toLowerCase()));
        }
        if (state.filters.sector) {
            filtered = filtered.filter(e => (e.category || '').toLowerCase().includes(state.filters.sector.toLowerCase()) || JSON.stringify(e).toLowerCase().includes(state.filters.sector.toLowerCase()));
        }
        if (state.filters.salaryGt10) {
            filtered = filtered.filter(e => {
                const salStr = JSON.stringify(e.salary || {});
                return salStr.includes('LPA') || salStr.includes('Level 10') || salStr.includes('Level 11') || salStr.includes('56,100') || salStr.includes('70,000');
            });
        }
        if (state.filters.noInt) {
            filtered = filtered.filter(e => {
                const proc = JSON.stringify(e.selectionProcess || []);
                return !proc.toLowerCase().includes('interview');
            });
        }

        if (!append) state.exams = [];
        state.exams = [...state.exams, ...filtered];
        
        state.totalPages = data.totalPages || 1;

        if (!append) {
            elements.gridTitle.textContent = state.filters.volume === 'all' ? "All Exams" : `Volume ${state.filters.volume} Exams`;
        }
        elements.resultsCount.textContent = `${data.total || filtered.length} results`;
        
        renderCards(filtered, append);
        
        elements.loadMoreBtn.style.display = (state.currentPage < state.totalPages) ? 'inline-block' : 'none';
    } catch (err) {
        console.error('Fetch exams error:', err);
        elements.examGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 2rem;">Error loading exams. Please try again.</div>';
    }
}

// Render Functions
function renderCards(exams, append = false) {
    if (!append) elements.examGrid.innerHTML = '';
    const template = document.getElementById('examCardTemplate');
    
    if (exams.length === 0 && !append) {
        elements.examGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-secondary);">No exams found matching your search and filter criteria.</div>';
        return;
    }
    
    exams.forEach(exam => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.exam-card');
        
        card.dataset.id = exam.id;
        card.style.setProperty('--vol1', `var(--vol${exam.volume})`);
        
        const badge = clone.querySelector('.volume-badge');
        badge.textContent = `Vol.${exam.volume}`;
        badge.className = `volume-badge vol-${exam.volume}-badge`;
        
        clone.querySelector('.difficulty-stars').textContent = '★'.repeat(exam.difficulty || 3) + '☆'.repeat(5 - (exam.difficulty || 3));
        clone.querySelector('.acronym').textContent = exam.acronym || exam.id;
        clone.querySelector('.exam-name').textContent = exam.name;
        clone.querySelector('.conducting-body').textContent = exam.conductingBody || 'Authorized Body';
        
        const stats = clone.querySelectorAll('.quick-stats .val');
        if (stats[0]) stats[0].textContent = exam.salary?.range || 'Govt Pay Scale';
        if (stats[1]) stats[1].textContent = exam.validity || 'Standard';
        
        // Bookmark
        const bmBtn = clone.querySelector('.bookmark-btn');
        if (state.bookmarks.includes(exam.id)) bmBtn.classList.add('active');
        bmBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(exam.id, bmBtn);
        });
        
        // Compare
        const compareCb = clone.querySelector('.compare-cb');
        if (state.compareSet.has(exam.id)) compareCb.checked = true;
        compareCb.addEventListener('change', (e) => {
            e.stopPropagation();
            if (e.target.checked) {
                if (state.compareSet.size >= 3) {
                    alert("You can compare up to 3 exams at once.");
                    e.target.checked = false;
                    return;
                }
                state.compareSet.add(exam.id);
            } else {
                state.compareSet.delete(exam.id);
            }
            updateCompareBar();
        });
        
        // View Details
        clone.querySelector('.view-btn').addEventListener('click', () => openExamDetail(exam.id));
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        elements.examGrid.appendChild(clone);
        
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.4s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    obs.unobserve(entry.target);
                }
            });
        });
        obs.observe(card);
    });
}

async function openExamDetail(id) {
    state.currentExamId = id;
    
    let exam = state.exams.find(e => e.id === id);
    
    // Fetch full single exam object from backend API if needed
    try {
        const res = await fetch(`/api/exams/${id}`);
        if (res.ok) {
            exam = await res.json();
        }
    } catch (err) {
        console.log('Using cached exam data');
    }

    if (!exam) return;
    
    document.getElementById('detailVolumeBadge').textContent = `Vol.${exam.volume}`;
    document.getElementById('detailVolumeBadge').className = `volume-badge vol-${exam.volume}-badge`;
    document.getElementById('detailAcronym').textContent = exam.acronym || exam.id;
    document.getElementById('detailName').textContent = exam.name;
    
    const bmBtn = document.getElementById('detailBookmarkBtn');
    bmBtn.classList.toggle('active', state.bookmarks.includes(exam.id));
    bmBtn.onclick = () => { toggleBookmark(exam.id); bmBtn.classList.toggle('active'); };
    
    // 1. Overview Tab
    document.getElementById('detBody').textContent = exam.conductingBody || 'N/A';
    document.getElementById('detDiff').textContent = `${exam.difficulty || 3}/5 Stars`;
    document.getElementById('detValid').textContent = exam.validity || 'Standard';
    
    const benList = document.getElementById('detBenefits');
    const benefits = exam.postQualifyingBenefits || ['Government Gazetted Post / Recognized Qualification', 'High Job Security & Allowances', 'Career Advancement Pathways'];
    benList.innerHTML = benefits.map(b => `<li><i class="fa-solid fa-check text-green mr-2"></i> ${b}</li>`).join('');
    
    const siteBtn = document.getElementById('detWebsite');
    siteBtn.href = exam.officialWebsite || 'https://google.com';
    siteBtn.target = '_blank';

    document.getElementById('detAiUpdate').onclick = () => {
        elements.aiChatPanel.classList.add('open');
        document.getElementById('chatInput').value = `Tell me all about ${exam.acronym || exam.name} syllabus and career growth.`;
        handleChatSubmit(new Event('submit'));
    };

    // 2. Eligibility Tab
    const elig = exam.eligibility || {};
    document.getElementById('detEligibility').innerHTML = `
        <div class="elig-card"><div><i class="fa-solid fa-graduation-cap text-purple text-xl"></i></div><div><h4>Educational Degree</h4><p>${elig.degree || 'Bachelor Degree in Engineering / Relevant Subject'}</p></div></div>
        <div class="elig-card"><div><i class="fa-solid fa-calendar text-blue text-xl"></i></div><div><h4>Eligible Year</h4><p>${elig.year || 'Final Year Students or Graduates'}</p></div></div>
        <div class="elig-card"><div><i class="fa-solid fa-user text-green text-xl"></i></div><div><h4>Age Limit</h4><p>${elig.age || 'Standard Government Age Relaxations Apply'}</p></div></div>
        <div class="elig-card"><div><i class="fa-solid fa-percent text-orange text-xl"></i></div><div><h4>Min Percentage</h4><p>${elig.percentage || 'Passing Marks / 60% where specified'}</p></div></div>
        <div class="elig-card"><div><i class="fa-solid fa-flag text-cyan text-xl"></i></div><div><h4>Nationality</h4><p>${elig.nationality || 'Indian National / Open International'}</p></div></div>
    `;

    // 3. Syllabus Tab
    const detSyllabus = document.getElementById('detSyllabus');
    const syllabusObj = exam.syllabus || { "Core Syllabus": exam.subjects || ["General Knowledge", "Domain Knowledge", "Aptitude"] };
    detSyllabus.innerHTML = Object.entries(syllabusObj).map(([section, topics]) => {
        const topicArray = Array.isArray(topics) ? topics : [topics];
        return `
            <div class="accordion-item open">
                <div class="accordion-header">
                    <h4>${section}</h4>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="accordion-content">
                    <ul>
                        ${topicArray.map(t => `<li><label><input type="checkbox"> ${t}</label></li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }).join('');

    // 4. Pattern Tab
    const pattern = exam.examPattern || {};
    document.getElementById('detPattern').innerHTML = `
        <div class="pattern-summary">
            <div class="p-badge">Stages: ${pattern.stages || 1}</div>
            <div class="p-badge">Duration: ${pattern.duration || '3 Hours'}</div>
            <div class="p-badge">Total Marks: ${pattern.totalMarks || 100}</div>
        </div>
        <h4>Papers & Structure:</h4>
        <ul>
            ${(pattern.papers || ['Single Comprehensive Computer Based Test']).map(p => `<li><strong>${p}</strong></li>`).join('')}
        </ul>
        <div class="mt-3">
            <h4>Negative Marking:</h4>
            <p>${pattern.negativeMarking || 'Standard 1/3rd penalty for wrong answers'}</p>
        </div>
        <div class="mt-3">
            <h4>Selection Process Steps:</h4>
            <ol>
                ${(exam.selectionProcess || ['Written Examination', 'Document Verification']).map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;

    // 5. Career & Salary Tab
    const sal = exam.salary || {};
    document.getElementById('detCareer').innerHTML = `
        <div class="salary-box" style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--green); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h3 style="color: var(--green); margin-bottom: 0.5rem;">${sal.range || '₹8,000,00 - ₹18,000,00 per annum'}</h3>
            <p><strong>Pay Band / Level:</strong> ${sal.payBand || 'Level 10 (7th Pay Commission) / Equivalent Grade'}</p>
            <p><strong>Perks & Allowances:</strong> ${sal.perks || 'DA, HRA, Medical Insurance, Lease Accommodation, Transport Allowance'}</p>
        </div>
        <h4>Career Growth Ladder:</h4>
        <div class="career-progression" style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 1rem;">
            ${(exam.careerProgression || ['Junior Executive / Assistant Engineer', 'Executive Engineer / Manager', 'Senior Manager / Chief Engineer', 'General Manager / Director']).map((step, idx) => `
                <div style="display: flex; align-items: center; gap: 1rem; background: var(--glass); padding: 0.8rem 1rem; border-radius: 8px;">
                    <span style="background: var(--blue); color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: bold;">${idx+1}</span>
                    <span>${step}</span>
                </div>
            `).join('')}
        </div>
    `;

    // 6. Resources Tab
    document.getElementById('detResources').innerHTML = `
        <h4>Recommended Preparation Material:</h4>
        <ul style="margin-bottom: 1.5rem;">
            ${(exam.preparationResources || ['Standard Textbooks', 'Previous 10 Years Solved Papers', 'Online Mock Test Series']).map(r => `<li><i class="fa-solid fa-book text-blue mr-2"></i> ${r}</li>`).join('')}
        </ul>
        <a href="${exam.officialWebsite || '#'}" target="_blank" class="btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Official Exam Portal
        </a>
    `;

    // Reset Tabs
    elements.dTabs.forEach(t => t.classList.remove('active'));
    elements.tabPanes.forEach(p => p.classList.remove('active'));
    elements.dTabs[0].classList.add('active');
    document.getElementById('tab-overview').classList.add('active');
    
    // Clear realtime loader state
    elements.realtimeContent.classList.add('hidden');
    elements.realtimeLoader.classList.remove('hidden');

    elements.drawerOverlay.classList.add('show');
    elements.examDrawer.classList.add('open');
    elements.chatContext.textContent = exam.acronym || exam.name;
}

function closeDrawer() {
    elements.examDrawer.classList.remove('open');
    elements.drawerOverlay.classList.remove('show');
    setTimeout(() => { elements.chatContext.textContent = "General Assistant"; }, 400);
}

// Live Real-Time Insights API from Gemini Backend
async function loadRealtimeData(id) {
    if (state.realtimeCache[id]) {
        renderRealtimeData(state.realtimeCache[id]);
        return;
    }
    
    elements.realtimeContent.classList.add('hidden');
    elements.realtimeLoader.classList.remove('hidden');
    
    try {
        const res = await fetch(`/api/ai/realtime/${id}`, { method: 'POST' });
        const data = await res.json();
        
        if (data.realtimeData) {
            state.realtimeCache[id] = data.realtimeData;
            renderRealtimeData(data.realtimeData);
        } else {
            throw new Error('No data');
        }
    } catch (err) {
        console.error('Realtime fetch error:', err);
        const fallback = {
            "Notification Frequency": "Annual / Biannual",
            "Exam Month": "Expected Q1/Q2",
            "Vacancies": "Varies by recruiting organization",
            "Applicants": "800,000+ candidates",
            "Success Rate": "1.5 - 3%",
            "Application Fee": "Standard Category Fee",
            "Reservation Rules": "Central / State Govt Quota",
            "Interview Details": "Score-based selection + Document Verification"
        };
        renderRealtimeData(fallback);
    }
}

function renderRealtimeData(data) {
    elements.realtimeLoader.classList.add('hidden');
    
    const keyLabels = {
        notificationFrequency: "Notification Frequency",
        examMonth: "Target Exam Month",
        applicationMonth: "Application Window",
        vacancies: "Recent Vacancy Trends",
        applicants: "Estimated Applicants",
        successRate: "Success Rate / Competition",
        applicationFee: "Application Fee",
        reservationRules: "Reservation & Quota Rules",
        attemptsAllowed: "Attempts Allowed",
        ageRelaxation: "Age Relaxation Rules",
        postingLocations: "Job Posting Locations",
        trainingPeriod: "Training Period",
        bondAgreement: "Service Bond / Agreement",
        promotionTimeline: "Promotion Timeline",
        previousCutoffs: "Previous Year Cutoffs",
        previousPapersUrl: "Past Question Papers",
        importantBooks: "Recommended Books",
        officialSyllabusPdf: "Official Syllabus PDF",
        latestNotificationPdf: "Latest Notification",
        examCalendar: "Official Calendar",
        recentChanges: "Recent Pattern Changes",
        physicalStandards: "Physical Fitness Standards",
        medicalStandards: "Medical Fitness Standards",
        interviewDetails: "Interview / Personality Test",
        careerAlternatives: "Career Backup Options"
    };

    elements.detRealtimeGrid.innerHTML = Object.entries(data).map(([key, val]) => {
        const label = keyLabels[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        const displayVal = Array.isArray(val) ? val.join(', ') : val;
        return `
            <div class="realtime-card">
                <h4>${label}</h4>
                <p>${displayVal}</p>
            </div>
        `;
    }).join('');
    
    elements.realtimeContent.classList.remove('hidden');
}

// Bookmarks
function toggleBookmark(id, btnElement = null) {
    if (state.bookmarks.includes(id)) {
        state.bookmarks = state.bookmarks.filter(b => b !== id);
        if (btnElement) btnElement.classList.remove('active');
    } else {
        state.bookmarks.push(id);
        if (btnElement) btnElement.classList.add('active');
    }
    localStorage.setItem('examBookmarks', JSON.stringify(state.bookmarks));
}

// Compare
function updateCompareBar() {
    if (state.compareSet.size > 0) {
        elements.compareItems.innerHTML = Array.from(state.compareSet).map(id => {
            const exam = state.exams.find(e => e.id === id) || { acronym: id };
            return `<span class="compare-badge">${exam.acronym || id}</span>`;
        }).join('');
        elements.compareBar.classList.add('show');
    } else {
        elements.compareBar.classList.remove('show');
    }
}

function openCompareModal() {
    if (state.compareSet.size < 2) {
        alert("Please select at least 2 exams to compare.");
        return;
    }
    const examsToCompare = Array.from(state.compareSet).map(id => state.exams.find(e => e.id === id)).filter(Boolean);
    
    let thead = '<tr><th>Features</th>' + examsToCompare.map(e => `<th>${e.acronym || e.name}</th>`).join('') + '</tr>';
    let tbody = `
        <tr><td><strong>Difficulty</strong></td>${examsToCompare.map(e => `<td>${e.difficulty || 3}/5</td>`).join('')}</tr>
        <tr><td><strong>Salary Range</strong></td>${examsToCompare.map(e => `<td>${e.salary?.range || 'Varies'}</td>`).join('')}</tr>
        <tr><td><strong>Validity</strong></td>${examsToCompare.map(e => `<td>${e.validity || 'Standard'}</td>`).join('')}</tr>
        <tr><td><strong>Conducting Body</strong></td>${examsToCompare.map(e => `<td>${e.conductingBody || '-'}</td>`).join('')}</tr>
        <tr><td><strong>Eligibility Degree</strong></td>${examsToCompare.map(e => `<td>${e.eligibility?.degree || 'B.Tech / Graduate'}</td>`).join('')}</tr>
    `;
    
    elements.compareTable.innerHTML = `<thead>${thead}</thead><tbody>${tbody}</tbody>`;
    elements.drawerOverlay.classList.add('show');
    elements.compareModal.classList.add('show');
}

// Live AI Assistant Chatbot
async function handleChatSubmit(e) {
    if (e) e.preventDefault();
    const val = elements.chatInput.value.trim();
    if (!val) return;
    
    appendMessage(val, 'user-message');
    elements.chatInput.value = '';
    const typingId = appendTypingIndicator();
    
    try {
        const res = await fetch('/api/ai/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question: val,
                examId: state.currentExamId
            })
        });
        const data = await res.json();
        
        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.remove();
        
        if (data.answer) {
            appendMessage(data.answer, 'ai-message');
        } else {
            appendMessage("I couldn't fetch an answer right now. Please try again.", 'ai-message');
        }
    } catch (err) {
        console.error('Chat error:', err);
        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.remove();
        appendMessage("AI Assistant is offline. Please check connection.", 'ai-message');
    }
}

function appendMessage(text, className) {
    const div = document.createElement('div');
    div.className = `message ${className}`;
    // Simple markdown line-break formatting
    const formatted = text.replace(/\n/g, '<br>');
    div.innerHTML = `<div class="msg-bubble">${formatted}</div>`;
    elements.chatMessages.appendChild(div);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function appendTypingIndicator() {
    const id = 'typing-' + Date.now();
    const div = document.createElement('div');
    div.className = 'message ai-message';
    div.id = id;
    div.innerHTML = `<div class="msg-bubble typing-dots"><span></span><span></span><span></span></div>`;
    elements.chatMessages.appendChild(div);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    return id;
}

function animateCounter(el, start, end, duration) {
    if (!el) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        el.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            el.innerHTML = end + "+";
        }
    };
    window.requestAnimationFrame(step);
}

window.addEventListener('DOMContentLoaded', init);
