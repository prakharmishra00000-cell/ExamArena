const fs = require('fs');
const path = require('path');

const targetPath = 'C:\\Users\\yasha\\.gemini\\antigravity\\scratch\\ExamArena\\data\\vol1_technical.js';

const missingExams = [
  { id: 'iocl-engineers', name: 'IOCL Engineers', acronym: 'IOCL ET', body: 'Indian Oil Corporation Limited', type: 'Maharatna PSU' },
  { id: 'hpcl-engineers', name: 'HPCL Engineers/Officers', acronym: 'HPCL ET', body: 'Hindustan Petroleum Corporation Limited', type: 'Maharatna PSU' },
  { id: 'bpcl-engineers', name: 'BPCL Engineers', acronym: 'BPCL ET', body: 'Bharat Petroleum Corporation Limited', type: 'Maharatna PSU' },
  { id: 'sail-mt', name: 'SAIL Management Trainee', acronym: 'SAIL MT', body: 'Steel Authority of India Limited', type: 'Maharatna PSU' },
  { id: 'hal-mt', name: 'HAL Management Trainee', acronym: 'HAL MT', body: 'Hindustan Aeronautics Limited', type: 'Navratna PSU' },
  { id: 'bel-pe', name: 'BEL Project Engineer', acronym: 'BEL PE', body: 'Bharat Electronics Limited', type: 'Navratna PSU' },
  { id: 'npcil-sa', name: 'NPCIL Scientific Assistant/Engineer', acronym: 'NPCIL ET', body: 'Nuclear Power Corporation of India Limited', type: 'PSU' },
  { id: 'gail-et', name: 'GAIL Executive Trainee', acronym: 'GAIL ET', body: 'Gas Authority of India Limited', type: 'Maharatna PSU' },
  { id: 'pgcil-et', name: 'POWERGRID Executive Trainee', acronym: 'PGCIL ET', body: 'Power Grid Corporation of India Limited', type: 'Maharatna PSU' },
  { id: 'aai-je', name: 'AAI Junior Executive', acronym: 'AAI JE', body: 'Airports Authority of India', type: 'PSU' },
  { id: 'dmrc-je', name: 'DMRC Junior Engineer', acronym: 'DMRC JE', body: 'Delhi Metro Rail Corporation', type: 'Metro PSU' },
  { id: 'rites-mt', name: 'RITES Management Trainee', acronym: 'RITES MT', body: 'RITES Limited', type: 'Navratna PSU' },
  { id: 'ircon-mt', name: 'IRCON Management Trainee', acronym: 'IRCON MT', body: 'IRCON International Limited', type: 'PSU' },
  { id: 'nbcc-je', name: 'NBCC Junior Engineer', acronym: 'NBCC JE', body: 'National Buildings Construction Corporation', type: 'Navratna PSU' },
  { id: 'wapcos-je', name: 'WAPCOS Junior Engineer', acronym: 'WAPCOS JE', body: 'WAPCOS Limited', type: 'PSU' },
  { id: 'nhpc-je', name: 'NHPC Junior Engineer', acronym: 'NHPC JE', body: 'National Hydroelectric Power Corporation', type: 'Miniratna PSU' },
  { id: 'neepco-jm', name: 'NEEPCO Junior Manager', acronym: 'NEEPCO JM', body: 'North Eastern Electric Power Corporation Limited', type: 'PSU' },
  { id: 'mecl-exploration', name: 'MECL Mineral Exploration', acronym: 'MECL', body: 'Mineral Exploration Corporation Limited', type: 'PSU' },
  { id: 'nmdc-jm', name: 'NMDC Junior Manager', acronym: 'NMDC JM', body: 'National Mineral Development Corporation', type: 'Navratna PSU' },
  { id: 'moil-mt', name: 'MOIL Management Trainee', acronym: 'MOIL MT', body: 'Manganese Ore India Limited', type: 'Miniratna PSU' },
  { id: 'rinl-jm', name: 'RINL Junior Manager', acronym: 'RINL JM', body: 'Rashtriya Ispat Nigam Limited (Vizag Steel)', type: 'Navratna PSU' },
  { id: 'nalco-jm', name: 'NALCO Junior Manager', acronym: 'NALCO JM', body: 'National Aluminium Company Limited', type: 'Navratna PSU' },
  { id: 'coal-india-mt', name: 'Coal India Management Trainee', acronym: 'CIL MT', body: 'Coal India Limited', type: 'Maharatna PSU' },
  { id: 'nlc-je', name: 'NLC India Junior Engineer', acronym: 'NLC JE', body: 'NLC India Limited', type: 'Navratna PSU' },
  { id: 'thdc-je', name: 'THDC Junior Engineer', acronym: 'THDC JE', body: 'Tehri Hydro Development Corporation', type: 'Miniratna PSU' },
  { id: 'sjvn-jfe', name: 'SJVN Junior Field Engineer', acronym: 'SJVN JFE', body: 'Satluj Jal Vidyut Nigam', type: 'Miniratna PSU' },
  { id: 'seci-jm', name: 'SECI Junior Manager', acronym: 'SECI JM', body: 'Solar Energy Corporation of India', type: 'PSU' },
  { id: 'ireda-am', name: 'IREDA Assistant Manager', acronym: 'IREDA AM', body: 'Indian Renewable Energy Development Agency', type: 'Miniratna PSU' },
  { id: 'rec-mt', name: 'REC Management Trainee', acronym: 'REC MT', body: 'Rural Electrification Corporation Limited', type: 'Maharatna PSU' },
  { id: 'pfc-mt', name: 'PFC Management Trainee', acronym: 'PFC MT', body: 'Power Finance Corporation', type: 'Maharatna PSU' },
  { id: 'tcil-je', name: 'TCIL Junior Engineer', acronym: 'TCIL JE', body: 'Telecommunications Consultants India Limited', type: 'Miniratna PSU' },
  { id: 'bsnl-jto', name: 'BSNL Junior Telecom Officer', acronym: 'BSNL JTO', body: 'Bharat Sanchar Nigam Limited', type: 'PSU' },
  { id: 'ecil-get', name: 'ECIL Graduate Engineer Trainee', acronym: 'ECIL GET', body: 'Electronics Corporation of India Limited', type: 'PSU' },
  { id: 'beml-mt', name: 'BEML Management Trainee', acronym: 'BEML MT', body: 'Bharat Earth Movers Limited', type: 'Miniratna PSU' },
  { id: 'hmt-mt', name: 'HMT Management Trainee', acronym: 'HMT MT', body: 'HMT Limited', type: 'PSU' },
  { id: 'grse-gt', name: 'GRSE Graduate Trainee', acronym: 'GRSE GT', body: 'Garden Reach Shipbuilders & Engineers', type: 'Miniratna PSU' },
  { id: 'mdl-gt', name: 'MDL Graduate Trainee', acronym: 'MDL GT', body: 'Mazagon Dock Shipbuilders Limited', type: 'Miniratna PSU' },
  { id: 'hsl-gt', name: 'HSL Graduate Trainee', acronym: 'HSL GT', body: 'Hindustan Shipyard Limited', type: 'Miniratna PSU' },
  { id: 'csl-gt', name: 'CSL Graduate Trainee', acronym: 'CSL GT', body: 'Cochin Shipyard Limited', type: 'Miniratna PSU' },
  { id: 'midhani-mt', name: 'MIDHANI Management Trainee', acronym: 'MIDHANI MT', body: 'Mishra Dhatu Nigam Limited', type: 'Miniratna PSU' },
  { id: 'ofb-jwm', name: 'OFB Junior Works Manager', acronym: 'OFB JWM', body: 'Ordnance Factory Board', type: 'Central Govt' },
  { id: 'bdl-mt', name: 'BDL Management Trainee', acronym: 'BDL MT', body: 'Bharat Dynamics Limited', type: 'Miniratna PSU' },
  { id: 'drdo-hemrl-scientist', name: 'DRDO HEMRL Scientist', acronym: 'HEMRL', body: 'DRDO - High Energy Materials Research Laboratory', type: 'Research Govt' },
  { id: 'isro-vssc', name: 'ISRO VSSC Scientist/Engineer', acronym: 'VSSC', body: 'Vikram Sarabhai Space Centre (ISRO)', type: 'Space Govt' },
  { id: 'isro-lpsc', name: 'ISRO LPSC Scientist/Engineer', acronym: 'LPSC', body: 'Liquid Propulsion Systems Centre (ISRO)', type: 'Space Govt' },
  { id: 'isro-sdsc', name: 'ISRO SDSC SHAR Scientist', acronym: 'SDSC', body: 'Satish Dhawan Space Centre (ISRO)', type: 'Space Govt' },
  { id: 'isro-ursc', name: 'ISRO URSC Scientist', acronym: 'URSC', body: 'U R Rao Satellite Centre (ISRO)', type: 'Space Govt' },
  { id: 'nal-scientist', name: 'NAL Scientist', acronym: 'NAL', body: 'National Aerospace Laboratories (CSIR)', type: 'Research Govt' },
  { id: 'ada-to', name: 'ADA Technical Officer', acronym: 'ADA', body: 'Aeronautical Development Agency', type: 'Research Govt' },
  { id: 'deal-scientist', name: 'DEAL Scientist', acronym: 'DEAL', body: 'Defence Electronics Application Laboratory (DRDO)', type: 'Research Govt' },
  { id: 'dmrl-scientist', name: 'DMRL Scientist', acronym: 'DMRL', body: 'Defence Metallurgical Research Laboratory (DRDO)', type: 'Research Govt' },
  { id: 'cvrde-engineer', name: 'CVRDE Engineer', acronym: 'CVRDE', body: 'Combat Vehicles Research and Development Establishment', type: 'Research Govt' },
  { id: 'arde-engineer', name: 'ARDE Engineer', acronym: 'ARDE', body: 'Armament Research & Development Establishment', type: 'Research Govt' },
  { id: 'cpwd-je', name: 'CPWD Junior Engineer', acronym: 'CPWD JE', body: 'Central Public Works Department', type: 'Central Govt' },
  { id: 'mes-jwm', name: 'MES Junior Works Manager', acronym: 'MES JWM', body: 'Military Engineering Services', type: 'Defence Govt' },
  { id: 'bro-mts', name: 'BRO Multi-Tasking Staff Technical', acronym: 'BRO MTS', body: 'Border Roads Organisation', type: 'Defence Govt' },
  { id: 'rrb-sse', name: 'RRB Senior Section Engineer', acronym: 'RRB SSE', body: 'Railway Recruitment Board', type: 'Railways Govt' },
  { id: 'rrb-alp', name: 'RRB Assistant Loco Pilot', acronym: 'RRB ALP', body: 'Railway Recruitment Board', type: 'Railways Govt' },
  { id: 'cwc-jta', name: 'CWC Junior Technical Assistant', acronym: 'CWC JTA', body: 'Central Warehousing Corporation', type: 'PSU' },
  { id: 'fci-je', name: 'FCI Junior Engineer', acronym: 'FCI JE', body: 'Food Corporation of India', type: 'PSU' },
  { id: 'csir-scientist', name: 'CSIR Labs Scientist', acronym: 'CSIR', body: 'Council of Scientific and Industrial Research', type: 'Research Govt' },
  { id: 'nio-to', name: 'NIO Technical Officer', acronym: 'NIO TO', body: 'National Institute of Oceanography', type: 'Research Govt' },
  { id: 'nhai-smt', name: 'NHAI Senior Manager Technical', acronym: 'NHAI SMT', body: 'National Highways Authority of India', type: 'Central Govt' },
  { id: 'nhidcl-je', name: 'NHIDCL Junior Engineer', acronym: 'NHIDCL JE', body: 'National Highways & Infrastructure Development Corporation', type: 'Central Govt' },
  { id: 'port-trust-je', name: 'Port Trust JE/AE', acronym: 'Port JE', body: 'Major Port Trusts of India', type: 'PSU' },
  { id: 'kiocl-mt', name: 'KIOCL Management Trainee', acronym: 'KIOCL MT', body: 'KIOCL Limited', type: 'Miniratna PSU' },
  { id: 'andrew-yule-mt', name: 'Andrew Yule Management Trainee', acronym: 'AY MT', body: 'Andrew Yule & Co. Ltd.', type: 'PSU' },
  { id: 'hcl-mining', name: 'Hindustan Copper Mining Engineer', acronym: 'HCL MT', body: 'Hindustan Copper Limited', type: 'Miniratna PSU' },
  { id: 'nfl-mt', name: 'National Fertilizers Management Trainee', acronym: 'NFL MT', body: 'National Fertilizers Limited', type: 'Miniratna PSU' },
  { id: 'fact-engineers', name: 'FACT Engineers', acronym: 'FACT', body: 'Fertilisers And Chemicals Travancore Limited', type: 'PSU' },
  { id: 'hll-engineers', name: 'HLL Lifecare Engineers', acronym: 'HLL ET', body: 'HLL Lifecare Limited', type: 'Miniratna PSU' },
  { id: 'bis-to', name: 'BIS Technical Officer', acronym: 'BIS TO', body: 'Bureau of Indian Standards', type: 'Central Govt' },
  { id: 'cpcb-to', name: 'CPCB Technical Officer', acronym: 'CPCB TO', body: 'Central Pollution Control Board', type: 'Central Govt' },
  { id: 'gsi-geoscientist', name: 'GSI Geoscientist', acronym: 'GSI', body: 'Geological Survey of India', type: 'Central Govt' },
  { id: 'posoco-engineer', name: 'POSOCO Engineer', acronym: 'POSOCO', body: 'National Load Despatch Centre', type: 'PSU' },
  { id: 'tsecl-je', name: 'TSECL Junior Engineer', acronym: 'TSECL JE', body: 'Tripura State Electricity Corporation Limited', type: 'State Board' },
  { id: 'apdcl-je', name: 'APDCL Junior Engineer', acronym: 'APDCL JE', body: 'Assam Power Distribution Company Limited', type: 'State Board' },
  { id: 'apgenco-je', name: 'APGENCO Junior Engineer', acronym: 'APGENCO JE', body: 'Andhra Pradesh Power Generation Corporation', type: 'State Board' },
  { id: 'kpcl-je', name: 'KPCL Junior Engineer', acronym: 'KPCL JE', body: 'Karnataka Power Corporation Limited', type: 'State Board' },
  { id: 'msedcl-je', name: 'MSEDCL Junior Engineer', acronym: 'MSEDCL JE', body: 'Maharashtra State Electricity Distribution Company', type: 'State Board' },
  { id: 'eil-engineers', name: 'EIL Engineers', acronym: 'EIL', body: 'Engineers India Limited', type: 'Navratna PSU' },
  { id: 'drdo-srf', name: 'DRDO Senior Research Fellow', acronym: 'DRDO SRF', body: 'Defence Research and Development Organisation', type: 'Research Govt' },
  { id: 'isro-nrsc', name: 'ISRO NRSC Scientist', acronym: 'NRSC', body: 'National Remote Sensing Centre (ISRO)', type: 'Space Govt' },
  { id: 'sac-scientist', name: 'SAC Scientist', acronym: 'SAC', body: 'Space Applications Centre (ISRO)', type: 'Space Govt' },
  { id: 'cecri-csir', name: 'CECRI CSIR Scientist', acronym: 'CECRI', body: 'Central Electrochemical Research Institute (CSIR)', type: 'Research Govt' },
  { id: 'cmeri-csir', name: 'CMERI CSIR Scientist', acronym: 'CMERI', body: 'Central Mechanical Engineering Research Institute (CSIR)', type: 'Research Govt' },
  { id: 'nml-csir', name: 'NML CSIR Scientist', acronym: 'NML', body: 'National Metallurgical Laboratory (CSIR)', type: 'Research Govt' },
  { id: 'serc-csir', name: 'SERC CSIR Scientist', acronym: 'SERC', body: 'Structural Engineering Research Centre (CSIR)', type: 'Research Govt' },
  { id: 'crri-csir', name: 'CRRI CSIR Scientist', acronym: 'CRRI', body: 'Central Road Research Institute (CSIR)', type: 'Research Govt' },
  { id: 'cbri-csir', name: 'CBRI CSIR Scientist', acronym: 'CBRI', body: 'Central Building Research Institute (CSIR)', type: 'Research Govt' },
  { id: 'ampri-csir', name: 'AMPRI CSIR Scientist', acronym: 'AMPRI', body: 'Advanced Materials and Processes Research Institute (CSIR)', type: 'Research Govt' },
  { id: 'neeri-csir', name: 'NEERI CSIR Scientist', acronym: 'NEERI', body: 'National Environmental Engineering Research Institute (CSIR)', type: 'Research Govt' },
  { id: 'niist-csir', name: 'NIIST CSIR Scientist', acronym: 'NIIST', body: 'National Institute for Interdisciplinary Science and Technology (CSIR)', type: 'Research Govt' },
  { id: 'ion-technical', name: 'ION Technical (IIT KGP PSU tests)', acronym: 'ION', body: 'IIT Kharagpur / TCS iON', type: 'Assessment' }
];

function generateExamObject(exam) {
  let cat = exam.type.includes('PSU') ? 'PSU Recruitment' : exam.type.includes('Govt') ? 'Central Govt Recruitment' : exam.type.includes('Board') ? 'State Govt Recruitment' : 'Technical Recruitment';
  
  let deg = 'B.E./B.Tech in relevant discipline';
  if (exam.type.includes('Research') || exam.acronym.includes('Scientist')) deg = 'B.E./B.Tech/M.E./M.Tech/Ph.D';
  if (exam.name.includes('Junior Engineer')) deg = 'Diploma / Degree in Engineering';
  if (exam.name.includes('Assistant Loco Pilot') || exam.name.includes('MTS')) deg = 'ITI / Diploma in Engineering';

  let expat = {
    stages: 2,
    papers: ['Computer Based Test', 'Interview'],
    totalMarks: 200,
    duration: '2 hours',
    types: ['MCQ'],
    sections: ['Technical (70%)', 'Non-Technical (30%)'],
    negativeMarking: '0.25 marks deducted for wrong answer'
  };

  let sal = {
    range: '₹40,000 - ₹1,40,000/month',
    payBand: 'Level E1',
    ctc: '₹10-14 LPA',
    perks: 'DA, HRA, Medical, PRP'
  };

  if (exam.type.includes('Maharatna')) {
    sal.range = '₹50,000 - ₹1,60,000/month';
    sal.ctc = '₹15-18 LPA';
    sal.payBand = 'Level E2 (Maharatna)';
  } else if (exam.acronym.includes('JE') || exam.name.includes('Junior Engineer')) {
    sal.range = '₹35,400 - ₹1,12,400/month';
    sal.payBand = 'Level 6';
    sal.ctc = '₹6-9 LPA';
  } else if (exam.type.includes('Govt') && !exam.acronym.includes('JE')) {
    sal.range = '₹56,100 - ₹1,77,500/month';
    sal.payBand = 'Level 10';
    sal.ctc = '₹9-12 LPA';
  }

  let syllabus = {
    'Technical Core': ['Advanced concepts from B.Tech curriculum'],
    'Aptitude': ['Quantitative Aptitude, Logical Reasoning, General Awareness']
  };

  if (exam.type.includes('Space') || exam.type.includes('Research')) {
    syllabus = {
      'Core Discipline': ['In-depth theoretical concepts, numericals, and research-oriented topics']
    };
    expat.sections = ['Technical (100%)'];
  }

  if (['IOCL ET', 'HPCL ET', 'BPCL ET', 'GAIL ET', 'PGCIL ET', 'NTPC ET', 'ONGC AEE'].includes(exam.acronym)) {
    expat.stages = 2;
    expat.papers = ['GATE Score', 'GD/PI'];
    expat.sections = ['GATE Core'];
    syllabus = { 'Core': ['As per GATE Syllabus'] };
  }

  return {
    id: exam.id,
    name: exam.name,
    acronym: exam.acronym,
    volume: 1,
    volumeName: 'Indian Technical Engineering Exams',
    category: cat,
    conductingBody: exam.body,
    eligibility: {
      degree: deg,
      year: 'Completed or Final Year',
      age: 'Typically up to 27/30 years (category relaxations apply)',
      percentage: 'Min 60% or 65% aggregate',
      nationality: 'Indian nationals'
    },
    syllabus: syllabus,
    examPattern: expat,
    subjects: ['Civil', 'Mechanical', 'Electrical', 'Electronics', 'Computer Science'],
    validity: 'For current recruitment cycle only',
    postQualifyingBenefits: [
      `Secure job with ${exam.body}`,
      'Excellent growth opportunities',
      'Comprehensive medical and residential facilities'
    ],
    salary: sal,
    careerProgression: [
      'Trainee / Junior role (1st year)',
      'Assistant Manager / Engineer',
      'Manager / Senior Engineer'
    ],
    officialWebsite: `https://www.google.com/search?q=${encodeURIComponent(exam.body + ' careers')}`,
    preparationResources: [
      'GATE/IES standard technical material',
      'Previous year question papers',
      'Current affairs (if applicable)'
    ],
    difficulty: exam.type.includes('Maharatna') || exam.type.includes('Space') ? 4 : 3,
    selectionProcess: [
      'Step 1: Written Exam / GATE shortlisting',
      'Step 2: Group Discussion / Personal Interview',
      'Step 3: Medical Fitness Test'
    ],
    tags: ['technical', exam.type.includes('PSU') ? 'psu' : 'government', 'engineering']
  };
}

let fileContent = fs.readFileSync(targetPath, 'utf-8');

// The file ends with module.exports = vol1_exams;
// We will replace '];\n\nmodule.exports = vol1_exams;' with our new objects.
// Let's find the closing bracket of the array.

let newExamsStr = missingExams.map(ex => '  ' + JSON.stringify(generateExamObject(ex), null, 2).replace(/\n/g, '\n  ')).join(',\n');

if (fileContent.includes('];\n\nmodule.exports = vol1_exams;')) {
  fileContent = fileContent.replace('];\n\nmodule.exports = vol1_exams;', ',\n' + newExamsStr + '\n];\n\nmodule.exports = vol1_exams;');
} else if (fileContent.includes('];\r\n\r\nmodule.exports = vol1_exams;')) {
  fileContent = fileContent.replace('];\r\n\r\nmodule.exports = vol1_exams;', ',\n' + newExamsStr + '\n];\n\nmodule.exports = vol1_exams;');
} else if (fileContent.includes('];\nmodule.exports = vol1_exams;')) {
  fileContent = fileContent.replace('];\nmodule.exports = vol1_exams;', ',\n' + newExamsStr + '\n];\n\nmodule.exports = vol1_exams;');
} else {
  // Safe fallback: split by last occurrence of ];
  const lastIndex = fileContent.lastIndexOf('];');
  if (lastIndex !== -1) {
    const before = fileContent.substring(0, lastIndex);
    const after = fileContent.substring(lastIndex + 2);
    fileContent = before + ',\n' + newExamsStr + '\n];' + after;
  }
}

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log('Successfully appended ' + missingExams.length + ' exams to the file.');
