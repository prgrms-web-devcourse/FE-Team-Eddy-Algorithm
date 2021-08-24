function solution(table, languages, preference) {
  const jobs = {}; // {"job":Map(language:score) ... }
  // making jobs Object
  table.sort(); // 사전 순으로 정렬
  table.forEach((jobString) => {
    const [job, ...languages] = jobString.split(" ");
    jobs[job] = new Map();
    languages.forEach((language, idx) => {
      jobs[job].set(language, 5 - idx);
    });
  });

  // get MaxValue and Jobs
  let maxValue = { jobs: [], maxScore: 0 };

  Object.entries(jobs).forEach(([job]) => {
    const totalValue = languages.reduce(
      (acc, language, idx) =>
        acc + (jobs[job].get(language) || 0) * preference[idx],
      0
    );
    if (maxValue.maxScore < totalValue) {
      maxValue = { jobs: [job], maxScore: totalValue };
    } else if (maxValue.maxScore === totalValue) {
      maxValue.jobs.push(job);
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

console.log(solution(table, languages, preference));
