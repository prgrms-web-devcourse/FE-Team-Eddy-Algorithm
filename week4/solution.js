const calculateScore = (languages, table, 
        preference, jobs, scores) => {
    const languagePreferenceZip = new Map();
    const languageTable = [];

    languages.map((language, index) => languagePreferenceZip.set(language, preference[index]));

    table.forEach((column, index) => {
        const [job, ...languages] = column.split(' ');

        languageTable.push({
            ...languages
        });

        jobs.set(index, job);
    });

    languageTable.forEach((table) => {
        let score = 0;

        for(const [key, value] of Object.entries(table)){
            if(languagePreferenceZip.get(value)){
                score += languagePreferenceZip.get(value) * (jobs.size - key);
            }
        }

        scores.push(score);
    });
}

const getMaxScoreIndex = (scores) => {
    let maxScore = 0;
    let maxScoreIndex = 0;

    scores.forEach((score, index) => {
        if(maxScore < score){
            maxScore = score
            maxScoreIndex = index;
        }
    });
    
    return maxScoreIndex;
}

const solution = (table, languages, preference) => {
    const copiedTable = table.slice();
    copiedTable.sort();

    const scores = [];
    const jobs = new Map();
    calculateScore(languages, copiedTable, preference, jobs, scores);

    return jobs.get(getMaxScoreIndex(scores));
}
