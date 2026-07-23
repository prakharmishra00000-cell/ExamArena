// ExamArena Client Application - Ultimate Version (Real API & AI Integration)

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
        
        // Category Sidebar
        catItems: document.querySelectorAll('.category-menu .cat-item'),
        
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
        closeCompareBarBtn: document.getElementById('closeCompareBarBtn'),
        compareNowBtn: document.getElementById('compareNowBtn'),
        compareModal: document.getElementById('compareModal'),
        compareTable: document.getElementById('compareTable'),
        aiCompareBtn: document.getElementById('aiCompareBtn'),
        aiCompareResult: document.getElementById('aiCompareResult'),
        
        // AI Chat
        aiChatFabWrapper: document.getElementById('aiChatFabWrapper'),
        aiChatHintBubble: document.getElementById('aiChatHintBubble'),
        dismissAiHintBtn: document.getElementById('dismissAiHintBtn'),
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
        btn.addEventListener('click', () => {
            elements.navTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filters.volume = btn.dataset.volume;
            state.currentPage = 1;
            fetchExams();
        });
    });

    // Left Category Sidebar Click Event Listeners
    if (elements.catItems) {
        elements.catItems.forEach(item => {
            item.addEventListener('click', () => {
                elements.catItems.forEach(ci => ci.classList.remove('active'));
                item.classList.add('active');
                
                const type = item.dataset.type;
                const val = item.dataset.val || '';

                // Reset sub-filters
                state.filters.category = '';
                state.filters.edu = '';
                state.filters.sector = '';
                state.filters.location = '';
                state.filters.domain = '';
                state.filters.branch = '';
                state.filters.salaryGt10 = false;
                state.filters.noInt = false;
                state.filters.women = false;
                state.filters.finalYear = false;
                state.filters.remote = false;
                state.filters.maxAge = 45;

                if (type === 'edu') state.filters.edu = val;
                else if (type === 'sector') state.filters.sector = val;
                else if (type === 'location') state.filters.location = val;
                else if (type === 'domain') state.filters.domain = val;
                else if (type === 'branch') state.filters.branch = val;
                else if (type === 'age') state.filters.maxAge = parseInt(val);
                else if (type === 'flag' && val) state.filters[val] = true;

                state.currentPage = 1;
                fetchExams();
            });
        });
    }

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
    if (elements.filterToggle) elements.filterToggle.addEventListener('click', () => elements.filterPanel.classList.add('open'));
    if (elements.closeFilters) elements.closeFilters.addEventListener('click', () => elements.filterPanel.classList.remove('open'));
    
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
        state.filters.category = elements.categoryFilter ? elements.categoryFilter.value : '';
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
        if (elements.catItems) {
            elements.catItems.forEach(ci => ci.classList.toggle('active', ci.dataset.type === 'all'));
        }
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

    // Drawer Accordion Delegation
    const detSyllabus = document.getElementById('detSyllabus');
    if (detSyllabus) {
        detSyllabus.addEventListener('click', (e) => {
            const header = e.target.closest('.accordion-header');
            if (header) {
                header.parentElement.classList.toggle('open');
            }
        });
    }

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

    // Compare Controls & Close Cross Button
    elements.clearCompareBtn.addEventListener('click', () => {
        state.compareSet.clear();
        updateCompareBar();
        document.querySelectorAll('.compare-cb').forEach(cb => cb.checked = false);
    });

    if (elements.closeCompareBarBtn) {
        elements.closeCompareBarBtn.addEventListener('click', () => {
            state.compareSet.clear();
            updateCompareBar();
            document.querySelectorAll('.compare-cb').forEach(cb => cb.checked = false);
        });
    }

    elements.compareNowBtn.addEventListener('click', openCompareModal);
    const modalClose = document.querySelector('.close-modal');
    if (modalClose) modalClose.addEventListener('click', () => elements.compareModal.classList.remove('show'));
    
    // AI Compare Button
    if (elements.aiCompareBtn) {
        elements.aiCompareBtn.addEventListener('click', handleAICompare);
    }

    // AI Chat FAB & Cross Dismiss Button
    if (elements.aiChatFab) {
        elements.aiChatFab.addEventListener('click', (e) => {
            e.stopPropagation();
            elements.aiChatPanel.classList.add('open');
        });
    }

    if (elements.dismissAiHintBtn) {
        elements.dismissAiHintBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (elements.aiChatHintBubble) elements.aiChatHintBubble.style.display = 'none';
        });
    }

    elements.closeChatBtn.addEventListener('click', () => elements.aiChatPanel.classList.remove('open'));
    elements.chatForm.addEventListener('submit', handleChatSubmit);

    // AI Chat Quick Actions
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.textContent.trim();
            if (text.includes('Roadmap')) {
                elements.chatInput.value = "Generate a complete engineering career roadmap for GATE and PSUs.";
            } else {
                elements.chatInput.value = "Suggest top high-salary engineering exams for Mechanical/Civil/EE.";
            }
            handleChatSubmit(new Event('submit'));
        });
    });
}

// Real Backend API Calls
async function fetchStats() {
    try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        state.stats = data;
        animateCounter(elements.statTotalExams, 0, data.totalExams || 538, 2000);

        // Dynamically populate category dropdown from backend categories
        if (data.categories && elements.categoryFilter) {
            const categories = Object.keys(data.categories).sort();
            elements.categoryFilter.innerHTML = '<option value="">All Categories</option>' +
                categories.map(c => `<option value="${c}">${c}</option>`).join('');
        }
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
        params.append('limit', 24); // Fetch 24 exams per page for richer grid
        
        const res = await fetch(`/api/exams?${params.toString()}`);
        const data = await res.json();
        
        let filtered = data.exams || [];

        // Smart Flexible Quick Filter Matching (100% guarantee results)
        if (state.filters.edu) {
            const q = state.filters.edu.toLowerCase();
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e).toLowerCase();
                if (q === '10th') return str.includes('10th') || str.includes('matric') || str.includes('sslc') || str.includes('group d') || str.includes('level 1');
                if (q === '12th') return str.includes('12th') || str.includes('intermediate') || str.includes('nda') || str.includes('chsl') || str.includes('10+2');
                if (q === 'diploma') return str.includes('diploma') || str.includes('polytechnic') || str.includes('je') || str.includes('junior engineer');
                if (q === 'b.tech') return str.includes('b.tech') || str.includes('b.e') || str.includes('gate') || str.includes('ese') || str.includes('psu') || e.volume === 1 || e.volume === 3;
                if (q === 'mba') return str.includes('mba') || str.includes('cat') || str.includes('xat') || str.includes('gmat') || str.includes('management') || e.volume === 4;
                if (q === 'graduation') return str.includes('graduat') || str.includes('degree') || str.includes('bachelor') || str.includes('cgl') || str.includes('po');
                return str.includes(q);
            });
        }

        if (state.filters.sector) {
            const q = state.filters.sector.toLowerCase();
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e).toLowerCase();
                if (q === 'government') return e.volume === 1 || e.volume === 2 || e.volume === 3 || e.volume === 6 || str.includes('govt') || str.includes('upsc') || str.includes('ssc') || str.includes('psu');
                if (q === 'private') return e.volume === 4 || e.volume === 5 || str.includes('private') || str.includes('gmat') || str.includes('cat') || str.includes('corporate');
                return str.includes(q);
            });
        }

        if (state.filters.location) {
            const q = state.filters.location.toLowerCase();
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e).toLowerCase();
                if (q === 'abroad') return e.volume === 5 || str.includes('abroad') || str.includes('us') || str.includes('uk') || str.includes('canada') || str.includes('australia') || str.includes('gre') || str.includes('toefl') || str.includes('ielts') || str.includes('fe') || str.includes('pe');
                if (q === 'india') return e.volume !== 5 || str.includes('india') || str.includes('gate') || str.includes('upsc') || str.includes('ssc');
                return str.includes(q);
            });
        }

        if (state.filters.domain) {
            const q = state.filters.domain.toLowerCase();
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e).toLowerCase();
                if (q === 'technical') return e.volume === 1 || e.volume === 3 || e.volume === 5 || str.includes('engineer') || str.includes('technical') || str.includes('gate');
                if (q === 'non-technical') return e.volume === 2 || e.volume === 4 || str.includes('admin') || str.includes('management') || str.includes('bank') || str.includes('cgl');
                return str.includes(q);
            });
        }

        if (state.filters.branch) {
            const q = state.filters.branch.toLowerCase();
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e).toLowerCase();
                if (q === 'mechanical') return str.includes('mech') || str.includes('me') || e.volume === 1 || e.volume === 3;
                if (q === 'civil') return str.includes('civil') || str.includes('ce') || e.volume === 1 || e.volume === 3;
                if (q === 'cse') return str.includes('cs') || str.includes('computer') || str.includes('software') || str.includes('it');
                if (q === 'ece') return str.includes('ece') || str.includes('electronics') || str.includes('telecom');
                if (q === 'ee') return str.includes('ee') || str.includes('electrical') || str.includes('power');
                return str.includes(q);
            });
        }

        if (state.filters.salaryGt10) {
            filtered = filtered.filter(e => {
                const salStr = JSON.stringify(e.salary || {}).toLowerCase();
                return salStr.includes('lpa') || salStr.includes('level 10') || salStr.includes('level 11') || salStr.includes('level 12') || salStr.includes('56,100') || salStr.includes('70,000') || e.volume === 1 || e.volume === 4;
            });
        }

        if (state.filters.noInt) {
            filtered = filtered.filter(e => {
                const proc = JSON.stringify(e.selectionProcess || []).toLowerCase();
                return !proc.includes('interview') && !proc.includes('personality');
            });
        }

        if (state.filters.women) {
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e).toLowerCase();
                return str.includes('women') || str.includes('female') || e.volume === 6 || (e.difficulty && e.difficulty <= 4);
            });
        }

        if (state.filters.finalYear) {
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e.eligibility || {}).toLowerCase();
                return str.includes('final') || str.includes('appearing') || e.volume === 1 || e.volume === 4 || e.volume === 5;
            });
        }

        if (state.filters.remote) {
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e).toLowerCase();
                return str.includes('remote') || str.includes('overseas') || str.includes('international') || e.volume === 5;
            });
        }

        if (state.filters.maxAge < 45) {
            filtered = filtered.filter(e => {
                const str = JSON.stringify(e.eligibility || {}).toLowerCase();
                const match = str.match(/(\d+)\s*years/);
                if (match) return parseInt(match[1]) <= state.filters.maxAge;
                return true;
            });
        }

        if (!append) state.exams = [];
        state.exams = [...state.exams, ...filtered];
        
        state.totalPages = data.totalPages || 1;

        if (!append) {
            elements.gridTitle.textContent = state.filters.category ? `${state.filters.category} Exams` : (state.filters.volume === 'all' ? "All Exams" : `Volume ${state.filters.volume} Exams`);
        }
        if (elements.resultsCount) elements.resultsCount.textContent = `${filtered.length} results`;
        
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
        elements.examGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-secondary);">No exams found. Click "Show All Exams" in the left sidebar to reset!</div>';
        return;
    }
    
    exams.forEach(exam => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.exam-card');
        
        card.dataset.id = exam.id;
        card.style.setProperty('--vol1', `var(--vol${exam.volume})`);
        card.style.cursor = 'pointer';
        
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
        
        // Bookmark button
        const bmBtn = clone.querySelector('.bookmark-btn');
        if (state.bookmarks.includes(exam.id)) bmBtn.classList.add('active');
        bmBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(exam.id, bmBtn);
        });
        
        // Compare checkbox
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
        
        // View Details - Click on card body OR view button OR whole card container
        card.addEventListener('click', (e) => {
            if (e.target.closest('.bookmark-btn') || e.target.closest('.compare-checkbox') || e.target.tagName === 'INPUT') {
                return;
            }
            openExamDetail(exam.id);
        });
        
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

function openExamDetail(id) {
    state.currentExamId = id;
    let exam = state.exams.find(e => e.id === id);
    
    // OPEN DRAWER INSTANTLY ON FRAME 1 (0ms response time)
    elements.drawerOverlay.classList.add('show');
    elements.examDrawer.classList.add('open');

    if (exam) {
        renderDrawerDetails(exam);
    }
    
    // Asynchronously fetch extra details if available without blocking UI
    fetch(`/api/exams/${encodeURIComponent(id)}`)
        .then(res => res.ok ? res.json() : null)
        .then(fetched => {
            if (fetched && fetched.name) renderDrawerDetails(fetched);
        })
        .catch(err => console.log('Using state exam object:', err));
}

function renderDrawerDetails(exam) {
    if (!exam) return;
    
    document.getElementById('detailVolumeBadge').textContent = `Vol.${exam.volume || 1}`;
    document.getElementById('detailVolumeBadge').className = `volume-badge vol-${exam.volume || 1}-badge`;
    document.getElementById('detailAcronym').textContent = exam.acronym || exam.id;
    document.getElementById('detailName').textContent = exam.name;
    
    const bmBtn = document.getElementById('detailBookmarkBtn');
    if (bmBtn) {
        bmBtn.classList.toggle('active', state.bookmarks.includes(exam.id));
        bmBtn.onclick = () => { toggleBookmark(exam.id); bmBtn.classList.toggle('active'); };
    }
    
    // 1. Overview Tab
    document.getElementById('detBody').textContent = exam.conductingBody || 'N/A';
    document.getElementById('detDiff').textContent = `${exam.difficulty || 3}/5 Stars`;
    document.getElementById('detValid').textContent = exam.validity || 'Standard';
    
    const benList = document.getElementById('detBenefits');
    const benefits = exam.postQualifyingBenefits || ['Government Gazetted Post / Recognized Qualification', 'High Job Security & Allowances', 'Career Advancement Pathways'];
    benList.innerHTML = benefits.map(b => `<li><i class="fa-solid fa-check text-green mr-2"></i> ${b}</li>`).join('');
    
    const siteBtn = document.getElementById('detWebsite');
    if (siteBtn) {
        siteBtn.href = exam.officialWebsite || 'https://google.com';
        siteBtn.target = '_blank';
    }

    const aiUpdateBtn = document.getElementById('detAiUpdate');
    if (aiUpdateBtn) {
        aiUpdateBtn.onclick = () => {
            elements.aiChatPanel.classList.add('open');
            document.getElementById('chatInput').value = `Tell me all about ${exam.acronym || exam.name} syllabus and career growth.`;
            handleChatSubmit(new Event('submit'));
        };
    }

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
                <div class="accordion-header" style="cursor: pointer;">
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
            <p>${pattern.negativeMarking || 'Standard penalty for wrong answers'}</p>
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
        const res = await fetch(`/api/ai/realtime/${encodeURIComponent(id)}`, { method: 'POST' });
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
    if (elements.aiCompareResult) elements.aiCompareResult.classList.add('hidden');
    elements.drawerOverlay.classList.add('show');
    elements.compareModal.classList.add('show');
}

// Live AI Compare Integration
async function handleAICompare() {
    if (state.compareSet.size < 2) return;
    if (!elements.aiCompareResult) return;

    elements.aiCompareResult.innerHTML = '<div class="spinner"></div> Generating AI Comparison...';
    elements.aiCompareResult.classList.remove('hidden');

    try {
        const res = await fetch('/api/ai/compare', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ examIds: Array.from(state.compareSet) })
        });
        const data = await res.json();
        
        if (data.comparison) {
            elements.aiCompareResult.innerHTML = `<h4>🤖 Gemini AI Comparison Analysis:</h4><p style="white-space: pre-line;">${data.comparison}</p>`;
        } else {
            elements.aiCompareResult.innerHTML = `<p>Unable to generate comparison right now.</p>`;
        }
    } catch (err) {
        console.error('AI Compare error:', err);
        elements.aiCompareResult.innerHTML = `<p>Failed to generate AI comparison.</p>`;
    }
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
