const vol1_exams = [
  {
    id: 'gate-exam',
    name: 'Graduate Aptitude Test in Engineering',
    acronym: 'GATE',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Postgraduate / PSU Recruitment',
    conductingBody: 'IISc and seven IITs on a rotational basis',
    eligibility: {
      degree: 'B.E./B.Tech/B.Arch/M.Sc/M.A./MCA',
      year: '3rd year or higher',
      age: 'No age limit',
      percentage: 'No minimum percentage',
      nationality: 'Indian nationals and candidates from select foreign countries'
    },
    syllabus: {
      'General Aptitude': ['Verbal Ability', 'Numerical Ability', 'Spatial Aptitude'],
      'Engineering Mathematics': ['Linear Algebra', 'Calculus', 'Differential Equations', 'Probability and Statistics', 'Numerical Methods'],
      'Core Subject': ['Varies by discipline (e.g., ME, CE, EE, ECE, CS, CH, IN, MT)']
    },
    examPattern: {
      stages: 1,
      papers: ['1 Paper (3 hours)'],
      totalMarks: 100,
      duration: '3 hours',
      types: ['MCQ', 'MSQ', 'NAT'],
      sections: ['General Aptitude (15 marks)', 'Engineering Mathematics & Core Subject (85 marks)'],
      negativeMarking: '1/3 mark for 1-mark MCQ, 2/3 mark for 2-mark MCQ. No negative marking for MSQ and NAT.'
    },
    subjects: ['ME', 'CE', 'EE', 'ECE', 'CS', 'CH', 'IN', 'MT', 'MN', 'XE', 'PI', 'AE', 'and more (29 total)'],
    validity: '3 years for M.Tech admissions, typically 1 year for PSU recruitment',
    postQualifyingBenefits: [
      'M.Tech/Ph.D admission in IITs/NITs with stipend',
      'Direct recruitment in PSUs (ONGC, NTPC, IOCL, etc.)',
      'Eligibility for CSIR Junior Research Fellowship'
    ],
    salary: {
      range: '₹50,000 - ₹1,20,000/month',
      payBand: 'Level 10 (₹56,100 - ₹1,77,500) in PSUs',
      ctc: '₹12-22 LPA (PSUs)',
      perks: 'HRA, DA, TA, Medical, Pension, PRP'
    },
    careerProgression: [
      'Executive Trainee → Assistant Manager (after 1 year)',
      'Assistant Manager → Deputy Manager',
      'Deputy Manager → Manager'
    ],
    officialWebsite: 'https://gate.iitk.ac.in/',
    preparationResources: [
      'Made Easy/ACE Academy Postal Study Courses',
      'NPTEL Lectures',
      'Previous Year GATE Question Papers'
    ],
    difficulty: 5,
    selectionProcess: [
      'Step 1: Online Examination (CBT)',
      'Step 2: CCMT Counseling (for M.Tech) / PSU Interviews (for Jobs)',
      'Step 3: Document Verification'
    ],
    tags: ['technical', 'central', 'engineering', 'psu', 'postgraduate']
  },
  {
    id: 'ese-ies',
    name: 'Engineering Services Examination',
    acronym: 'ESE/IES',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Central Government Group A',
    conductingBody: 'Union Public Service Commission (UPSC)',
    eligibility: {
      degree: 'B.E./B.Tech in CE, ME, EE, or E&T',
      year: 'Final year appearing or passed',
      age: '21 to 30 years (relaxations apply)',
      percentage: 'No minimum requirement, must pass degree',
      nationality: 'Indian citizens, subjects of Nepal/Bhutan'
    },
    syllabus: {
      'Paper 1 (Prelims)': ['General Studies', 'Engineering Aptitude', 'Engineering Mathematics'],
      'Paper 2 (Prelims)': ['Core Engineering Subjects (CE/ME/EE/E&T)'],
      'Mains': ['In-depth conventional questions from Core Engineering Topics']
    },
    examPattern: {
      stages: 3,
      papers: ['Prelims (2 papers)', 'Mains (2 papers)', 'Personality Test'],
      totalMarks: 1300,
      duration: 'Prelims: 5 hours total, Mains: 6 hours total',
      types: ['MCQ (Prelims)', 'Descriptive (Mains)'],
      sections: ['Prelims: 500 marks', 'Mains: 600 marks', 'Interview: 200 marks'],
      negativeMarking: '1/3 mark for every wrong answer in Prelims'
    },
    subjects: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics & Telecommunication Engineering'],
    validity: 'Lifetime (till retirement after joining)',
    postQualifyingBenefits: [
      'Group A Gazetted Officer Post',
      'High social status and job security',
      'Opportunities in Railways, CPWD, MES, BRO, Indian Ordnance Factories'
    ],
    salary: {
      range: '₹56,100 - ₹1,77,500/month',
      payBand: 'Level 10 (₹56,100 - ₹1,77,500)',
      ctc: '₹10-15 LPA',
      perks: 'Govt Accommodation, DA, TA, Official Vehicle (at higher posts)'
    },
    careerProgression: [
      'Assistant Executive Engineer → Executive Engineer (after 4-5 years)',
      'Executive Engineer → Superintending Engineer',
      'Superintending Engineer → Chief Engineer'
    ],
    officialWebsite: 'https://www.upsc.gov.in',
    preparationResources: [
      'IES Master/Made Easy Study Material',
      'Standard Textbooks (B.S. Grewal, R.S. Khurmi)',
      'UPSC ESE Previous Year Papers'
    ],
    difficulty: 5,
    selectionProcess: [
      'Step 1: Preliminary Examination (Objective)',
      'Step 2: Main Examination (Conventional)',
      'Step 3: Personality Test (Interview)',
      'Step 4: Medical Examination',
      'Step 5: Final Merit List'
    ],
    tags: ['technical', 'central', 'engineering', 'upsc', 'group-a']
  },
  {
    id: 'isro-scientist-engineer',
    name: 'ISRO Centralized Recruitment Board - Scientist/Engineer SC',
    acronym: 'ISRO ICRB',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Space Research / Central Govt',
    conductingBody: 'Indian Space Research Organisation (ISRO)',
    eligibility: {
      degree: 'B.E./B.Tech or equivalent',
      year: 'Completed',
      age: 'Max 28 years (relaxations apply)',
      percentage: 'Minimum 65% or CGPA 6.84/10',
      nationality: 'Indian nationals'
    },
    syllabus: {
      'Technical Core': ['In-depth concepts of B.Tech core subjects (ECE, ME, CS, Civil, EE)'],
      'Aptitude': ['General Aptitude and Reasoning']
    },
    examPattern: {
      stages: 2,
      papers: ['Written Test', 'Interview'],
      totalMarks: 240,
      duration: '90 Minutes',
      types: ['MCQ'],
      sections: ['Part A: Core Discipline (80 MCQs)', 'Part B: Aptitude/Reasoning (15 MCQs)'],
      negativeMarking: '1/3 mark for wrong technical answers, no negative for aptitude in some iterations'
    },
    subjects: ['Electronics', 'Mechanical', 'Computer Science', 'Civil', 'Electrical', 'Architecture'],
    validity: 'For current recruitment cycle only',
    postQualifyingBenefits: [
      'Work on cutting-edge space technology projects',
      'Central Government employee status',
      'PRIS (Performance Related Incentive Scheme) approx 20% of basic'
    ],
    salary: {
      range: '₹56,100 - ₹1,77,500/month',
      payBand: 'Level 10',
      ctc: '₹10-14 LPA',
      perks: 'HRA, DA, TA, Medical, PRIS, Subsidized Canteen'
    },
    careerProgression: [
      'Scientist/Engineer SC → SD (after 4 years)',
      'Scientist/Engineer SD → SE',
      'Scientist/Engineer SE → SF → SG'
    ],
    officialWebsite: 'https://www.isro.gov.in/careers',
    preparationResources: [
      'ISRO Previous Year Papers',
      'GATE Study Material (as syllabus overlaps heavily)',
      'Standard Core Engineering Textbooks'
    ],
    difficulty: 4,
    selectionProcess: [
      'Step 1: Written Examination',
      'Step 2: Personal Interview (Final selection solely based on interview performance or 50:50 weightage as per new rules)',
      'Step 3: Document Verification'
    ],
    tags: ['technical', 'central', 'engineering', 'research', 'isro']
  },
  {
    id: 'barc-oces-dgfs',
    name: 'BARC Orientation Course for Engineering Graduates and Science Postgraduates',
    acronym: 'BARC OCES/DGFS',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Nuclear Research / Central Govt',
    conductingBody: 'Bhabha Atomic Research Centre (BARC)',
    eligibility: {
      degree: 'B.E./B.Tech/B.Sc (Engg)/5-year Integrated M.Tech',
      year: 'Completed or Final Year',
      age: 'Max 26 years (General)',
      percentage: 'Minimum 60%',
      nationality: 'Indian nationals'
    },
    syllabus: {
      'Core Discipline': ['Extensive conceptual questions from the specific engineering discipline (ME, CH, MT, EE, ECE, CS, IN, CE, NE)']
    },
    examPattern: {
      stages: 2,
      papers: ['Online Test (or GATE Score)'],
      totalMarks: 300,
      duration: '2 hours',
      types: ['MCQ'],
      sections: ['100 objective questions from core engineering'],
      negativeMarking: '1 mark deducted for each wrong answer (3 marks for correct)'
    },
    subjects: ['Mechanical', 'Chemical', 'Metallurgy', 'Electrical', 'Electronics', 'Computer Science', 'Instrumentation', 'Civil', 'Nuclear Engg'],
    validity: 'For current recruitment cycle only',
    postQualifyingBenefits: [
      '1 year training with stipend (₹55,000/month) at BARC Training Schools',
      'Absorption as Scientific Officer (C)',
      'Opportunity to pursue M.Tech / Ph.D under HBNI'
    ],
    salary: {
      range: '₹56,100 - ₹1,77,500/month',
      payBand: 'Level 10 (Scientific Officer-C)',
      ctc: '₹11-15 LPA',
      perks: 'CHSS (Medical), 3 increments upon joining, DA, HRA, Update Allowance'
    },
    careerProgression: [
      'Scientific Officer C → SO (D) (after 3-4 years)',
      'Scientific Officer D → SO (E)',
      'Merit-based promotion system irrespective of vacancies'
    ],
    officialWebsite: 'https://www.barconlineexam.in/',
    preparationResources: [
      'GATE preparation material',
      'Deep conceptual reading from standard textbooks',
      'BARC previous year memory-based papers'
    ],
    difficulty: 5,
    selectionProcess: [
      'Step 1: Shortlisting via Online Exam OR GATE Score',
      'Step 2: Rigorous Technical Interview',
      'Step 3: Medical Examination'
    ],
    tags: ['technical', 'central', 'engineering', 'research', 'dae']
  },
  {
    id: 'drdo-ceptam-sta-b',
    name: 'DRDO CEPTAM Senior Technical Assistant-B',
    acronym: 'DRDO CEPTAM STA-B',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Defence Research',
    conductingBody: 'Defence Research and Development Organisation (DRDO)',
    eligibility: {
      degree: 'B.Sc / Diploma in Engineering',
      year: 'Completed',
      age: '18 to 28 years',
      percentage: 'Pass class',
      nationality: 'Indian nationals'
    },
    syllabus: {
      'Tier 1 (CBT)': ['Quantitative Ability', 'Aptitude', 'General Intelligence', 'General Awareness', 'General Science'],
      'Tier 2 (CBT)': ['Specific subject of Diploma/Degree']
    },
    examPattern: {
      stages: 2,
      papers: ['Tier 1', 'Tier 2'],
      totalMarks: 220,
      duration: 'Tier 1: 90 mins, Tier 2: 90 mins',
      types: ['MCQ'],
      sections: ['Tier 1: 120 marks (Non-Tech)', 'Tier 2: 100 marks (Tech)'],
      negativeMarking: 'No negative marking'
    },
    subjects: ['Automobile', 'Chemical', 'Civil', 'Computer Science', 'Electrical', 'Electronics', 'Instrumentation', 'Mechanical', 'Metallurgy'],
    validity: 'For current recruitment cycle only',
    postQualifyingBenefits: [
      'Job in premium defence research labs',
      'Exposure to advanced military technology',
      'Central Govt facilities'
    ],
    salary: {
      range: '₹35,400 - ₹1,12,400/month',
      payBand: 'Level 6',
      ctc: '₹6-8 LPA',
      perks: 'DA, HRA, Transport Allowance, Medical, CSD Canteen facilities'
    },
    careerProgression: [
      'STA-B → Technical Officer A',
      'Technical Officer A → Technical Officer B',
      'Promotions through departmental exams and assessments'
    ],
    officialWebsite: 'https://www.drdo.gov.in/drdo/ceptam',
    preparationResources: [
      'SSC JE / RRB JE Study Material',
      'Lucent General Knowledge',
      'Diploma level engineering textbooks'
    ],
    difficulty: 3,
    selectionProcess: [
      'Step 1: CBT Tier 1 (Screening)',
      'Step 2: CBT Tier 2 (Provisional Selection)',
      'Step 3: Document Verification',
      'Step 4: Medical Examination'
    ],
    tags: ['technical', 'central', 'diploma', 'drdo']
  },
  {
    id: 'ssc-je',
    name: 'Staff Selection Commission Junior Engineer',
    acronym: 'SSC JE',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Central Government Group B (Non-Gazetted)',
    conductingBody: 'Staff Selection Commission',
    eligibility: {
      degree: 'Degree or Diploma in Civil, Electrical, or Mechanical Engineering',
      year: 'Completed',
      age: 'Max 30/32 years depending on department',
      percentage: 'Pass class',
      nationality: 'Indian citizens, subjects of Nepal/Bhutan'
    },
    syllabus: {
      'Paper 1': ['General Intelligence & Reasoning', 'General Awareness', 'General Engineering (CE/EE/ME)'],
      'Paper 2': ['General Engineering (Civil/Structural or Electrical or Mechanical)']
    },
    examPattern: {
      stages: 2,
      papers: ['Paper 1 (CBT)', 'Paper 2 (CBT)'],
      totalMarks: 500,
      duration: 'Paper 1: 2 hours, Paper 2: 2 hours',
      types: ['MCQ (Both Papers)'],
      sections: ['Paper 1: 200 marks', 'Paper 2: 300 marks'],
      negativeMarking: '0.25 marks in Paper 1, 1/3 mark in Paper 2'
    },
    subjects: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering'],
    validity: 'For current recruitment cycle only',
    postQualifyingBenefits: [
      'Job in CPWD, MES, BRO, CWC, etc.',
      'Field and desk work balance',
      'Good promotion avenues to Assistant Engineer'
    ],
    salary: {
      range: '₹35,400 - ₹1,12,400/month',
      payBand: 'Level 6',
      ctc: '₹7-9 LPA',
      perks: 'DA, HRA, TA, CGHS Medical Facility'
    },
    careerProgression: [
      'Junior Engineer → Assistant Engineer (AE)',
      'Assistant Engineer → Executive Engineer (EE)',
      'Executive Engineer → Superintending Engineer (SE)'
    ],
    officialWebsite: 'https://ssc.nic.in',
    preparationResources: [
      'SSC JE Previous Year Solved Papers (Made Easy)',
      'R.S. Khurmi for objective questions',
      'Lucent GK for Non-Tech'
    ],
    difficulty: 3,
    selectionProcess: [
      'Step 1: CBT Paper 1',
      'Step 2: CBT Paper 2',
      'Step 3: Document Verification (by User Departments)',
      'Step 4: Medical Examination'
    ],
    tags: ['technical', 'central', 'diploma', 'engineering', 'ssc']
  },
  {
    id: 'rrb-je',
    name: 'Railway Recruitment Board Junior Engineer',
    acronym: 'RRB JE',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Indian Railways',
    conductingBody: 'Railway Recruitment Boards',
    eligibility: {
      degree: 'Diploma / Degree in Engineering',
      year: 'Completed',
      age: '18 to 33 years',
      percentage: 'Pass class',
      nationality: 'Indian nationals'
    },
    syllabus: {
      'CBT 1': ['Maths', 'General Intelligence & Reasoning', 'General Awareness', 'General Science'],
      'CBT 2': ['General Awareness', 'Physics & Chemistry', 'Basics of Computers', 'Environment', 'Technical Abilities']
    },
    examPattern: {
      stages: 2,
      papers: ['CBT 1', 'CBT 2'],
      totalMarks: 250,
      duration: 'CBT 1: 90 mins, CBT 2: 120 mins',
      types: ['MCQ'],
      sections: ['CBT 1: 100 marks', 'CBT 2: 150 marks'],
      negativeMarking: '1/3 mark for every wrong answer'
    },
    subjects: ['Civil', 'Mechanical', 'Electrical', 'Electronics', 'CS/IT', 'Printing'],
    validity: 'For current recruitment cycle only',
    postQualifyingBenefits: [
      'Job security in Indian Railways',
      'Railway passes for family',
      'Good scope for earning running/night allowances'
    ],
    salary: {
      range: '₹35,400 (Basic Pay)',
      payBand: 'Level 6',
      ctc: '₹6-9 LPA',
      perks: 'DA, HRA, Travel Passes, Medical, Night Duty Allowance'
    },
    careerProgression: [
      'Junior Engineer → Senior Section Engineer (SSE)',
      'SSE → Assistant Divisional Engineer (ADEN)',
      'ADEN → Divisional Engineer (DEN)'
    ],
    officialWebsite: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,4,1244',
    preparationResources: [
      'RRB JE Previous Year Papers',
      'Speedy General Science / Lucent GK',
      'Youth Competition Times Books'
    ],
    difficulty: 3,
    selectionProcess: [
      'Step 1: CBT 1 (Screening)',
      'Step 2: CBT 2 (Final Merit)',
      'Step 3: Document Verification',
      'Step 4: Strict Medical Fitness Test (A3, B1, B2, C1 categories)'
    ],
    tags: ['technical', 'railways', 'diploma', 'engineering']
  },
  {
    id: 'ntpc-et-gate',
    name: 'NTPC Executive Trainee (Through GATE)',
    acronym: 'NTPC ET',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Maharatna PSU',
    conductingBody: 'National Thermal Power Corporation (NTPC)',
    eligibility: {
      degree: 'B.E./B.Tech',
      year: 'Completed or Final Year',
      age: 'Max 27 years',
      percentage: 'Minimum 65%',
      nationality: 'Indian nationals'
    },
    syllabus: {
      'Core': ['As per GATE Syllabus for respective branch']
    },
    examPattern: {
      stages: 2,
      papers: ['GATE Exam', 'GD/PI'],
      totalMarks: 100,
      duration: 'GATE (3 hours)',
      types: ['GATE Exam Pattern'],
      sections: ['GATE core score used for shortlisting'],
      negativeMarking: 'As per GATE'
    },
    subjects: ['Electrical', 'Mechanical', 'Electronics', 'Instrumentation', 'Civil', 'Mining'],
    validity: 'Valid GATE score of the current year',
    postQualifyingBenefits: [
      'Job in India\'s largest power utility (Maharatna)',
      'Best-in-class townships and medical facilities',
      'Performance Related Pay (PRP)'
    ],
    salary: {
      range: '₹40,000 - ₹1,40,000/month',
      payBand: 'Level E1',
      ctc: '₹14-16 LPA',
      perks: 'Dearness Allowance, HRA, Medical, Terminal Benefits, PRP'
    },
    careerProgression: [
      'Executive Trainee → Assistant Manager (E2)',
      'Assistant Manager → Manager (E3)',
      'Manager → Senior Manager (E4)'
    ],
    officialWebsite: 'https://careers.ntpc.co.in/',
    preparationResources: [
      'GATE preparation resources',
      'Mock interviews for GD/PI',
      'Current Affairs related to Power Sector'
    ],
    difficulty: 4,
    selectionProcess: [
      'Step 1: Shortlisting based on GATE marks',
      'Step 2: Group Discussion (GD) / Personal Interview (PI)',
      'Step 3: Document Verification and Medical Check'
    ],
    tags: ['technical', 'psu', 'gate', 'maharatna', 'engineering']
  },
  {
    id: 'bhel-et',
    name: 'BHEL Engineer Trainee',
    acronym: 'BHEL ET',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Maharatna PSU',
    conductingBody: 'Bharat Heavy Electricals Limited (BHEL)',
    eligibility: {
      degree: 'B.E./B.Tech or 5 Year Integrated M.Tech',
      year: 'Completed',
      age: 'Max 27/29 years depending on qualification',
      percentage: 'Minimum 65%',
      nationality: 'Indian nationals'
    },
    syllabus: {
      'Subject Knowledge': ['Core engineering concepts from B.Tech curriculum'],
      'General Aptitude': ['Reasoning, Quantitative Aptitude, General English']
    },
    examPattern: {
      stages: 2,
      papers: ['Computer Based Test (CBT)', 'Interview'],
      totalMarks: 240,
      duration: '150 Minutes',
      types: ['MCQ'],
      sections: ['Technical (120 marks)', 'Reasoning (50 marks)', 'English (50 marks)', 'GK (20 marks)'],
      negativeMarking: '0.25 marks deducted for wrong answer'
    },
    subjects: ['Mechanical', 'Electrical', 'Civil', 'Chemical', 'HR', 'Finance', 'IT'],
    validity: 'For current recruitment cycle only',
    postQualifyingBenefits: [
      'Work in premier heavy electrical equipment manufacturing PSU',
      'Excellent township facilities',
      'High job security'
    ],
    salary: {
      range: '₹50,000 - ₹1,60,000/month',
      payBand: 'Level E1 to E2 upon confirmation',
      ctc: '₹12-14 LPA',
      perks: 'Basic Pay, DA, Perks & Allowances, HRA/Company Accommodation, Medical, PRP'
    },
    careerProgression: [
      'Engineer Trainee (E1) → Engineer (E2) (after 1 year)',
      'Engineer → Deputy Manager (E3)',
      'Deputy Manager → Manager (E4)'
    ],
    officialWebsite: 'https://careers.bhel.in/',
    preparationResources: [
      'GATE standard technical prep',
      'R.S. Aggarwal for Quantitative/Reasoning',
      'Lucent GK'
    ],
    difficulty: 4,
    selectionProcess: [
      'Step 1: Computer Based Examination (75% weightage)',
      'Step 2: Personal Interview (25% weightage)',
      'Step 3: Pre-employment Medical Examination'
    ],
    tags: ['technical', 'psu', 'maharatna', 'engineering', 'independent-exam']
  },
  {
    id: 'ongc-aee-gate',
    name: 'ONGC Assistant Executive Engineer (Through GATE)',
    acronym: 'ONGC AEE',
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: 'Maharatna PSU / Oil & Gas',
    conductingBody: 'Oil and Natural Gas Corporation (ONGC)',
    eligibility: {
      degree: 'B.E./B.Tech/M.Sc',
      year: 'Completed',
      age: 'Max 30 years (General)',
      percentage: 'Minimum 60%',
      nationality: 'Indian nationals'
    },
    syllabus: {
      'Core': ['GATE Syllabus']
    },
    examPattern: {
      stages: 2,
      papers: ['GATE Exam', 'Interview'],
      totalMarks: 100,
      duration: 'GATE (3 hours)',
      types: ['GATE Exam Pattern'],
      sections: ['GATE Score (60 marks)', 'Qualification (25 marks)', 'Interview (15 marks)'],
      negativeMarking: 'As per GATE'
    },
    subjects: ['Mechanical', 'Petroleum', 'Civil', 'Electrical', 'Electronics', 'Chemical', 'Computer Science', 'Geology', 'Geophysics'],
    validity: 'Current year GATE score',
    postQualifyingBenefits: [
      'Highest paying PSU in India (Maharatna)',
      '14-days on/14-days off roster system in offshore rigs',
      'Massive allowances and PRP'
    ],
    salary: {
      range: '₹60,000 - ₹1,80,000/month',
      payBand: 'Level E1',
      ctc: '₹20-22 LPA',
      perks: 'DA, HRA, Mining Allowance, Offshore Allowance, PRP, Medical, Superannuation Benefits'
    },
    careerProgression: [
      'AEE (E1) → Executive Engineer (E2)',
      'Executive Engineer → Superintending Engineer (E3)',
      'Superintending Engineer → Chief Engineer (E4)'
    ],
    officialWebsite: 'https://ongcindia.com/web/eng/careers',
    preparationResources: [
      'Top-tier GATE rank is essential',
      'Mock interviews covering core subjects and Oil/Gas sector basics',
      'Final year project deep dive'
    ],
    difficulty: 5,
    selectionProcess: [
      'Step 1: Shortlisting via GATE score',
      'Step 2: Personal Interview',
      'Step 3: Document Verification and Medical Check (Strict for field roles)'
    ],
    tags: ['technical', 'psu', 'maharatna', 'gate', 'engineering']
  }
,
  {
    "id": "iocl-engineers",
    "name": "IOCL Engineers",
    "acronym": "IOCL ET",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Indian Oil Corporation Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core": [
        "As per GATE Syllabus"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "GATE Score",
        "GD/PI"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "GATE Core"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Indian Oil Corporation Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Indian%20Oil%20Corporation%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "hpcl-engineers",
    "name": "HPCL Engineers/Officers",
    "acronym": "HPCL ET",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Hindustan Petroleum Corporation Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core": [
        "As per GATE Syllabus"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "GATE Score",
        "GD/PI"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "GATE Core"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Hindustan Petroleum Corporation Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Hindustan%20Petroleum%20Corporation%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "bpcl-engineers",
    "name": "BPCL Engineers",
    "acronym": "BPCL ET",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Bharat Petroleum Corporation Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core": [
        "As per GATE Syllabus"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "GATE Score",
        "GD/PI"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "GATE Core"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Bharat Petroleum Corporation Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Bharat%20Petroleum%20Corporation%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "sail-mt",
    "name": "SAIL Management Trainee",
    "acronym": "SAIL MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Steel Authority of India Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Steel Authority of India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Steel%20Authority%20of%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "hal-mt",
    "name": "HAL Management Trainee",
    "acronym": "HAL MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Hindustan Aeronautics Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Hindustan Aeronautics Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Hindustan%20Aeronautics%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "bel-pe",
    "name": "BEL Project Engineer",
    "acronym": "BEL PE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Bharat Electronics Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Bharat Electronics Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Bharat%20Electronics%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "npcil-sa",
    "name": "NPCIL Scientific Assistant/Engineer",
    "acronym": "NPCIL ET",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Nuclear Power Corporation of India Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Nuclear Power Corporation of India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Nuclear%20Power%20Corporation%20of%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "gail-et",
    "name": "GAIL Executive Trainee",
    "acronym": "GAIL ET",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Gas Authority of India Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core": [
        "As per GATE Syllabus"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "GATE Score",
        "GD/PI"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "GATE Core"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Gas Authority of India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Gas%20Authority%20of%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "pgcil-et",
    "name": "POWERGRID Executive Trainee",
    "acronym": "PGCIL ET",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Power Grid Corporation of India Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core": [
        "As per GATE Syllabus"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "GATE Score",
        "GD/PI"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "GATE Core"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Power Grid Corporation of India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Power%20Grid%20Corporation%20of%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "aai-je",
    "name": "AAI Junior Executive",
    "acronym": "AAI JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Airports Authority of India",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Airports Authority of India",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Airports%20Authority%20of%20India%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "dmrc-je",
    "name": "DMRC Junior Engineer",
    "acronym": "DMRC JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Delhi Metro Rail Corporation",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Delhi Metro Rail Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Delhi%20Metro%20Rail%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "rites-mt",
    "name": "RITES Management Trainee",
    "acronym": "RITES MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "RITES Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with RITES Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=RITES%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "ircon-mt",
    "name": "IRCON Management Trainee",
    "acronym": "IRCON MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "IRCON International Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with IRCON International Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=IRCON%20International%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "nbcc-je",
    "name": "NBCC Junior Engineer",
    "acronym": "NBCC JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "National Buildings Construction Corporation",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Buildings Construction Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Buildings%20Construction%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "wapcos-je",
    "name": "WAPCOS Junior Engineer",
    "acronym": "WAPCOS JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "WAPCOS Limited",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with WAPCOS Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=WAPCOS%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "nhpc-je",
    "name": "NHPC Junior Engineer",
    "acronym": "NHPC JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "National Hydroelectric Power Corporation",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Hydroelectric Power Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Hydroelectric%20Power%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "neepco-jm",
    "name": "NEEPCO Junior Manager",
    "acronym": "NEEPCO JM",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "North Eastern Electric Power Corporation Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with North Eastern Electric Power Corporation Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=North%20Eastern%20Electric%20Power%20Corporation%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "mecl-exploration",
    "name": "MECL Mineral Exploration",
    "acronym": "MECL",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Mineral Exploration Corporation Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Mineral Exploration Corporation Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Mineral%20Exploration%20Corporation%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "nmdc-jm",
    "name": "NMDC Junior Manager",
    "acronym": "NMDC JM",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "National Mineral Development Corporation",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Mineral Development Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Mineral%20Development%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "moil-mt",
    "name": "MOIL Management Trainee",
    "acronym": "MOIL MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Manganese Ore India Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Manganese Ore India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Manganese%20Ore%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "rinl-jm",
    "name": "RINL Junior Manager",
    "acronym": "RINL JM",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Rashtriya Ispat Nigam Limited (Vizag Steel)",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Rashtriya Ispat Nigam Limited (Vizag Steel)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Rashtriya%20Ispat%20Nigam%20Limited%20(Vizag%20Steel)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "nalco-jm",
    "name": "NALCO Junior Manager",
    "acronym": "NALCO JM",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "National Aluminium Company Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Aluminium Company Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Aluminium%20Company%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "coal-india-mt",
    "name": "Coal India Management Trainee",
    "acronym": "CIL MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Coal India Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Coal India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Coal%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "nlc-je",
    "name": "NLC India Junior Engineer",
    "acronym": "NLC JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "NLC India Limited",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with NLC India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=NLC%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "thdc-je",
    "name": "THDC Junior Engineer",
    "acronym": "THDC JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Tehri Hydro Development Corporation",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Tehri Hydro Development Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Tehri%20Hydro%20Development%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "sjvn-jfe",
    "name": "SJVN Junior Field Engineer",
    "acronym": "SJVN JFE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Satluj Jal Vidyut Nigam",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Satluj Jal Vidyut Nigam",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Satluj%20Jal%20Vidyut%20Nigam%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "seci-jm",
    "name": "SECI Junior Manager",
    "acronym": "SECI JM",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Solar Energy Corporation of India",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Solar Energy Corporation of India",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Solar%20Energy%20Corporation%20of%20India%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "ireda-am",
    "name": "IREDA Assistant Manager",
    "acronym": "IREDA AM",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Indian Renewable Energy Development Agency",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Indian Renewable Energy Development Agency",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Indian%20Renewable%20Energy%20Development%20Agency%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "rec-mt",
    "name": "REC Management Trainee",
    "acronym": "REC MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Rural Electrification Corporation Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Rural Electrification Corporation Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Rural%20Electrification%20Corporation%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "pfc-mt",
    "name": "PFC Management Trainee",
    "acronym": "PFC MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Power Finance Corporation",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Power Finance Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹50,000 - ₹1,60,000/month",
      "payBand": "Level E2 (Maharatna)",
      "ctc": "₹15-18 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Power%20Finance%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "tcil-je",
    "name": "TCIL Junior Engineer",
    "acronym": "TCIL JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Telecommunications Consultants India Limited",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Telecommunications Consultants India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Telecommunications%20Consultants%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "bsnl-jto",
    "name": "BSNL Junior Telecom Officer",
    "acronym": "BSNL JTO",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Bharat Sanchar Nigam Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Bharat Sanchar Nigam Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Bharat%20Sanchar%20Nigam%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "ecil-get",
    "name": "ECIL Graduate Engineer Trainee",
    "acronym": "ECIL GET",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Electronics Corporation of India Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Electronics Corporation of India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Electronics%20Corporation%20of%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "beml-mt",
    "name": "BEML Management Trainee",
    "acronym": "BEML MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Bharat Earth Movers Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Bharat Earth Movers Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Bharat%20Earth%20Movers%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "hmt-mt",
    "name": "HMT Management Trainee",
    "acronym": "HMT MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "HMT Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with HMT Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=HMT%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "grse-gt",
    "name": "GRSE Graduate Trainee",
    "acronym": "GRSE GT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Garden Reach Shipbuilders & Engineers",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Garden Reach Shipbuilders & Engineers",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Garden%20Reach%20Shipbuilders%20%26%20Engineers%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "mdl-gt",
    "name": "MDL Graduate Trainee",
    "acronym": "MDL GT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Mazagon Dock Shipbuilders Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Mazagon Dock Shipbuilders Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Mazagon%20Dock%20Shipbuilders%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "hsl-gt",
    "name": "HSL Graduate Trainee",
    "acronym": "HSL GT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Hindustan Shipyard Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Hindustan Shipyard Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Hindustan%20Shipyard%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "csl-gt",
    "name": "CSL Graduate Trainee",
    "acronym": "CSL GT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Cochin Shipyard Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Cochin Shipyard Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Cochin%20Shipyard%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "midhani-mt",
    "name": "MIDHANI Management Trainee",
    "acronym": "MIDHANI MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Mishra Dhatu Nigam Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Mishra Dhatu Nigam Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Mishra%20Dhatu%20Nigam%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "ofb-jwm",
    "name": "OFB Junior Works Manager",
    "acronym": "OFB JWM",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Ordnance Factory Board",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Ordnance Factory Board",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Ordnance%20Factory%20Board%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "bdl-mt",
    "name": "BDL Management Trainee",
    "acronym": "BDL MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Bharat Dynamics Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Bharat Dynamics Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Bharat%20Dynamics%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "drdo-hemrl-scientist",
    "name": "DRDO HEMRL Scientist",
    "acronym": "HEMRL",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "DRDO - High Energy Materials Research Laboratory",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with DRDO - High Energy Materials Research Laboratory",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=DRDO%20-%20High%20Energy%20Materials%20Research%20Laboratory%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "isro-vssc",
    "name": "ISRO VSSC Scientist/Engineer",
    "acronym": "VSSC",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Vikram Sarabhai Space Centre (ISRO)",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Vikram Sarabhai Space Centre (ISRO)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Vikram%20Sarabhai%20Space%20Centre%20(ISRO)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "isro-lpsc",
    "name": "ISRO LPSC Scientist/Engineer",
    "acronym": "LPSC",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Liquid Propulsion Systems Centre (ISRO)",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Liquid Propulsion Systems Centre (ISRO)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Liquid%20Propulsion%20Systems%20Centre%20(ISRO)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "isro-sdsc",
    "name": "ISRO SDSC SHAR Scientist",
    "acronym": "SDSC",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Satish Dhawan Space Centre (ISRO)",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Satish Dhawan Space Centre (ISRO)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Satish%20Dhawan%20Space%20Centre%20(ISRO)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "isro-ursc",
    "name": "ISRO URSC Scientist",
    "acronym": "URSC",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "U R Rao Satellite Centre (ISRO)",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with U R Rao Satellite Centre (ISRO)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=U%20R%20Rao%20Satellite%20Centre%20(ISRO)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "nal-scientist",
    "name": "NAL Scientist",
    "acronym": "NAL",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "National Aerospace Laboratories (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Aerospace Laboratories (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Aerospace%20Laboratories%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "ada-to",
    "name": "ADA Technical Officer",
    "acronym": "ADA",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Aeronautical Development Agency",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Aeronautical Development Agency",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Aeronautical%20Development%20Agency%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "deal-scientist",
    "name": "DEAL Scientist",
    "acronym": "DEAL",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Defence Electronics Application Laboratory (DRDO)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Defence Electronics Application Laboratory (DRDO)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Defence%20Electronics%20Application%20Laboratory%20(DRDO)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "dmrl-scientist",
    "name": "DMRL Scientist",
    "acronym": "DMRL",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Defence Metallurgical Research Laboratory (DRDO)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Defence Metallurgical Research Laboratory (DRDO)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Defence%20Metallurgical%20Research%20Laboratory%20(DRDO)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "cvrde-engineer",
    "name": "CVRDE Engineer",
    "acronym": "CVRDE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Combat Vehicles Research and Development Establishment",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Combat Vehicles Research and Development Establishment",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Combat%20Vehicles%20Research%20and%20Development%20Establishment%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "arde-engineer",
    "name": "ARDE Engineer",
    "acronym": "ARDE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Armament Research & Development Establishment",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Armament Research & Development Establishment",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Armament%20Research%20%26%20Development%20Establishment%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "cpwd-je",
    "name": "CPWD Junior Engineer",
    "acronym": "CPWD JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Central Public Works Department",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Central Public Works Department",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Central%20Public%20Works%20Department%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "mes-jwm",
    "name": "MES Junior Works Manager",
    "acronym": "MES JWM",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Military Engineering Services",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Military Engineering Services",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Military%20Engineering%20Services%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "bro-mts",
    "name": "BRO Multi-Tasking Staff Technical",
    "acronym": "BRO MTS",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Border Roads Organisation",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Border Roads Organisation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Border%20Roads%20Organisation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "rrb-sse",
    "name": "RRB Senior Section Engineer",
    "acronym": "RRB SSE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Railway Recruitment Board",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Railway Recruitment Board",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Railway%20Recruitment%20Board%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "rrb-alp",
    "name": "RRB Assistant Loco Pilot",
    "acronym": "RRB ALP",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Railway Recruitment Board",
    "eligibility": {
      "degree": "ITI / Diploma in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Railway Recruitment Board",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Railway%20Recruitment%20Board%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "cwc-jta",
    "name": "CWC Junior Technical Assistant",
    "acronym": "CWC JTA",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Central Warehousing Corporation",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Central Warehousing Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Central%20Warehousing%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "fci-je",
    "name": "FCI Junior Engineer",
    "acronym": "FCI JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Food Corporation of India",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Food Corporation of India",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Food%20Corporation%20of%20India%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "csir-scientist",
    "name": "CSIR Labs Scientist",
    "acronym": "CSIR",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Council of Scientific and Industrial Research",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Council of Scientific and Industrial Research",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Council%20of%20Scientific%20and%20Industrial%20Research%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "nio-to",
    "name": "NIO Technical Officer",
    "acronym": "NIO TO",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "National Institute of Oceanography",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Institute of Oceanography",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Institute%20of%20Oceanography%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "nhai-smt",
    "name": "NHAI Senior Manager Technical",
    "acronym": "NHAI SMT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "National Highways Authority of India",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Highways Authority of India",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Highways%20Authority%20of%20India%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "nhidcl-je",
    "name": "NHIDCL Junior Engineer",
    "acronym": "NHIDCL JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "National Highways & Infrastructure Development Corporation",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Highways & Infrastructure Development Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Highways%20%26%20Infrastructure%20Development%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "port-trust-je",
    "name": "Port Trust JE/AE",
    "acronym": "Port JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Major Port Trusts of India",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Major Port Trusts of India",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Major%20Port%20Trusts%20of%20India%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "kiocl-mt",
    "name": "KIOCL Management Trainee",
    "acronym": "KIOCL MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "KIOCL Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with KIOCL Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=KIOCL%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "andrew-yule-mt",
    "name": "Andrew Yule Management Trainee",
    "acronym": "AY MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Andrew Yule & Co. Ltd.",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Andrew Yule & Co. Ltd.",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Andrew%20Yule%20%26%20Co.%20Ltd.%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "hcl-mining",
    "name": "Hindustan Copper Mining Engineer",
    "acronym": "HCL MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Hindustan Copper Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Hindustan Copper Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Hindustan%20Copper%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "nfl-mt",
    "name": "National Fertilizers Management Trainee",
    "acronym": "NFL MT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "National Fertilizers Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Fertilizers Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Fertilizers%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "fact-engineers",
    "name": "FACT Engineers",
    "acronym": "FACT",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Fertilisers And Chemicals Travancore Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Fertilisers And Chemicals Travancore Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Fertilisers%20And%20Chemicals%20Travancore%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "hll-engineers",
    "name": "HLL Lifecare Engineers",
    "acronym": "HLL ET",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "HLL Lifecare Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with HLL Lifecare Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=HLL%20Lifecare%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "bis-to",
    "name": "BIS Technical Officer",
    "acronym": "BIS TO",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Bureau of Indian Standards",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Bureau of Indian Standards",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Bureau%20of%20Indian%20Standards%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "cpcb-to",
    "name": "CPCB Technical Officer",
    "acronym": "CPCB TO",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Central Pollution Control Board",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Central Pollution Control Board",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Central%20Pollution%20Control%20Board%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "gsi-geoscientist",
    "name": "GSI Geoscientist",
    "acronym": "GSI",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Geological Survey of India",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Geological Survey of India",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Geological%20Survey%20of%20India%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "posoco-engineer",
    "name": "POSOCO Engineer",
    "acronym": "POSOCO",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "National Load Despatch Centre",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Load Despatch Centre",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Load%20Despatch%20Centre%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "tsecl-je",
    "name": "TSECL Junior Engineer",
    "acronym": "TSECL JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "State Govt Recruitment",
    "conductingBody": "Tripura State Electricity Corporation Limited",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Tripura State Electricity Corporation Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Tripura%20State%20Electricity%20Corporation%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "apdcl-je",
    "name": "APDCL Junior Engineer",
    "acronym": "APDCL JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "State Govt Recruitment",
    "conductingBody": "Assam Power Distribution Company Limited",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Assam Power Distribution Company Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Assam%20Power%20Distribution%20Company%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "apgenco-je",
    "name": "APGENCO Junior Engineer",
    "acronym": "APGENCO JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "State Govt Recruitment",
    "conductingBody": "Andhra Pradesh Power Generation Corporation",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Andhra Pradesh Power Generation Corporation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Andhra%20Pradesh%20Power%20Generation%20Corporation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "kpcl-je",
    "name": "KPCL Junior Engineer",
    "acronym": "KPCL JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "State Govt Recruitment",
    "conductingBody": "Karnataka Power Corporation Limited",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Karnataka Power Corporation Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Karnataka%20Power%20Corporation%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "msedcl-je",
    "name": "MSEDCL Junior Engineer",
    "acronym": "MSEDCL JE",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "State Govt Recruitment",
    "conductingBody": "Maharashtra State Electricity Distribution Company",
    "eligibility": {
      "degree": "Diploma / Degree in Engineering",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Maharashtra State Electricity Distribution Company",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹35,400 - ₹1,12,400/month",
      "payBand": "Level 6",
      "ctc": "₹6-9 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Maharashtra%20State%20Electricity%20Distribution%20Company%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "eil-engineers",
    "name": "EIL Engineers",
    "acronym": "EIL",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "PSU Recruitment",
    "conductingBody": "Engineers India Limited",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Engineers India Limited",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Engineers%20India%20Limited%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "psu",
      "engineering"
    ]
  },
  {
    "id": "drdo-srf",
    "name": "DRDO Senior Research Fellow",
    "acronym": "DRDO SRF",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Defence Research and Development Organisation",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Defence Research and Development Organisation",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Defence%20Research%20and%20Development%20Organisation%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "isro-nrsc",
    "name": "ISRO NRSC Scientist",
    "acronym": "NRSC",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "National Remote Sensing Centre (ISRO)",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Remote Sensing Centre (ISRO)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Remote%20Sensing%20Centre%20(ISRO)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "sac-scientist",
    "name": "SAC Scientist",
    "acronym": "SAC",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Space Applications Centre (ISRO)",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Space Applications Centre (ISRO)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Space%20Applications%20Centre%20(ISRO)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 4,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "cecri-csir",
    "name": "CECRI CSIR Scientist",
    "acronym": "CECRI",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Central Electrochemical Research Institute (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Central Electrochemical Research Institute (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Central%20Electrochemical%20Research%20Institute%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "cmeri-csir",
    "name": "CMERI CSIR Scientist",
    "acronym": "CMERI",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Central Mechanical Engineering Research Institute (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Central Mechanical Engineering Research Institute (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Central%20Mechanical%20Engineering%20Research%20Institute%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "nml-csir",
    "name": "NML CSIR Scientist",
    "acronym": "NML",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "National Metallurgical Laboratory (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Metallurgical Laboratory (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Metallurgical%20Laboratory%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "serc-csir",
    "name": "SERC CSIR Scientist",
    "acronym": "SERC",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Structural Engineering Research Centre (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Structural Engineering Research Centre (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Structural%20Engineering%20Research%20Centre%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "crri-csir",
    "name": "CRRI CSIR Scientist",
    "acronym": "CRRI",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Central Road Research Institute (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Central Road Research Institute (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Central%20Road%20Research%20Institute%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "cbri-csir",
    "name": "CBRI CSIR Scientist",
    "acronym": "CBRI",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Central Building Research Institute (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Central Building Research Institute (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Central%20Building%20Research%20Institute%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "ampri-csir",
    "name": "AMPRI CSIR Scientist",
    "acronym": "AMPRI",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "Advanced Materials and Processes Research Institute (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with Advanced Materials and Processes Research Institute (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=Advanced%20Materials%20and%20Processes%20Research%20Institute%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "neeri-csir",
    "name": "NEERI CSIR Scientist",
    "acronym": "NEERI",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "National Environmental Engineering Research Institute (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Environmental Engineering Research Institute (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Environmental%20Engineering%20Research%20Institute%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "niist-csir",
    "name": "NIIST CSIR Scientist",
    "acronym": "NIIST",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Central Govt Recruitment",
    "conductingBody": "National Institute for Interdisciplinary Science and Technology (CSIR)",
    "eligibility": {
      "degree": "B.E./B.Tech/M.E./M.Tech/Ph.D",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Core Discipline": [
        "In-depth theoretical concepts, numericals, and research-oriented topics"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (100%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with National Institute for Interdisciplinary Science and Technology (CSIR)",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹56,100 - ₹1,77,500/month",
      "payBand": "Level 10",
      "ctc": "₹9-12 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=National%20Institute%20for%20Interdisciplinary%20Science%20and%20Technology%20(CSIR)%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  },
  {
    "id": "ion-technical",
    "name": "ION Technical (IIT KGP PSU tests)",
    "acronym": "ION",
    "volume": 1,
    "volumeName": "Indian Technical Engineering Exams",
    "category": "Technical Recruitment",
    "conductingBody": "IIT Kharagpur / TCS iON",
    "eligibility": {
      "degree": "B.E./B.Tech in relevant discipline",
      "year": "Completed or Final Year",
      "age": "Typically up to 27/30 years (category relaxations apply)",
      "percentage": "Min 60% or 65% aggregate",
      "nationality": "Indian nationals"
    },
    "syllabus": {
      "Technical Core": [
        "Advanced concepts from B.Tech curriculum"
      ],
      "Aptitude": [
        "Quantitative Aptitude, Logical Reasoning, General Awareness"
      ]
    },
    "examPattern": {
      "stages": 2,
      "papers": [
        "Computer Based Test",
        "Interview"
      ],
      "totalMarks": 200,
      "duration": "2 hours",
      "types": [
        "MCQ"
      ],
      "sections": [
        "Technical (70%)",
        "Non-Technical (30%)"
      ],
      "negativeMarking": "0.25 marks deducted for wrong answer"
    },
    "subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electronics",
      "Computer Science"
    ],
    "validity": "For current recruitment cycle only",
    "postQualifyingBenefits": [
      "Secure job with IIT Kharagpur / TCS iON",
      "Excellent growth opportunities",
      "Comprehensive medical and residential facilities"
    ],
    "salary": {
      "range": "₹40,000 - ₹1,40,000/month",
      "payBand": "Level E1",
      "ctc": "₹10-14 LPA",
      "perks": "DA, HRA, Medical, PRP"
    },
    "careerProgression": [
      "Trainee / Junior role (1st year)",
      "Assistant Manager / Engineer",
      "Manager / Senior Engineer"
    ],
    "officialWebsite": "https://www.google.com/search?q=IIT%20Kharagpur%20%2F%20TCS%20iON%20careers",
    "preparationResources": [
      "GATE/IES standard technical material",
      "Previous year question papers",
      "Current affairs (if applicable)"
    ],
    "difficulty": 3,
    "selectionProcess": [
      "Step 1: Written Exam / GATE shortlisting",
      "Step 2: Group Discussion / Personal Interview",
      "Step 3: Medical Fitness Test"
    ],
    "tags": [
      "technical",
      "government",
      "engineering"
    ]
  }
];

module.exports = vol1_exams;
