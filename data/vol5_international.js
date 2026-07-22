const vol5_exams = [];

const generateExam = (base) => {
  return {
    id: base.id || 'unknown-id',
    name: base.name || 'Unknown Exam',
    acronym: base.acronym || 'EXAM',
    volume: 5,
    volumeName: 'International Exams & Licensure',
    category: base.category || 'General',
    conductingBody: base.conductingBody || 'International Body',
    eligibility: {
      degree: base.degree || 'Bachelor in Engineering/Technology or relevant field',
      year: base.year || 'Final year or Graduated',
      age: base.age || 'No limit',
      percentage: base.percentage || 'No minimum requirement',
      nationality: base.nationality || 'All nationalities'
    },
    syllabus: base.syllabus || {
      'General Section': ['Aptitude', 'Reasoning', 'Verbal'],
      'Core Section': ['Subject Specific Topics']
    },
    examPattern: base.examPattern || {
      stages: 1,
      papers: ['Paper 1 (Standard)'],
      totalMarks: 100,
      duration: '2-4 hours',
      types: ['MCQ', 'Analytical'],
      sections: ['General', 'Core'],
      negativeMarking: 'Varies'
    },
    subjects: base.subjects || ['General Aptitude', 'Core Engineering'],
    validity: base.validity || '2-5 years depending on the board',
    postQualifyingBenefits: base.postQualifyingBenefits || [
      'Global recognition',
      'Eligibility for higher education',
      'Career advancement'
    ],
    salary: base.salary || {
      range: '$60,000 - $120,000/year',
      payBand: 'Professional Band',
      ctc: '$70k-150k USD',
      perks: 'Health Insurance, Relocation, Visa Sponsorship'
    },
    careerProgression: base.careerProgression || [
      'Entry Level -> Mid Level (3-5 years)',
      'Mid Level -> Senior Level (5-10 years)',
      'Senior Level -> Management/Lead'
    ],
    officialWebsite: base.officialWebsite || 'https://www.example.org',
    preparationResources: base.preparationResources || [
      'Official Guide',
      'Online Mock Tests',
      'Standard Textbooks'
    ],
    difficulty: base.difficulty || 4,
    selectionProcess: base.selectionProcess || [
      'Step 1: Exam Registration',
      'Step 2: Take the Test',
      'Step 3: Score Reporting',
      'Step 4: Application to Universities/Employers'
    ],
    tags: base.tags || ['international', 'certification', 'engineering']
  };
};

// 1-15: GRADUATE ADMISSIONS
vol5_exams.push(generateExam({
  id: 'gre-general', name: 'GRE General Test', acronym: 'GRE', category: 'Graduate Admissions',
  conductingBody: 'ETS (Educational Testing Service)',
  syllabus: { 'Verbal Reasoning': ['Reading Comprehension', 'Text Completion', 'Sentence Equivalence'], 'Quantitative Reasoning': ['Arithmetic', 'Algebra', 'Geometry', 'Data Analysis'], 'Analytical Writing': ['Analyze an Issue', 'Analyze an Argument'] },
  examPattern: { stages: 1, papers: ['GRE General Test (1h 58m)'], totalMarks: 340, duration: '1 hour 58 mins', types: ['MCQ', 'Descriptive'], sections: ['Verbal: 130-170', 'Quant: 130-170', 'AWA: 0-6'], negativeMarking: 'No negative marking' },
  validity: '5 years', officialWebsite: 'https://www.ets.org/gre', difficulty: 3, tags: ['ms', 'phd', 'abroad']
}));
['Physics', 'Chemistry', 'Mathematics', 'Psychology'].forEach(sub => {
  vol5_exams.push(generateExam({
    id: `gre-subject-${sub.toLowerCase()}`, name: `GRE Subject Test - ${sub}`, acronym: `GRE ${sub}`, category: 'Graduate Admissions', conductingBody: 'ETS',
    validity: '5 years', officialWebsite: 'https://www.ets.org/gre', difficulty: 4
  }));
});
vol5_exams.push(generateExam({
  id: 'toefl-ibt', name: 'TOEFL iBT - Test of English as a Foreign Language', acronym: 'TOEFL', category: 'Graduate Admissions', conductingBody: 'ETS',
  syllabus: { 'Reading': ['3-4 passages'], 'Listening': ['Lectures', 'Conversations'], 'Speaking': ['Independent', 'Integrated tasks'], 'Writing': ['Integrated', 'Independent tasks'] },
  examPattern: { stages: 1, papers: ['TOEFL iBT'], totalMarks: 120, duration: 'Under 2 hours', types: ['MCQ', 'Speaking', 'Descriptive'], sections: ['Reading', 'Listening', 'Speaking', 'Writing'], negativeMarking: 'No negative marking' },
  validity: '2 years', officialWebsite: 'https://www.ets.org/toefl'
}));
['IELTS Academic', 'IELTS General Training'].forEach(type => {
  vol5_exams.push(generateExam({
    id: type.toLowerCase().replace(' ', '-'), name: type, acronym: 'IELTS', category: 'Graduate Admissions', conductingBody: 'British Council, IDP, Cambridge',
    validity: '2 years', officialWebsite: 'https://www.ielts.org', difficulty: 3
  }));
});
vol5_exams.push(generateExam({ id: 'pte-academic', name: 'PTE Academic - Pearson Test of English', acronym: 'PTE', category: 'Graduate Admissions', conductingBody: 'Pearson', validity: '2 years', officialWebsite: 'https://www.pearsonpte.com' }));
vol5_exams.push(generateExam({ id: 'det-duolingo', name: 'Duolingo English Test', acronym: 'DET', category: 'Graduate Admissions', conductingBody: 'Duolingo', validity: '2 years', officialWebsite: 'https://englishtest.duolingo.com' }));
vol5_exams.push(generateExam({ id: 'gmat', name: 'Graduate Management Admission Test', acronym: 'GMAT', category: 'Graduate Admissions', conductingBody: 'GMAC', validity: '5 years', officialWebsite: 'https://www.mba.com' }));
vol5_exams.push(generateExam({ id: 'sat', name: 'SAT', acronym: 'SAT', category: 'Undergraduate Admissions', conductingBody: 'College Board (USA)', validity: '5 years', officialWebsite: 'https://satsuite.collegeboard.org/sat' }));
vol5_exams.push(generateExam({ id: 'act', name: 'American College Testing', acronym: 'ACT', category: 'Undergraduate Admissions', conductingBody: 'ACT, Inc.', validity: '5 years', officialWebsite: 'https://www.act.org' }));
vol5_exams.push(generateExam({ id: 'cambridge-c1', name: 'Cambridge C1 Advanced', acronym: 'CAE', category: 'Language Proficiency', conductingBody: 'Cambridge Assessment English', validity: 'Lifetime', officialWebsite: 'https://www.cambridgeenglish.org' }));
vol5_exams.push(generateExam({ id: 'cambridge-c2', name: 'Cambridge C2 Proficiency', acronym: 'CPE', category: 'Language Proficiency', conductingBody: 'Cambridge Assessment English', validity: 'Lifetime', officialWebsite: 'https://www.cambridgeenglish.org' }));
vol5_exams.push(generateExam({ id: 'celpip', name: 'Canadian English Language Proficiency Index', acronym: 'CELPIP', category: 'Language Proficiency', conductingBody: 'Paragon Testing Enterprises', validity: '2 years', officialWebsite: 'https://www.celpip.ca' }));
vol5_exams.push(generateExam({ id: 'toeic', name: 'Test of English for International Communication', acronym: 'TOEIC', category: 'Language Proficiency', conductingBody: 'ETS', validity: '2 years', officialWebsite: 'https://www.ets.org/toeic' }));
vol5_exams.push(generateExam({ id: 'oet', name: 'Occupational English Test', acronym: 'OET', category: 'Language Proficiency', conductingBody: 'Cambridge Boxhill Language Assessment', validity: '2 years', officialWebsite: 'https://www.occupationalenglishtest.org' }));

// 16-28: US ENGINEERING LICENSURE (FE, PE, SE, SPA)
const fe_disciplines = ['Mechanical', 'Civil', 'Electrical', 'Chemical', 'Industrial', 'Environmental', 'Other Disciplines'];
fe_disciplines.forEach(disc => {
  vol5_exams.push(generateExam({
    id: `fe-exam-${disc.toLowerCase().replace(' ', '-')}`, name: `FE Exam - ${disc}`, acronym: `FE ${disc}`, category: 'US Engineering Licensure', conductingBody: 'NCEES',
    validity: 'Lifetime (for PE eligibility)', officialWebsite: 'https://ncees.org/engineering/fe/', difficulty: 4,
    examPattern: { stages: 1, papers: ['1 exam'], totalMarks: 110, duration: '6 hours', types: ['MCQ'], sections: ['Morning', 'Afternoon'], negativeMarking: 'None' }
  }));
});
const pe_disciplines = ['Mechanical', 'Civil', 'Electrical', 'Chemical'];
pe_disciplines.forEach(disc => {
  vol5_exams.push(generateExam({
    id: `pe-exam-${disc.toLowerCase()}`, name: `PE Exam - ${disc}`, acronym: `PE ${disc}`, category: 'US Engineering Licensure', conductingBody: 'NCEES',
    validity: 'Requires PDH renewals', officialWebsite: 'https://ncees.org/engineering/pe/', difficulty: 5
  }));
});
vol5_exams.push(generateExam({ id: 'se-exam', name: 'Structural Engineer Exam', acronym: 'SE Exam', category: 'US Engineering Licensure', conductingBody: 'NCEES', validity: 'Requires PDH renewals', officialWebsite: 'https://ncees.org', difficulty: 5 }));
vol5_exams.push(generateExam({ id: 'spa-certification', name: 'Special Inspector Certification', acronym: 'SPA', category: 'US Engineering Licensure', conductingBody: 'ICC', validity: '3 years', officialWebsite: 'https://www.iccsafe.org', difficulty: 3 }));

// 29-33: CANADA ENGINEERING LICENSURE
vol5_exams.push(generateExam({ id: 'peng-canada', name: 'Professional Engineer Canada', acronym: 'P.Eng', category: 'Canada Engineering Licensure', conductingBody: 'Engineers Canada / Provincial Bodies', validity: 'Annual renewal', officialWebsite: 'https://engineerscanada.ca', difficulty: 4 }));
vol5_exams.push(generateExam({ id: 'peng-tech-exam', name: 'P.Eng Technical Exam', acronym: 'P.Eng Tech', category: 'Canada Engineering Licensure', conductingBody: 'EGBC/PEO/APEGA', validity: 'Permanent', officialWebsite: 'https://engineerscanada.ca' }));
vol5_exams.push(generateExam({ id: 'nppe-canada', name: 'National Professional Practice Exam', acronym: 'NPPE', category: 'Canada Engineering Licensure', conductingBody: 'APEGA / Others', validity: 'Permanent', officialWebsite: 'https://www.apega.ca' }));
vol5_exams.push(generateExam({ id: 'ielts-celpip-canada-pr', name: 'IELTS/CELPIP for Canada PR', acronym: 'Canada PR English', category: 'Canada Immigration', conductingBody: 'IRCC recognized', validity: '2 years', officialWebsite: 'https://www.canada.ca' }));
vol5_exams.push(generateExam({ id: 'eca-canada', name: 'Educational Credential Assessment Canada', acronym: 'ECA', category: 'Canada Immigration', conductingBody: 'WES / ICAS / IQAS', validity: '5 years', officialWebsite: 'https://www.wes.org/ca' }));

// 34-40: UK ENGINEERING LICENSURE
vol5_exams.push(generateExam({ id: 'ceng-uk', name: 'Chartered Engineer UK', acronym: 'CEng', category: 'UK Engineering Licensure', conductingBody: 'Engineering Council UK', validity: 'Annual membership', officialWebsite: 'https://www.engc.org.uk', difficulty: 5 }));
vol5_exams.push(generateExam({ id: 'imeche-ceng', name: 'IMechE Engineering Excellence', acronym: 'IMechE CEng', category: 'UK Engineering Licensure', conductingBody: 'Institution of Mechanical Engineers', validity: 'Annual membership', officialWebsite: 'https://www.imeche.org' }));
vol5_exams.push(generateExam({ id: 'ice-ceng', name: 'ICE Chartered Civil Engineer', acronym: 'ICE CEng', category: 'UK Engineering Licensure', conductingBody: 'Institution of Civil Engineers', validity: 'Annual membership', officialWebsite: 'https://www.ice.org.uk' }));
vol5_exams.push(generateExam({ id: 'iet-ceng', name: 'IET Chartered Engineer Electrical', acronym: 'IET CEng', category: 'UK Engineering Licensure', conductingBody: 'Institution of Engineering and Technology', validity: 'Annual membership', officialWebsite: 'https://www.theiet.org' }));
vol5_exams.push(generateExam({ id: 'istructe-ceng', name: 'IStructE Chartered Structural Engineer', acronym: 'IStructE CEng', category: 'UK Engineering Licensure', conductingBody: 'Institution of Structural Engineers', validity: 'Annual membership', officialWebsite: 'https://www.istructe.org' }));
vol5_exams.push(generateExam({ id: 'uk-skilled-worker-engineering', name: 'UK Skilled Worker Visa (Engineering)', acronym: 'UK Skilled Worker', category: 'UK Immigration', conductingBody: 'UKVI', validity: 'Visa validity', officialWebsite: 'https://www.gov.uk' }));
vol5_exams.push(generateExam({ id: 'ielts-ukvi', name: 'IELTS for UKVI', acronym: 'IELTS UKVI', category: 'UK Immigration', conductingBody: 'British Council/IDP', validity: '2 years', officialWebsite: 'https://www.ielts.org' }));

// 41-47: AUSTRALIA ENGINEERING LICENSURE
vol5_exams.push(generateExam({ id: 'cpeng-australia', name: 'Chartered Professional Engineer', acronym: 'CPEng', category: 'Australia Engineering Licensure', conductingBody: 'Engineers Australia', validity: 'Annual renewal', officialWebsite: 'https://www.engineersaustralia.org.au', difficulty: 5 }));
vol5_exams.push(generateExam({ id: 'rpeq', name: 'Registered Professional Engineer Queensland', acronym: 'RPEQ', category: 'Australia Engineering Licensure', conductingBody: 'BPEQ', validity: 'Annual renewal', officialWebsite: 'https://bpeq.qld.gov.au' }));
vol5_exams.push(generateExam({ id: 'ner-australia', name: 'National Engineers Register', acronym: 'NER', category: 'Australia Engineering Licensure', conductingBody: 'Engineers Australia', validity: 'Annual renewal', officialWebsite: 'https://www.engineersaustralia.org.au' }));
vol5_exams.push(generateExam({ id: 'cdr-skills-assessment', name: 'Skills Assessment (CDR)', acronym: 'CDR', category: 'Australia Engineering Licensure', conductingBody: 'Engineers Australia', validity: 'Permanent', officialWebsite: 'https://www.engineersaustralia.org.au' }));
vol5_exams.push(generateExam({ id: 'australia-pr-points', name: 'Australia PR Points Test (ANZSCO Engineering)', acronym: 'Aus PR Points', category: 'Australia Immigration', conductingBody: 'Department of Home Affairs', validity: 'Varies', officialWebsite: 'https://immi.homeaffairs.gov.au' }));
vol5_exams.push(generateExam({ id: 'ielts-pte-aus', name: 'IELTS/PTE for Australia Immigration', acronym: 'Aus English Test', category: 'Australia Immigration', conductingBody: 'Various', validity: '3 years', officialWebsite: 'https://immi.homeaffairs.gov.au' }));
vol5_exams.push(generateExam({ id: 'naati-ccl', name: 'NAATI Credentialed Community Language', acronym: 'NAATI CCL', category: 'Australia Immigration', conductingBody: 'NAATI', validity: '3 years', officialWebsite: 'https://www.naati.com.au' }));

// 48-53: GERMANY
vol5_exams.push(generateExam({ id: 'germany-blue-card', name: 'Germany Blue Card (Engineering)', acronym: 'EU Blue Card', category: 'Germany Immigration', conductingBody: 'German Federal Foreign Office', validity: 'Up to 4 years', officialWebsite: 'https://www.make-it-in-germany.com' }));
vol5_exams.push(generateExam({ id: 'goethe-b2', name: 'Goethe-Zertifikat B2', acronym: 'Goethe B2', category: 'Germany Language', conductingBody: 'Goethe-Institut', validity: 'Lifetime', officialWebsite: 'https://www.goethe.de' }));
vol5_exams.push(generateExam({ id: 'testdaf', name: 'TestDaF - Test German as Foreign Language', acronym: 'TestDaF', category: 'Germany Language', conductingBody: 'TestDaF-Institut', validity: 'Lifetime', officialWebsite: 'https://www.testdaf.de' }));
vol5_exams.push(generateExam({ id: 'studienkolleg', name: 'Studienkolleg Assessment Test', acronym: 'FSP', category: 'Germany Education', conductingBody: 'German Universities', validity: 'Lifetime', officialWebsite: 'https://www.studienkollegs.de' }));
vol5_exams.push(generateExam({ id: 'anabin-database', name: 'Anabin Database Check', acronym: 'Anabin', category: 'Germany Recognition', conductingBody: 'KMK', validity: 'Permanent', officialWebsite: 'https://anabin.kmk.org' }));
vol5_exams.push(generateExam({ id: 'ingenieurkammer', name: 'Ingenieurkammer Membership', acronym: 'IngAK', category: 'Germany Engineering Licensure', conductingBody: 'Chamber of Engineers Germany', validity: 'Annual membership', officialWebsite: 'https://bingk.de' }));

// 54-57: CANADA IMMIGRATION
vol5_exams.push(generateExam({ id: 'express-entry-fsw', name: 'Canada Express Entry - FSW', acronym: 'FSW', category: 'Canada Immigration', conductingBody: 'IRCC', validity: 'Permanent Residence', officialWebsite: 'https://www.canada.ca' }));
vol5_exams.push(generateExam({ id: 'ielts-canada-imm', name: 'IELTS for Canada Immigration', acronym: 'IELTS Canada', category: 'Canada Immigration', conductingBody: 'IRCC accepted', validity: '2 years', officialWebsite: 'https://www.ielts.org' }));
vol5_exams.push(generateExam({ id: 'tcf-tef-canada', name: 'French TCF/TEF for Canada', acronym: 'TCF/TEF', category: 'Canada Immigration', conductingBody: 'IRCC accepted', validity: '2 years', officialWebsite: 'https://www.canada.ca' }));
vol5_exams.push(generateExam({ id: 'pnp-engineering', name: 'Provincial Nominee Programs (Engineering streams)', acronym: 'PNP', category: 'Canada Immigration', conductingBody: 'Provincial Governments', validity: 'Varies', officialWebsite: 'https://www.canada.ca' }));

// 58-62: GULF / MIDDLE EAST
vol5_exams.push(generateExam({ id: 'prometric-gulf', name: 'Prometric Exam - Gulf Engineering Licensure', acronym: 'Prometric', category: 'Gulf Engineering Licensure', conductingBody: 'Prometric / Local Ministries', validity: 'Varies', officialWebsite: 'https://www.prometric.com' }));
vol5_exams.push(generateExam({ id: 'moe-saudi-arabia', name: 'MOE Saudi Arabia Recognition', acronym: 'MOE KSA', category: 'Gulf Engineering Licensure', conductingBody: 'Ministry of Education KSA', validity: 'Permanent', officialWebsite: 'https://moe.gov.sa' }));
vol5_exams.push(generateExam({ id: 'dha-technical', name: 'DHA Dubai Technical Exam', acronym: 'DHA', category: 'Gulf Engineering Licensure', conductingBody: 'Dubai Health Authority', validity: 'Annual renewal', officialWebsite: 'https://www.dha.gov.ae' }));
vol5_exams.push(generateExam({ id: 'sc-36-saudi-aramco', name: 'Saudi Aramco Technical', acronym: 'SC-36', category: 'Gulf Engineering Licensure', conductingBody: 'Saudi Aramco', validity: 'Permanent', officialWebsite: 'https://www.aramco.com' }));
vol5_exams.push(generateExam({ id: 'adnoc-engineering', name: 'ADNOC Engineering Assessment', acronym: 'ADNOC', category: 'Gulf Engineering Licensure', conductingBody: 'ADNOC', validity: 'Permanent', officialWebsite: 'https://www.adnoc.ae' }));

// 63-82: PROFESSIONAL CERTIFICATIONS
const certs = [
  { id: 'pmp', name: 'Project Management Professional', acronym: 'PMP', body: 'PMI' },
  { id: 'capm', name: 'Certified Associate in Project Management', acronym: 'CAPM', body: 'PMI' },
  { id: 'six-sigma-green', name: 'Six Sigma Green Belt', acronym: 'SSGB', body: 'ASQ/IASSC' },
  { id: 'six-sigma-black', name: 'Six Sigma Black Belt', acronym: 'SSBB', body: 'ASQ' },
  { id: 'leed-ap', name: 'LEED AP', acronym: 'LEED AP', body: 'USGBC' },
  { id: 'leed-green-associate', name: 'LEED Green Associate', acronym: 'LEED GA', body: 'USGBC' },
  { id: 'ashrae-beap', name: 'ASHRAE BEAP', acronym: 'BEAP', body: 'ASHRAE' },
  { id: 'nace-cip', name: 'NACE CIP - Corrosion Inspector', acronym: 'NACE CIP', body: 'NACE' },
  { id: 'nace-cp', name: 'NACE CP - Cathodic Protection', acronym: 'NACE CP', body: 'NACE' },
  { id: 'aws-cwi', name: 'AWS CWI - Certified Welding Inspector', acronym: 'CWI', body: 'AWS' },
  { id: 'aws-cwe', name: 'AWS CWE - Certified Welding Educator', acronym: 'CWE', body: 'AWS' },
  { id: 'asme-pressure-vessel', name: 'ASME Pressure Vessel Certification', acronym: 'ASME BPVC', body: 'ASME' },
  { id: 'ieee-senior', name: 'IEEE Senior Member/Fellow', acronym: 'IEEE Senior', body: 'IEEE' },
  { id: 'nebosh-igc', name: 'NEBOSH IGC', acronym: 'NEBOSH IGC', body: 'NEBOSH' },
  { id: 'iosh-managing-safely', name: 'IOSH Managing Safely', acronym: 'IOSH', body: 'IOSH' },
  { id: 'osha-30', name: 'OSHA 30-hour Certification', acronym: 'OSHA 30', body: 'OSHA' },
  { id: 'iso-9001-lead', name: 'ISO 9001 Lead Auditor', acronym: 'ISO 9001 LA', body: 'CQI/IRCA' },
  { id: 'iso-14001-lead', name: 'ISO 14001 Lead Auditor', acronym: 'ISO 14001 LA', body: 'CQI/IRCA' },
  { id: 'hse-nebosh-uk', name: 'HSE NEBOSH Certificate UK', acronym: 'HSE NEBOSH', body: 'NEBOSH' },
  { id: 'cswip', name: 'CSWIP Welding Inspection', acronym: 'CSWIP', body: 'TWI' }
];

certs.forEach(cert => {
  vol5_exams.push(generateExam({
    id: cert.id, name: cert.name, acronym: cert.acronym, category: 'Professional Certifications', conductingBody: cert.body,
    validity: '3 years (Requires PDUs)', difficulty: 4
  }));
});

// 83-88: ASIA PACIFIC
vol5_exams.push(generateExam({ id: 'jlpt', name: 'Japanese Language Proficiency Test', acronym: 'JLPT', category: 'Asia Pacific', conductingBody: 'Japan Educational Exchanges and Services', validity: 'Lifetime', officialWebsite: 'https://www.jlpt.jp', difficulty: 3 }));
vol5_exams.push(generateExam({ id: 'eju', name: 'Examination for Japanese University', acronym: 'EJU', category: 'Asia Pacific', conductingBody: 'JASSO', validity: '2 years', officialWebsite: 'https://www.jasso.go.jp' }));
vol5_exams.push(generateExam({ id: 'topik', name: 'Test of Proficiency in Korean', acronym: 'TOPIK', category: 'Asia Pacific', conductingBody: 'NIIED', validity: '2 years', officialWebsite: 'https://www.topik.go.kr' }));
vol5_exams.push(generateExam({ id: 'hsk', name: 'Hanyu Shuiping Kaoshi', acronym: 'HSK', category: 'Asia Pacific', conductingBody: 'Hanban', validity: '2 years', officialWebsite: 'http://www.chinesetest.cn' }));
vol5_exams.push(generateExam({ id: 'singapore-ep', name: 'Singapore Employment Pass Engineering', acronym: 'Singapore EP', category: 'Asia Pacific', conductingBody: 'MOM Singapore', validity: '1-3 years', officialWebsite: 'https://www.mom.gov.sg' }));
vol5_exams.push(generateExam({ id: 'ielts-pte-nz', name: 'IELTS/PTE for New Zealand', acronym: 'NZ English Test', category: 'Asia Pacific', conductingBody: 'Immigration New Zealand', validity: '2 years', officialWebsite: 'https://www.immigration.govt.nz' }));

module.exports = vol5_exams;
