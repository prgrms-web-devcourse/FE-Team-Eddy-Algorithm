const findPass = (queries, answer, conditionNscore) => {
    for (const query of queries) {
        const splited = query.replace(/ and /g, " ").split(" ");
        const score = Number(splited.pop());
        const key = splited.join("");
        const array = conditionNscore[key];
        console.log(array)
        if (array) {
            let start = 0;
            let end = array.length;
            while (start < end) {
                const mid = Math.floor((start + end) / 2);
                
                if (array[mid] < score) { //score가 중간보다 크면 중간 이상을 탐색
                    start = mid + 1;
                } else {
                    end = mid;
                }
            }

            const result = array.length - start;
            answer.push(result);
            continue;
        }
        answer.push(0);
    }
}

function solution(infos, query) {
    var answer = [];
    const conditionNscore = {};
    
    function combination(array, score, start) {
        const key = array.join("");
        const value = conditionNscore[key];

        if (value) {
            console.log(value, score)
            conditionNscore[key].push(score);
        } else { 
            
            conditionNscore[key] = [score];
        }

        for (let i = start; i < array.length; i++) {
            const temp = [...array];
            temp[i] = "-";
            combination(temp, score, i + 1);
        }
    }
    
    for (const info of infos) {
        const conditions = info.split(" ");
        const score = Number(conditions.pop());
        combination(conditions, score, 0);
    }

    for (const key in conditionNscore) {
        conditionNscore[key] = conditionNscore[key].sort((a, b) => a - b);
    }

    findPass(query, answer, conditionNscore); // 효율성을 위하여 이진탐색으로 조회
    
    return answer;
}
