import json

def generate_exams():
    exams = []
    
    # Base data templates
    upsc_template = {
        "volume": 2, "volumeName": "Government Non-Technical Exams",
        "category": "Civil Services / Defence", "conductingBody": "Union Public Service Commission (UPSC)",
        "eligibility": {"degree": "Graduation in any discipline", "year": "Final year appearing or passed", "age": "21-32 years", "percentage": "No minimum percentage", "nationality": "Indian national"},
        "syllabus": {"Prelims": ["General Studies", "Aptitude"], "Mains": ["Essay", "General Studies I-IV", "Optional Papers"]},
        "examPattern": {"stages": 3, "papers": ["Prelims", "Mains", "Interview"], "totalMarks": 2025, "duration": "Varies", "types": ["MCQ", "Descriptive"], "sections": ["Prelims: 400 marks", "Mains: 1750 marks"], "negativeMarking": "1/3 for wrong MCQ answers"},
        "subjects": ["History", "Geography", "Polity", "Economy", "Environment", "Science & Tech", "Ethics"],
        "validity": "For the specific recruitment year",
        "postQualifyingBenefits": ["Prestigious Administrative Positions", "High Job Security", "Substantial Authority and Perks"],
        "salary": {"range": "₹56,100 - ₹2,50,000/month", "payBand": "Level 10 to Level 18", "ctc": "₹12-15 LPA starting", "perks": "Government accommodation, vehicle, medical, pension"},
        "careerProgression": ["Level 10", "Level 11", "Level 12", "Level 13", "Level 14"],
        "officialWebsite": "https://upsc.gov.in",
        "preparationResources": ["NCERT Books", "Laxmikanth Polity", "Spectrum Modern History", "The Hindu Newspaper"],
        "difficulty": 5,
        "selectionProcess": ["Step 1: Preliminary Exam", "Step 2: Main Exam", "Step 3: Interview", "Step 4: Medical Test", "Step 5: Merit List"],
        "tags": ["government", "civil-services", "upsc"]
    }
    
    ssc_template = {
        "volume": 2, "volumeName": "Government Non-Technical Exams",
        "category": "Staff Selection", "conductingBody": "Staff Selection Commission (SSC)",
        "eligibility": {"degree": "Bachelor Degree (10th/12th for some)", "year": "Passed before cut-off", "age": "18-32 years", "percentage": "No minimum requirement", "nationality": "Indian national"},
        "syllabus": {"Tier 1": ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English Comprehension"]},
        "examPattern": {"stages": 2, "papers": ["Tier 1", "Tier 2"], "totalMarks": 390, "duration": "Varies", "types": ["MCQ"], "sections": ["Tier 1: 200 marks", "Tier 2: 390 marks"], "negativeMarking": "0.5 in Tier 1"},
        "subjects": ["Quantitative Aptitude", "Reasoning", "English", "General Awareness"],
        "validity": "Recruitment cycle",
        "postQualifyingBenefits": ["Group B and C Posts", "Job Stability", "CGHS"],
        "salary": {"range": "₹25,500 - ₹1,51,100/month", "payBand": "Level 4 to Level 8", "ctc": "₹6-12 LPA", "perks": "HRA, DA, TA, Medical"},
        "careerProgression": ["Assistant", "Section Officer", "Under Secretary"],
        "officialWebsite": "https://ssc.nic.in",
        "preparationResources": ["Kiran SSC Mathematics", "SP Bakshi English", "Lucent General Knowledge"],
        "difficulty": 4,
        "selectionProcess": ["Step 1: Tier-I CBT", "Step 2: Tier-II CBT", "Step 3: Document Verification", "Step 4: Medical Exam"],
        "tags": ["government", "central", "ssc"]
    }
    
    bank_template = {
        "volume": 2, "volumeName": "Government Non-Technical Exams",
        "category": "Banking", "conductingBody": "Banking Recruitment Body (IBPS/SBI/RBI)",
        "eligibility": {"degree": "Graduation in any discipline", "year": "Passed", "age": "20-30 years", "percentage": "No minimum percentage", "nationality": "Indian national"},
        "syllabus": {"Prelims": ["English Language", "Quantitative Aptitude", "Reasoning Ability"], "Mains": ["Reasoning", "General Awareness", "English Language", "Data Analysis"]},
        "examPattern": {"stages": 3, "papers": ["Prelims", "Mains", "Interview"], "totalMarks": 225, "duration": "Varies", "types": ["MCQ", "Descriptive"], "sections": ["Prelims: 100 marks", "Mains: 225 marks"], "negativeMarking": "0.25 marks per wrong answer"},
        "subjects": ["English", "Quantitative Aptitude", "Reasoning", "Banking Awareness"],
        "validity": "Recruitment year",
        "postQualifyingBenefits": ["Banking Career", "Concessional Loans", "Leased Accommodation"],
        "salary": {"range": "₹36,000 - ₹63,840/month", "payBand": "Officer Scale I", "ctc": "₹8-10 LPA", "perks": "HRA, DA, CCA, Medical"},
        "careerProgression": ["PO/Assistant Manager", "Manager", "Senior Manager", "Chief Manager"],
        "officialWebsite": "https://ibps.in",
        "preparationResources": ["RS Aggarwal for Quant", "Wren and Martin for English", "Banking Awareness Books"],
        "difficulty": 3,
        "selectionProcess": ["Step 1: Preliminary Exam", "Step 2: Main Exam", "Step 3: Interview"],
        "tags": ["banking", "po", "finance"]
    }

    rrb_template = {
        "volume": 2, "volumeName": "Government Non-Technical Exams",
        "category": "Railways", "conductingBody": "Railway Recruitment Board",
        "eligibility": {"degree": "10th/12th/Graduate", "year": "Passed", "age": "18-33 years", "percentage": "No minimum", "nationality": "Indian national"},
        "syllabus": {"CBT 1": ["Mathematics", "General Intelligence and Reasoning", "General Awareness"]},
        "examPattern": {"stages": 3, "papers": ["CBT 1", "CBT 2", "Skill Test"], "totalMarks": 120, "duration": "90 mins", "types": ["MCQ"], "sections": ["CBT 1: 100", "CBT 2: 120"], "negativeMarking": "1/3rd wrong answer"},
        "subjects": ["Mathematics", "Reasoning", "General Awareness", "General Science"],
        "validity": "Recruitment cycle",
        "postQualifyingBenefits": ["Railway Free Passes", "Railway Quarters", "Good Job Security"],
        "salary": {"range": "₹19,900 - ₹35,400/month", "payBand": "Level 2 to Level 6", "ctc": "₹4-8 LPA", "perks": "DA, HRA, Transport Allowance, Running Allowance"},
        "careerProgression": ["Clerk", "Senior Clerk", "Superintendent"],
        "officialWebsite": "https://indianrailways.gov.in",
        "preparationResources": ["Lucent GK", "RS Aggarwal Quant", "Speedy Railway GK"],
        "difficulty": 3,
        "selectionProcess": ["Step 1: First Stage CBT", "Step 2: Second Stage CBT", "Step 3: Typing Skill Test/Document Verification", "Step 4: Medical"],
        "tags": ["railways", "government"]
    }
    
    insurance_template = {
        "volume": 2, "volumeName": "Government Non-Technical Exams",
        "category": "Insurance", "conductingBody": "Insurance Companies (LIC/NIACL/etc.)",
        "eligibility": {"degree": "Graduation", "year": "Passed", "age": "21-30 years", "percentage": "No minimum percentage", "nationality": "Indian national"},
        "syllabus": {"Prelims": ["English Language", "Reasoning Ability", "Quantitative Aptitude"], "Mains": ["Reasoning", "General/Insurance Awareness", "English Language", "Quantitative Aptitude"]},
        "examPattern": {"stages": 3, "papers": ["Prelims", "Mains", "Interview"], "totalMarks": 250, "duration": "Varies", "types": ["MCQ", "Descriptive"], "sections": ["Prelims: 100 marks", "Mains: 250 marks"], "negativeMarking": "0.25 marks per wrong answer"},
        "subjects": ["English", "Quantitative Aptitude", "Reasoning", "Insurance Awareness"],
        "validity": "Recruitment year",
        "postQualifyingBenefits": ["PSU Job Security", "Defined Work Hours", "Leased Accommodation"],
        "salary": {"range": "₹32,795 - ₹62,315/month", "payBand": "AO Scale", "ctc": "₹7-9 LPA", "perks": "HRA, DA, CCA, Medical"},
        "careerProgression": ["Administrative Officer", "Assistant Manager", "Manager", "Chief Manager"],
        "officialWebsite": "https://licindia.in",
        "preparationResources": ["Insurance Awareness Modules", "RS Aggarwal for Quant", "Mock Tests"],
        "difficulty": 3,
        "selectionProcess": ["Step 1: Preliminary Exam", "Step 2: Main Exam", "Step 3: Interview", "Step 4: Medical Exam"],
        "tags": ["insurance", "government", "finance"]
    }
    
    exams_data = [
        ("UPSC CSE", "Civil Services Examination", "upsc-cse", upsc_template),
        ("UPSC CAPF AC", "Central Armed Police Forces Assistant Commandant", "upsc-capf-ac", upsc_template),
        ("UPSC CDS", "Combined Defence Services", "upsc-cds", upsc_template),
        ("UPSC NDA", "National Defence Academy", "upsc-nda", upsc_template),
        ("UPSC IES/ISS", "Indian Economic/Statistical Service", "upsc-ies-iss", upsc_template),
        ("UPSC CISF AC EXE", "CISF Assistant Commandant", "upsc-cisf-ac", upsc_template),
        ("SSC CGL", "Combined Graduate Level", "ssc-cgl", ssc_template),
        ("SSC CHSL", "Combined Higher Secondary Level", "ssc-chsl", ssc_template),
        ("SSC MTS", "Multi Tasking Staff", "ssc-mts", ssc_template),
        ("SSC CPO", "Central Police Organisation SI", "ssc-cpo", ssc_template),
        ("SSC GD", "General Duty Constable", "ssc-gd", ssc_template),
        ("SSC Stenographer Grade C/D", "Stenographer Grade C/D", "ssc-steno", ssc_template),
        ("RRB NTPC", "Non-Technical Popular Categories", "rrb-ntpc", rrb_template),
        ("RRB Group D", "Level 1 Posts", "rrb-group-d", rrb_template),
        ("RRB ALP", "Assistant Loco Pilot", "rrb-alp", rrb_template),
        ("IBPS PO", "Probationary Officer", "ibps-po", bank_template),
        ("IBPS Clerk", "Junior Associates", "ibps-clerk", bank_template),
        ("IBPS RRB Officer Scale I", "Regional Rural Banks Officer", "ibps-rrb-po", bank_template),
        ("IBPS RRB Office Assistant", "Regional Rural Banks Assistant", "ibps-rrb-clerk", bank_template),
        ("IBPS SO", "Specialist Officer", "ibps-so", bank_template),
        ("SBI PO", "Probationary Officer", "sbi-po", bank_template),
        ("SBI Clerk", "Junior Associates", "sbi-clerk", bank_template),
        ("SBI SO", "Specialist Officer", "sbi-so", bank_template),
        ("RBI Grade B", "Grade B Officer", "rbi-grade-b", bank_template),
        ("RBI Assistant", "Assistant", "rbi-assistant", bank_template),
        ("RBI Grade A DEPR/DSIM", "Grade A Officer DEPR/DSIM", "rbi-grade-a", bank_template),
        ("NABARD Grade A", "Development Assistant", "nabard-grade-a", bank_template),
        ("NABARD Grade B", "Manager", "nabard-grade-b", bank_template),
        ("SEBI Grade A", "Officer", "sebi-grade-a", bank_template),
        ("LIC AAO", "Assistant Administrative Officer", "lic-aao", insurance_template),
        ("LIC ADO", "Apprentice Development Officer", "lic-ado", insurance_template),
        ("LIC HFL", "Assistant Manager", "lic-hfl", insurance_template),
        ("OICL AO", "Oriental Insurance AO", "oicl-ao", insurance_template),
        ("UIIC AO", "United India Insurance AO", "uiic-ao", insurance_template),
        ("NIACL AO", "New India Assurance AO", "niacl-ao", insurance_template),
        ("UIIC Assistant", "United India Insurance Assistant", "uiic-assistant", insurance_template),
        ("NICL Assistant", "National Insurance Company Assistant", "nicl-assistant", insurance_template),
        ("FCI Manager Grade III", "Food Corporation Manager", "fci-manager", ssc_template),
        ("FCI AGM", "Assistant General Manager", "fci-agm", ssc_template),
        ("ECGC PO", "Export Credit Guarantee Corp PO", "ecgc-po", bank_template),
        ("EPFO SSA", "Social Security Assistant", "epfo-ssa", ssc_template),
        ("EPFO EO/AO", "Enforcement Officer", "epfo-eo-ao", upsc_template),
        ("IPPB Officer", "India Post Payments Bank Officer", "ippb-officer", bank_template),
        ("Post Office GDS", "Gramin Dak Sevak", "post-office-gds", ssc_template),
        ("NHB Manager", "National Housing Bank Manager", "nhb-manager", bank_template),
        ("SIDBI Grade A", "Small Industries Development Bank", "sidbi-grade-a", bank_template),
        ("EXIM Bank MT", "Management Trainee", "exim-mt", bank_template),
        ("IIFCL MT", "Management Trainee", "iifcl-mt", bank_template),
        ("PFRDA Asst Manager", "Pension Fund Regulatory", "pfrda-am", bank_template),
        ("IRDAI Assistant Manager", "IRDAI Technical", "irdai-am", bank_template),
        ("CCI Officer", "Competition Commission of India", "cci-officer", ssc_template),
        ("DFCCIL Junior Manager", "Dedicated Freight Corridor", "dfccil-jm", rrb_template),
        ("Konkan Railway JE", "Junior Engineer", "konkan-je", rrb_template),
        ("IRAS", "Indian Railway Accounts Service", "iras", upsc_template),
        ("Intelligence Bureau ACIO", "Assistant Central Intelligence Officer", "ib-acio", ssc_template),
        ("CGDA Auditor/LDC", "Controller General Defence Accounts", "cgda-auditor", ssc_template),
        ("CBI Sub Inspector", "Central Bureau of Investigation SI", "cbi-si", ssc_template),
        ("SSC CAPF AC", "SSC Based CAPF", "ssc-capf-ac", ssc_template),
        ("Central Secretariat Service CSS", "CSS", "css", ssc_template),
        ("MEA", "Ministry of External Affairs", "mea", upsc_template),
        ("IFS", "Indian Foreign Service", "ifs", upsc_template),
        ("IRS Income Tax Inspector", "Income Tax Inspector", "irs-it", ssc_template),
        ("IRS Customs Excise Inspector", "Customs Excise Inspector", "irs-customs", ssc_template),
        ("SAIL Non-Technical MT", "Management Trainee", "sail-mt", ssc_template),
        ("Coal India Non-Technical MT", "Management Trainee", "coal-india-mt", ssc_template),
        ("NTPC Non-Technical", "Non-Technical posts", "ntpc-non-tech", ssc_template),
        ("HAL Non-Technical Officer", "Non-Technical Officer", "hal-nto", ssc_template),
        ("ONGC Non-Technical", "Various", "ongc-non-tech", ssc_template),
        ("BPCL Non-Technical Officers", "Officers", "bpcl-nto", ssc_template),
        ("NALCO Non-Technical", "Non-Technical", "nalco-non-tech", ssc_template),
        ("ECIL Technical Officer", "Electronics", "ecil-to", ssc_template),
        ("DAE Steno/Admin", "Department of Atomic Energy", "dae-steno", ssc_template),
        ("ISRO Non-Technical SA", "Scientific Assistant", "isro-sa", ssc_template),
        ("DRDO Admin", "Admin posts", "drdo-admin", ssc_template),
        ("Indian Navy Civilian", "Technical Supervisor", "navy-civilian", ssc_template),
        ("Canara Bank PO", "Probationary Officer", "canara-po", bank_template),
        ("Bank of Baroda PO", "Probationary Officer", "bob-po", bank_template),
        ("Bank of India PO", "Probationary Officer", "boi-po", bank_template),
        ("Indian Bank PO", "Probationary Officer", "indian-bank-po", bank_template),
        ("PNB PO", "Probationary Officer", "pnb-po", bank_template),
        ("UCO Bank Officer", "Officer", "uco-officer", bank_template),
        ("Syndicate Bank PO", "Probationary Officer", "syndicate-po", bank_template),
        ("NSDL Officer", "Depository Participant Officer", "nsdl-officer", bank_template),
        ("NCB Sub Inspector", "Narcotics Control Bureau SI", "ncb-si", ssc_template),
        ("CISF Head Constable", "Constable Technical", "cisf-hc", ssc_template)
    ]

    for acronym, name, eid, tpl in exams_data:
        import copy
        exam = copy.deepcopy(tpl)
        exam['id'] = eid
        exam['name'] = name
        exam['acronym'] = acronym
        exams.append(exam)
        
    js_content = "const vol2_exams = " + json.dumps(exams, indent=2) + ";\n\nmodule.exports = vol2_exams;\n"
    
    with open('vol2_government.js', 'w', encoding='utf-8') as f:
        f.write(js_content)

generate_exams()
