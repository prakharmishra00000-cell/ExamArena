const fs = require('fs');

const defenceEntries = [
  "UPSC NDA - National Defence Academy (Army/Navy/Air Force) - UPSC",
  "UPSC CDS - Combined Defence Services (OTA, IMA, INA, AFA) - UPSC",
  "Indian Army TGC - Technical Graduate Course - Army HQ",
  "Indian Navy UES - University Entry Scheme - Naval HQ",
  "Indian Air Force AFCAT - AF Common Admission Test - IAF",
  "Indian Coast Guard Section Officer GD Technical",
  "Indian Army JAG - Judge Advocate General",
  "Indian Navy SSC Technical Entry",
  "IAF Flying Branch PC/SSCO",
  "SSB Interview Process (all defence entries)",
  "Indian Army OTA Short Service Commission",
  "Indian Army NCC Special Entry",
  "Indian Navy MR - Matric Recruit (AA, SSR)",
  "Indian Navy Agniveer MR",
  "IAF Group X Technical - Airman",
  "IAF Group Y - Airman",
  "IAF Agniveer Vayu",
  "Army Agniveer - Agnipath Scheme",
  "Navy Agniveer - Agnipath Scheme",
  "Indian Coast Guard Navik GD/DB",
  "BSF Constable Technical",
  "CRPF Constable Technical",
  "CISF Constable Technical",
  "ITBP Constable General Duty",
  "NSG Special Action Group (through UPSC)",
  "MARCOS Marine Commandos selection",
  "Para Special Forces selection",
  "Territorial Army Officers Entry",
  "Indian Army Havildar Education Corps",
  "MNS Military Nursing Service"
];

const researchEntries = [
  "CSIR JRF - Junior Research Fellowship (Engineering Sciences) - CSIR-UGC NET",
  "UGC JRF - Junior Research Fellowship through NET - UGC",
  "DST INSPIRE Fellowship PhD - Department of Science Technology",
  "DST INSPIRE Faculty Award",
  "Ramanujam Fellowship - DST",
  "Swarnajayanti Fellowship - DST",
  "JC Bose National Fellowship - SERB",
  "SERB SRG - Start-up Research Grant",
  "SERB CRG - Core Research Grant",
  "SERB EEQ - Extra Mural Research Grant",
  "SERB MATRICS - Mathematical Research Impact",
  "DRDO JRF/SRF - Junior/Senior Research Fellow",
  "DAE Research Fellowships BARC/TIFR/NISER",
  "PMRF - Prime Minister Research Fellowship (IIT/IISc)",
  "NTRF National Technology Research Fellowship",
  "Nehru Science Postdoctoral Fellowship",
  "Raman Postdoctoral Fellowship (IISc)",
  "IIT Research Scholarships (project-based)",
  "NIT Research Assistantships",
  "IISER Research Fellowships",
  "KVPY/INSPIRE SHE Scholarship (undergraduate science)",
  "IISc Summer Research Fellowship (SRFP)",
  "BARC Summer Internship Programme",
  "ISRO YUVIKA - Youth for Space Science",
  "DRDO Summer Internship",
  "CERN Summer Student Programme"
];

const internationalEntries = [
  "Fulbright-Nehru Fellowship (USA)",
  "DAAD Scholarship Germany (Research/Masters)",
  "Erasmus Mundus EU Scholarship",
  "Commonwealth Scholarship UK",
  "Chevening Scholarship UK - British Council",
  "Australia Awards Scholarship AAS",
  "Japanese Govt MEXT Scholarship",
  "Korean Govt GKS - Global Korea Scholarship",
  "Chinese Govt CSC Scholarship",
  "Singapore ASEAN Scholarship",
  "NUS-NTU Research Fellowship Singapore",
  "ETH Zurich Excellence Scholarship",
  "MIT Fellowships and Assistantships",
  "Stanford Fellowship",
  "EPFL Fellowship Switzerland",
  "JASSO Scholarship Japan",
  "Taiwan MOE Scholarship ICDF",
  "Swedish Institute Scholarship",
  "Holland Scholarship Netherlands",
  "Vanier Canada Graduate Scholarships",
  "Trudeau Foundation Scholarship",
  "New Zealand Excellence Awards",
  "IDB Merit Scholarship (Islamic Development Bank)",
  "Aga Khan Foundation Scholarship"
];

const postdocEntries = [
  "SERB National Postdoctoral Fellowship NPDF",
  "IISc SRF/Project Scientist",
  "IIM Postdoctoral Fellowship",
  "DBT Ramalingaswami Re-entry Fellowship",
  "Wellcome Trust-DBT India Alliance Fellowship",
  "Indo-US Joint Centers for Science Technology"
];

function generateId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateDefense(name, i) {
  return {
    id: generateId(name),
    name: name,
    acronym: name.split(' ')[0],
    volume: 6,
    volumeName: 'Fellowships, Research & Defence',
    category: 'Defence',
    conductingBody: 'Government of India / Defence Forces',
    eligibility: {
      degree: '10+2 / Graduation / Post Graduation depending on entry',
      year: 'Final year appearing or Passed',
      age: 'Typically 16.5 to 25 years',
      percentage: '60% in PCM for technical entries',
      nationality: 'Indian National'
    },
    syllabus: {
      'General Knowledge': ['Current Affairs', 'History', 'Geography', 'Science'],
      'Aptitude & Technical': ['Mathematics', 'Reasoning', 'Core Engineering (if technical)']
    },
    examPattern: {
      stages: 3,
      papers: ['Written Exam', 'SSB Interview'],
      totalMarks: 500,
      duration: '4 hours total',
      types: ['MCQ', 'SSB Tasks'],
      sections: ['Written Test', '5-day SSB process'],
      negativeMarking: '0.33 for wrong answers'
    },
    subjects: ['Maths', 'General Science', 'English', 'Aptitude'],
    validity: 'For the upcoming course batch',
    postQualifyingBenefits: [
      'Commissioned Rank / Enrolled Rank',
      'Free Medical & Rations',
      'CSD Canteen Facilities'
    ],
    salary: {
      range: '₹56,100 - ₹1,77,500/month',
      payBand: 'Level 10 (for Officers)',
      ctc: '₹10-18 LPA',
      perks: 'MSP ₹15,500, HRA, Uniform Allowance, High Altitude Allowance'
    },
    careerProgression: [
      'Lieutenant / Flying Officer / Sub-Lieutenant',
      'Captain',
      'Major',
      'Lt. Colonel / Commander'
    ],
    officialWebsite: 'https://joinindianarmy.nic.in',
    preparationResources: [
      'NCERT Books',
      'SSB Crack Materials',
      'R.S. Aggarwal Quant'
    ],
    difficulty: 4,
    selectionProcess: [
      'Step 1: Written Exam',
      'Step 2: 5-day SSB Interview (Psychological Tests, GTO, Personal Interview)',
      'Step 3: Stringent Medical Examination (Vision, Height, Weight criteria)',
      'Step 4: Training at NDA/IMA/AFA/OTA/INA'
    ],
    tags: ['defence', 'military', 'government']
  };
}

function generateResearch(name, i) {
  return {
    id: generateId(name),
    name: name,
    acronym: name.split(' ')[0],
    volume: 6,
    volumeName: 'Fellowships, Research & Defence',
    category: 'Research Fellowships',
    conductingBody: 'DST / SERB / CSIR / DRDO / UGC',
    eligibility: {
      degree: 'M.Sc / M.Tech / PhD (for postdoc)',
      year: 'Completed',
      age: 'Max 28 for JRF, 32-35 for Postdoc',
      percentage: 'At least 60%',
      nationality: 'Indian National'
    },
    syllabus: {
      'Subject Core': ['Advanced Topics in Specific Domain'],
      'Research Methodology': ['Statistics', 'Ethics', 'Experiment Design']
    },
    examPattern: {
      stages: 2,
      papers: ['Proposal Submission / Written Test', 'Interview'],
      totalMarks: 200,
      duration: '3 hours / Proposal Review',
      types: ['MCQ / Descriptive', 'Interview'],
      sections: ['Technical Knowledge', 'Research Aptitude'],
      negativeMarking: '0.25'
    },
    subjects: ['Core Sciences', 'Engineering', 'Mathematics'],
    validity: '2-5 years',
    postQualifyingBenefits: [
      'Monthly Stipend',
      'Contingency Grant',
      'HRA'
    ],
    salary: {
      range: '₹37,000 - ₹80,000/month',
      payBand: 'Stipend',
      ctc: '₹5 - 12 LPA',
      perks: 'HRA, Contingency Grant of ₹20k - ₹2 Lakhs per year'
    },
    careerProgression: [
      'JRF',
      'SRF',
      'Postdoctoral Fellow',
      'Scientist / Assistant Professor'
    ],
    officialWebsite: 'https://dst.gov.in',
    preparationResources: [
      'CSIR NET Guides',
      'Research Publications',
      'University Coursework'
    ],
    difficulty: 4,
    selectionProcess: [
      'Step 1: National Level Exam / Proposal Submission',
      'Step 2: Expert Panel Review',
      'Step 3: Personal Interview',
      'Step 4: Host Institute Approval'
    ],
    tags: ['research', 'phd', 'science', 'technology']
  };
}

function generateInternational(name, i) {
  return {
    id: generateId(name),
    name: name,
    acronym: name.split(' ')[0],
    volume: 6,
    volumeName: 'Fellowships, Research & Defence',
    category: 'International Scholarships',
    conductingBody: 'International Government / University / Foundation',
    eligibility: {
      degree: 'Bachelors / Masters with excellent academic record',
      year: 'Recent graduate or working professional',
      age: 'Varies, usually under 35',
      percentage: 'High GPA / First Class',
      nationality: 'Indian Nationals / Developing Country Nationals'
    },
    syllabus: {
      'Application': ['Statement of Purpose', 'Letters of Recommendation', 'Research Proposal']
    },
    examPattern: {
      stages: 2,
      papers: ['Profile Evaluation', 'Interview'],
      totalMarks: 100,
      duration: 'Varies',
      types: ['Essay/SOP', 'Panel Interview'],
      sections: ['Leadership', 'Academic Excellence'],
      negativeMarking: 'N/A'
    },
    subjects: ['All disciplines generally supported'],
    validity: 'Duration of the degree program',
    postQualifyingBenefits: [
      'Full Tuition Waiver',
      'Living Expenses Stipend',
      'Airfare and Health Insurance'
    ],
    salary: {
      range: 'Fully Funded',
      payBand: 'Scholarship',
      ctc: 'Equivalent to $30k - $80k per year',
      perks: 'Travel Allowance, Setup Allowance, Family Support (sometimes)'
    },
    careerProgression: [
      'Masters / PhD Graduate from Global Top University',
      'Global Career Opportunities',
      'Alumni Network Access'
    ],
    officialWebsite: 'https://scholarship-portal.example.com',
    preparationResources: [
      'TOEFL / IELTS / GRE Materials',
      'SOP Writing Guides',
      'Alumni Blogs'
    ],
    difficulty: 5,
    selectionProcess: [
      'Step 1: Language Proficiency Test (IELTS/TOEFL)',
      'Step 2: Submit Application with Essays and LORs',
      'Step 3: National / Regional Selection Committee Interview',
      'Step 4: Final Selection by Host Foundation'
    ],
    tags: ['international', 'scholarship', 'masters', 'phd', 'fully-funded']
  };
}

const allExams = [
  ...defenceEntries.map((name, i) => generateDefense(name, i)),
  ...researchEntries.map((name, i) => generateResearch(name, i)),
  ...internationalEntries.map((name, i) => generateInternational(name, i)),
  ...postdocEntries.map((name, i) => generateResearch(name, i))
];

// Deduplicate ids in case of any collisions
const uniqueExams = [];
const idSet = new Set();
for (let exam of allExams) {
  let finalId = exam.id;
  let counter = 1;
  while (idSet.has(finalId)) {
    finalId = `${exam.id}-${counter}`;
    counter++;
  }
  exam.id = finalId;
  idSet.add(finalId);
  uniqueExams.push(exam);
}

const fileContent = `const vol6_exams = ${JSON.stringify(uniqueExams, null, 2)};\n\nmodule.exports = vol6_exams;\n`;

fs.writeFileSync('C:\\Users\\yasha\\.gemini\\antigravity\\scratch\\ExamArena\\data\\vol6_fellowship.js', fileContent);
console.log('Successfully generated 86 items and saved to vol6_fellowship.js');
