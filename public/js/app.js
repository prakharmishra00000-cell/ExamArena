// State
const state = {
    exams: [],
    volumes: [],
    stats: {},
    currentPage: 1,
    totalPages: 1,
    searchQuery: '',
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
    compareSet: new Set(),
    bookmarks: JSON.parse(localStorage.getItem('examBookmarks') || '[]'),
    currentExamId: null,
    isNavigatingBookmarks: false,
    realtimeCache: {}
};

// DOM Elements
const elements = {
    gridTitle: document.getElementById('gridTitle'),
    resultsCount: document.getElementById('resultsCount'),
    examGrid: document.getElementById('examGrid'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    
    // Search & Filters
    mainSearch: document.getElementById('mainSearch'),
    searchSuggestions: document.getElementById('searchSuggestions'),
    filterToggle: document.getElementById('filterToggle'),
    filterPanel: document.getElementById('filterPanel'),
    closeFilters: document.getElementById('closeFilters'),
    applyFiltersBtn: document.getElementById('applyFiltersBtn'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    
    // Filter Inputs
    categoryFilter: document.getElementById('categoryFilter'),
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
    
    // Nav
    navTabs: document.querySelectorAll('.tab-btn'),
    bookmarkToggle: document.getElementById('bookmarkToggle'),
    
    // Drawer
    examDrawer: document.getElementById('examDrawer'),
    drawerOverlay: document.getElementById('drawerOverlay'),
    closeDrawer: document.getElementById('closeDrawer'),
    dTabs: document.querySelectorAll('.d-tab'),
    tabPanes: document.querySelectorAll('.tab-pane'),
    
    // Real-Time Tab
    realtimeLoader: document.getElementById('realtimeLoader'),
    realtimeContent: document.getElementById('realtimeContent'),
    detRealtimeGrid: document.getElementById('detRealtimeGrid'),
    
    // Compare
    compareBar: document.getElementById('compareBar'),
    compareItems: document.getElementById('compareItems'),
    compareNowBtn: document.getElementById('compareNowBtn'),
    clearCompareBtn: document.getElementById('clearCompareBtn'),
    compareModal: document.getElementById('compareModal'),
    compareTable: document.getElementById('compareTable'),
    
    // AI Chat
    aiChatFab: document.getElementById('aiChatFab'),
    aiChatPanel: document.getElementById('aiChatPanel'),
    closeChatBtn: document.getElementById('closeChatBtn'),
    chatMessages: document.getElementById('chatMessages'),
    chatForm: document.getElementById('chatForm'),
    chatInput: document.getElementById('chatInput'),
    chatContext: document.getElementById('chatContext'),
    
    // Stats
    statTotalExams: document.getElementById('statTotalExams')
};

// Initialization
async function init() {
    setupEventListeners();
    await fetchStats();
    await fetchExams();
}

// Event Listeners
function setupEventListeners() {
    // Nav tabs
    elements.navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            elements.navTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            state.filters.volume = e.target.dataset.volume;
            state.currentPage = 1;
            state.isNavigatingBookmarks = false;
            fetchExams();
        });
    });

    // Search
    let debounceTimer;
    elements.mainSearch.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const q = e.target.value.trim();
        debounceTimer = setTimeout(() => {
            if (q.length > 1) {
                fetchSearchSuggestions(q);
            } else {
                elements.searchSuggestions.style.display = 'none';
            }
        }, 300);
    });

    elements.mainSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            elements.searchSuggestions.style.display = 'none';
            state.searchQuery = e.target.value;
            state.currentPage = 1;
            fetchExams();
        }
    });

    // Filters
    elements.filterToggle.addEventListener('click', () => elements.filterPanel.classList.add('open'));
    elements.closeFilters.addEventListener('click', () => elements.filterPanel.classList.remove('open'));
    
    elements.filterAge.addEventListener('input', (e) => {
        elements.ageValText.textContent = e.target.value == 45 ? 'Any' : e.target.value;
    });

    elements.applyFiltersBtn.addEventListener('click', () => {
        const diffInput = document.querySelector('input[name="difficulty"]:checked');
        state.filters.difficulty = diffInput ? diffInput.value : null;
        state.filters.category = elements.categoryFilter.value;
        state.filters.edu = elements.filterEdu.value;
        state.filters.sector = elements.filterSector.value;
        state.filters.location = elements.filterLocation.value;
        state.filters.domain = elements.filterDomain.value;
        state.filters.branch = elements.filterBranch.value;
        state.filters.salaryGt10 = elements.filterSalary.checked;
        state.filters.noInt = elements.filterNoInt.checked;
        state.filters.women = elements.filterWomen.checked;
        state.filters.finalYear = elements.filterFinalYear.checked;
        state.filters.remote = elements.filterRemote.checked;
        state.filters.maxAge = elements.filterAge.value;
        
        state.currentPage = 1;
        elements.filterPanel.classList.remove('open');
        fetchExams();
    });

    elements.resetFiltersBtn.addEventListener('click', () => {
        document.querySelectorAll('input[name="difficulty"]').forEach(r => r.checked = false);
        elements.categoryFilter.value = '';
        elements.filterEdu.value = '';
        elements.filterSector.value = '';
        elements.filterLocation.value = '';
        elements.filterDomain.value = '';
        elements.filterBranch.value = '';
        elements.filterSalary.checked = false;
        elements.filterNoInt.checked = false;
        elements.filterWomen.checked = false;
        elements.filterFinalYear.checked = false;
        elements.filterRemote.checked = false;
        elements.filterAge.value = 45;
        elements.ageValText.textContent = 'Any';
        
        // Reset state object
        state.filters = {
            volume: state.filters.volume, // keep current volume
            difficulty: null, category: '', edu: '', sector: '', location: '', domain: '', branch: '',
            salaryGt10: false, noInt: false, women: false, finalYear: false, remote: false, maxAge: 45
        };
        
        state.currentPage = 1;
        elements.filterPanel.classList.remove('open');
        fetchExams();
    });

    // Drawer
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
            e.target.classList.add('active');
            
            const targetId = e.target.dataset.target;
            document.getElementById(targetId).classList.add('active');
            
            if(targetId === 'tab-realtime') {
                loadRealtimeData(state.currentExamId);
            }
        });
    });

    // Load More
    elements.loadMoreBtn.addEventListener('click', () => {
        state.currentPage++;
        fetchExams(true);
    });

    // Bookmarks toggle
    elements.bookmarkToggle.addEventListener('click', () => {
        state.isNavigatingBookmarks = true;
        elements.navTabs.forEach(t => t.classList.remove('active'));
        elements.gridTitle.textContent = "My Bookmarks";
        renderCards(state.bookmarks.map(id => state.exams.find(e => e.id === id) || generateMockExams().find(e => e.id === id)).filter(Boolean));
        elements.resultsCount.textContent = `${state.bookmarks.length} saved`;
        elements.loadMoreBtn.style.display = 'none';
    });

    // Compare
    elements.clearCompareBtn.addEventListener('click', () => {
        state.compareSet.clear();
        updateCompareBar();
        document.querySelectorAll('.compare-cb').forEach(cb => cb.checked = false);
    });
    elements.compareNowBtn.addEventListener('click', openCompareModal);
    document.querySelector('.close-modal').addEventListener('click', () => elements.compareModal.classList.remove('show'));
    
    // AI Chat
    elements.aiChatFab.addEventListener('click', () => elements.aiChatPanel.classList.add('open'));
    elements.closeChatBtn.addEventListener('click', () => elements.aiChatPanel.classList.remove('open'));
    elements.chatForm.addEventListener('submit', handleChatSubmit);
    
    // Accordion delegation
    document.getElementById('detSyllabus').addEventListener('click', (e) => {
        const header = e.target.closest('.accordion-header');
        if(header) {
            header.parentElement.classList.toggle('open');
        }
    });
}

// API Calls (Mocked)
async function fetchStats() {
    state.stats = { totalExams: 524, avgDifficulty: 3.8 };
    animateCounter(elements.statTotalExams, 0, state.stats.totalExams, 2000);
}

async function fetchSearchSuggestions(q) {
    const suggestions = generateMockExams().filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || s.acronym.toLowerCase().includes(q.toLowerCase()));
    
    elements.searchSuggestions.innerHTML = '';
    if(suggestions.length > 0) {
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
}

async function fetchExams(append = false) {
    if(!append) elements.examGrid.innerHTML = Array(6).fill('<div class="exam-card skeleton" style="height: 250px;"></div>').join('');
    
    setTimeout(() => {
        const mockExams = generateMockExams();
        
        let filtered = mockExams;
        
        // Base Filters
        if(state.filters.volume !== 'all') filtered = filtered.filter(e => e.volume == state.filters.volume);
        if(state.searchQuery) filtered = filtered.filter(e => e.acronym.toLowerCase().includes(state.searchQuery.toLowerCase()) || e.name.toLowerCase().includes(state.searchQuery.toLowerCase()));
        if(state.filters.difficulty) filtered = filtered.filter(e => e.difficulty == state.filters.difficulty);
        if(state.filters.category) filtered = filtered.filter(e => e.category === state.filters.category);
        
        // Advanced Filters Substring/Logic Matching
        if(state.filters.edu) filtered = filtered.filter(e => e.eligibility.degree.includes(state.filters.edu) || e.tags.includes(state.filters.edu));
        if(state.filters.sector) filtered = filtered.filter(e => e.sector === state.filters.sector);
        if(state.filters.location) filtered = filtered.filter(e => e.location === state.filters.location);
        if(state.filters.domain) filtered = filtered.filter(e => e.domain === state.filters.domain);
        if(state.filters.branch) filtered = filtered.filter(e => (e.branches || []).includes(state.filters.branch));
        
        if(state.filters.salaryGt10) {
            filtered = filtered.filter(e => {
                const match = e.salary.range.match(/\d+/);
                return match && parseInt(match[0]) >= 10;
            });
        }
        if(state.filters.noInt) filtered = filtered.filter(e => !e.selectionProcess.includes('Interview'));
        if(state.filters.women) filtered = filtered.filter(e => e.tags.includes('Women Only'));
        if(state.filters.finalYear) filtered = filtered.filter(e => e.eligibility.year.includes('Final Year'));
        if(state.filters.remote) filtered = filtered.filter(e => e.tags.includes('Remote') || e.tags.includes('Overseas'));
        
        if(state.filters.maxAge < 45) {
            filtered = filtered.filter(e => {
                const ageMatch = e.eligibility.age.match(/\d+/);
                return !ageMatch || parseInt(ageMatch[0]) <= state.filters.maxAge;
            });
        }

        const limit = 12;
        const start = (state.currentPage - 1) * limit;
        const paginated = filtered.slice(start, start + limit);
        
        if(!append) state.exams = [];
        state.exams = [...state.exams, ...paginated];
        
        if(!append) {
            elements.gridTitle.textContent = state.filters.volume === 'all' ? "All Exams" : `Volume ${state.filters.volume} Exams`;
        }
        elements.resultsCount.textContent = `${filtered.length} results`;
        
        renderCards(paginated, append);
        
        elements.loadMoreBtn.style.display = (start + limit < filtered.length) ? 'inline-block' : 'none';
    }, 500);
}

// Render Functions
function renderCards(exams, append = false) {
    if(!append) elements.examGrid.innerHTML = '';
    const template = document.getElementById('examCardTemplate');
    
    if(exams.length === 0 && !append) {
        elements.examGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-secondary);">No exams found matching your advanced filters. Try relaxing them!</div>';
        return;
    }
    
    exams.forEach(exam => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.exam-card');
        
        card.dataset.id = exam.id;
        card.style.setProperty('--vol1', `var(--vol${exam.volume})`);
        
        const badge = clone.querySelector('.volume-badge');
        badge.textContent = `Vol.${exam.volume}`;
        badge.classList.add(`vol-${exam.volume}-badge`);
        
        clone.querySelector('.difficulty-stars').textContent = '★'.repeat(exam.difficulty) + '☆'.repeat(5-exam.difficulty);
        clone.querySelector('.acronym').textContent = exam.acronym;
        clone.querySelector('.exam-name').textContent = exam.name;
        clone.querySelector('.conducting-body').textContent = exam.conductingBody;
        
        const stats = clone.querySelectorAll('.quick-stats .val');
        stats[0].textContent = exam.salary?.range || 'Varies';
        stats[1].textContent = exam.validity || 'Lifetime';
        
        // Bookmark
        const bmBtn = clone.querySelector('.bookmark-btn');
        if(state.bookmarks.includes(exam.id)) bmBtn.classList.add('active');
        bmBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(exam.id, bmBtn);
        });
        
        // Compare
        const compareCb = clone.querySelector('.compare-cb');
        if(state.compareSet.has(exam.id)) compareCb.checked = true;
        compareCb.addEventListener('change', (e) => {
            e.stopPropagation();
            if(e.target.checked) {
                if(state.compareSet.size >= 3) {
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
                if(entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.5s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    obs.unobserve(entry.target);
                }
            });
        });
        obs.observe(card);
    });
}

function openExamDetail(id) {
    state.currentExamId = id;
    const exam = state.exams.find(e => e.id === id) || generateMockExams().find(e => e.id === id);
    
    document.getElementById('detailVolumeBadge').textContent = `Vol.${exam.volume}`;
    document.getElementById('detailVolumeBadge').className = `volume-badge vol-${exam.volume}-badge`;
    document.getElementById('detailAcronym').textContent = exam.acronym;
    document.getElementById('detailName').textContent = exam.name;
    
    const bmBtn = document.getElementById('detailBookmarkBtn');
    bmBtn.classList.toggle('active', state.bookmarks.includes(exam.id));
    bmBtn.onclick = () => { toggleBookmark(exam.id); bmBtn.classList.toggle('active'); fetchExams(); };
    
    // Overview Tab
    document.getElementById('detBody').textContent = exam.conductingBody;
    document.getElementById('detDiff').textContent = `${exam.difficulty}/5`;
    document.getElementById('detValid').textContent = exam.validity;
    
    const benList = document.getElementById('detBenefits');
    benList.innerHTML = (exam.postQualifyingBenefits || []).map(b => `<li>${b}</li>`).join('');
    
    document.getElementById('detWebsite').href = exam.officialWebsite || '#';
    document.getElementById('detAiUpdate').onclick = () => {
        elements.aiChatPanel.classList.add('open');
        document.getElementById('chatInput').value = `What is the latest update for ${exam.acronym}?`;
        handleChatSubmit(new Event('submit'));
    };

    // Eligibility Tab
    document.getElementById('detEligibility').innerHTML = `
        <div class="elig-card"><div><i class="fa-solid fa-graduation-cap text-purple text-xl"></i></div><div><h4>Degree</h4><p>${exam.eligibility?.degree || 'B.Tech/B.E.'}</p></div></div>
        <div class="elig-card"><div><i class="fa-solid fa-calendar text-blue text-xl"></i></div><div><h4>Year</h4><p>${exam.eligibility?.year || 'Final Year or Graduate'}</p></div></div>
        <div class="elig-card"><div><i class="fa-solid fa-user text-green text-xl"></i></div><div><h4>Age Limit</h4><p>${exam.eligibility?.age || 'No limit'}</p></div></div>
    `;

    // Reset Tabs
    elements.dTabs.forEach(t => t.classList.remove('active'));
    elements.tabPanes.forEach(p => p.classList.remove('active'));
    elements.dTabs[0].classList.add('active'); // Overview
    document.getElementById('tab-overview').classList.add('active');
    
    // Clear realtime loader state
    elements.realtimeContent.classList.add('hidden');
    elements.realtimeLoader.classList.remove('hidden');

    elements.drawerOverlay.classList.add('show');
    elements.examDrawer.classList.add('open');
    elements.chatContext.textContent = exam.acronym;
}

function closeDrawer() {
    elements.examDrawer.classList.remove('open');
    elements.drawerOverlay.classList.remove('show');
    setTimeout(() => { elements.chatContext.textContent = "General Assistant"; }, 400);
}

// Real-Time Insights API
function loadRealtimeData(id) {
    if(state.realtimeCache[id]) {
        renderRealtimeData(state.realtimeCache[id]);
        return;
    }
    
    elements.realtimeContent.classList.add('hidden');
    elements.realtimeLoader.classList.remove('hidden');
    
    // Mocking the real-time fetch to /api/ai/realtime/:id
    setTimeout(() => {
        const mockRealtime = {
            "Total Vacancies": "1,250 (Approx)",
            "Expected Cutoff": "72-75 Marks (Gen)",
            "Notification Frequency": "Annual (Sept)",
            "Exam Month": "February",
            "Est. Applicants": "850,000+",
            "Success Rate": "1.2%",
            "Application Fee": "₹1,800 (Gen/OBC)",
            "Reservation Rules": "Standard Govt Quota",
            "Physical Standards": "Not Applicable",
            "Medical Standards": "General fitness",
            "Interview Weightage": "0% (Direct selection via scores)",
            "Last Update": new Date().toLocaleDateString()
        };
        state.realtimeCache[id] = mockRealtime;
        renderRealtimeData(mockRealtime);
    }, 1500);
}

function renderRealtimeData(data) {
    elements.realtimeLoader.classList.add('hidden');
    elements.detRealtimeGrid.innerHTML = Object.entries(data).map(([key, val]) => `
        <div class="realtime-card">
            <h4>${key}</h4>
            <p>${val}</p>
        </div>
    `).join('');
    elements.realtimeContent.classList.remove('hidden');
}

// Bookmarks
function toggleBookmark(id, btnElement = null) {
    if(state.bookmarks.includes(id)) {
        state.bookmarks = state.bookmarks.filter(b => b !== id);
        if(btnElement) btnElement.classList.remove('active');
    } else {
        state.bookmarks.push(id);
        if(btnElement) btnElement.classList.add('active');
    }
    localStorage.setItem('examBookmarks', JSON.stringify(state.bookmarks));
}

// Compare
function updateCompareBar() {
    if(state.compareSet.size > 0) {
        elements.compareItems.innerHTML = Array.from(state.compareSet).map(id => {
            const exam = state.exams.find(e => e.id === id) || {acronym: id};
            return `<span class="compare-badge">${exam.acronym}</span>`;
        }).join('');
        elements.compareBar.classList.add('show');
    } else {
        elements.compareBar.classList.remove('show');
    }
}

function openCompareModal() {
    if(state.compareSet.size < 2) {
        alert("Please select at least 2 exams to compare.");
        return;
    }
    const examsToCompare = Array.from(state.compareSet).map(id => state.exams.find(e => e.id === id));
    
    let thead = '<tr><th>Features</th>' + examsToCompare.map(e => `<th>${e.acronym}</th>`).join('') + '</tr>';
    let tbody = `
        <tr><td><strong>Difficulty</strong></td>${examsToCompare.map(e => `<td>${e.difficulty}/5</td>`).join('')}</tr>
        <tr><td><strong>Salary Range</strong></td>${examsToCompare.map(e => `<td>${e.salary?.range || '-'}</td>`).join('')}</tr>
        <tr><td><strong>Validity</strong></td>${examsToCompare.map(e => `<td>${e.validity || '-'}</td>`).join('')}</tr>
        <tr><td><strong>Conducting Body</strong></td>${examsToCompare.map(e => `<td>${e.conductingBody || '-'}</td>`).join('')}</tr>
    `;
    
    elements.compareTable.innerHTML = `<thead>${thead}</thead><tbody>${tbody}</tbody>`;
    elements.drawerOverlay.classList.add('show');
    elements.compareModal.classList.add('show');
}

// AI Chat
async function handleChatSubmit(e) {
    if(e) e.preventDefault();
    const val = elements.chatInput.value.trim();
    if(!val) return;
    
    appendMessage(val, 'user-message');
    elements.chatInput.value = '';
    const typingId = appendTypingIndicator();
    
    setTimeout(() => {
        document.getElementById(typingId).remove();
        let reply = "Here is some AI insight based on your question: " + val;
        appendMessage(reply, 'ai-message');
    }, 1500);
}

function appendMessage(text, className) {
    const div = document.createElement('div');
    div.className = `message ${className}`;
    div.innerHTML = `<div class="msg-bubble">${text}</div>`;
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

// Mock Data Generator (expanded to support new filters)
function generateMockExams() {
    return [
        { id: 'gate-2024', name: 'Graduate Aptitude Test in Engineering', acronym: 'GATE', volume: 1, difficulty: 5, conductingBody: 'IITs/IISc', salary: {range: '₹8-25 LPA'}, validity: '3 Years', category: 'technical', sector: 'Government', location: 'India', domain: 'Technical', branches: ['Mechanical', 'Civil', 'CSE', 'ECE', 'EE'], eligibility: {degree: 'B.Tech', year: 'Final Year/Graduate', age: 'No limit'}, selectionProcess: ['Written'], tags: [] },
        { id: 'ese-2024', name: 'Engineering Services Examination', acronym: 'ESE', volume: 2, difficulty: 5, conductingBody: 'UPSC', salary: {range: '₹12-18 LPA'}, validity: 'Lifetime', category: 'government', sector: 'Government', location: 'India', domain: 'Technical', branches: ['Mechanical', 'Civil', 'ECE', 'EE'], eligibility: {degree: 'B.Tech', year: 'Graduate', age: '30 Years'}, selectionProcess: ['Written', 'Interview'], tags: [] },
        { id: 'ssc-je', name: 'Staff Selection Commission Junior Engineer', acronym: 'SSC JE', volume: 2, difficulty: 3, conductingBody: 'SSC', salary: {range: '₹6-10 LPA'}, validity: 'Lifetime', category: 'government', sector: 'Government', location: 'India', domain: 'Technical', branches: ['Mechanical', 'Civil', 'EE'], eligibility: {degree: 'Diploma/B.Tech', year: 'Graduate', age: '32 Years'}, selectionProcess: ['Written'], tags: [] },
        { id: 'cat-2024', name: 'Common Admission Test', acronym: 'CAT', volume: 4, difficulty: 4, conductingBody: 'IIMs', salary: {range: '₹15-40 LPA'}, validity: '1 Year', category: 'higher_ed', sector: 'Private', location: 'India', domain: 'Non-Technical', branches: [], eligibility: {degree: 'Graduation', year: 'Final Year/Graduate', age: 'No limit'}, selectionProcess: ['Written', 'Interview'], tags: [] },
        { id: 'gre-2024', name: 'Graduate Record Examinations', acronym: 'GRE', volume: 5, difficulty: 3, conductingBody: 'ETS', salary: {range: 'Varies'}, validity: '5 Years', category: 'higher_ed', sector: 'Private', location: 'Abroad', domain: 'Technical', branches: [], eligibility: {degree: 'Graduation', year: 'Final Year/Graduate', age: 'No limit'}, selectionProcess: ['Written'], tags: ['Overseas'] },
        { id: 'wos-c', name: 'Women Scientist Scheme', acronym: 'WOS-C', volume: 6, difficulty: 3, conductingBody: 'TIFAC', salary: {range: '₹5-8 LPA'}, validity: '1 Year', category: 'technical', sector: 'Government', location: 'India', domain: 'Technical', branches: [], eligibility: {degree: 'Graduation', year: 'Graduate', age: '45 Years'}, selectionProcess: ['Written', 'Interview'], tags: ['Women Only'] },
    ];
}

window.addEventListener('DOMContentLoaded', init);
