const vol1 = require('./vol1_technical');
const vol2 = require('./vol2_government');
const vol3 = require('./vol3_state');
const vol4 = require('./vol4_higher');
const vol5 = require('./vol5_international');
const vol6 = require('./vol6_fellowship');

// Combine all volumes into one master array
const allExams = [
  ...vol1,
  ...vol2,
  ...vol3,
  ...vol4,
  ...vol5,
  ...vol6
];

// Validate and assign sequential numeric IDs for easy lookup
allExams.forEach((exam, index) => {
  exam._index = index + 1;
});

console.log(`✅ ExamArena Database loaded: ${allExams.length} exams across 6 volumes`);

module.exports = allExams;
