function solution(table, languages, preference) {
    const languagePreferenceZip = new Map();
    table.sort();

    const jobs = new Map();
    const newTable = [];
    languages.map((language, index) => languagePreferenceZip.set(language, preference[index]))
    table.forEach((column, index) => {
        const [job, ...languages] = column.split(' ');
        newTable.push({
            ...languages
        });
        jobs.set(index, job);
    })
    const scores = [];
    
    newTable.forEach((table) => {
        let score = 0;
        for(const [key, value] of Object.entries(table)){

            if(languagePreferenceZip.get(value)){
                score += languagePreferenceZip.get(value) * (jobs.size - key);
            }
        }
        scores.push(score);
    })

    let maxScore = 0;
    let maxScoreIndex = 0;
    scores.forEach((score, index) => {
        if(maxScore < score){
            maxScore = score
            maxScoreIndex = index;
        }
    })

    return jobs.get(maxScoreIndex);
}
