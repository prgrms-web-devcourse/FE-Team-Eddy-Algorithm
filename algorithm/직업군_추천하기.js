function solution(table, languages, preference) {
  // {"job":Map(language:score) ... }
  const jobsScoreofLanguage = {};
  table.sort();
  table.forEach((jobString) => {
    const [job, ...languages] = jobString.split(" ");
    jobsScoreofLanguage[job] = new Map();
    languages.forEach((language, idx) => {
      jobsScoreofLanguage[job].set(language, 5 - idx);
    });
  });

  // get MaxValue and Jobs
  let maxScoreAndJobs = { jobs: [], maxScore: 0 };

  Object.entries(jobsScoreofLanguage).forEach(([job]) => {
    const totalValue = languages.reduce(
      (acc, language, idx) =>
        acc + (jobsScoreofLanguage[job].get(language) || 0) * preference[idx],
      0
    );
    if (maxScoreAndJobs.maxScore < totalValue) {
      maxScoreAndJobs = { jobs: [job], maxScore: totalValue };
    } else if (maxScoreAndJobs.maxScore === totalValue) {
      maxScoreAndJobs.jobs.push(job);
    }
  });

  const [selectedJob] = maxValue.jobs;
  return selectedJob;
}

const table = [
  "SI JAVA JAVASCRIPT SQL PYTHON C#",
  "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
  "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
  "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
  "GAME C++ C# JAVASCRIPT C JAVA",
];
const languages = ["PYTHON", "C++", "SQL"];
const preference = [7, 5, 5];

console.log(solution(table, languages, preference)); // "HARDWARE"
