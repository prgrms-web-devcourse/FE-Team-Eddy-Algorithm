function solution(id_list, report, k) {
    let answer = Array(id_list.length).fill(0);
    
    const obj = id_list.reduce((acc, element) => {
        acc[element] = {person: [], count: 0};
        return acc;
    }, {});
    
    report.forEach(element => {
        const a = element.split(' ')[0];
        const b = element.split(' ')[1];
        
        if (!obj[a].person.some(p => p === b)) {
            obj[a].person.push(b);
            obj[b].count++;
        }
    });
    
    id_list.forEach((id, index) => {
        while (obj[id].person.length > 0) {
            const person = obj[id].person.pop();
            obj[person].count >= k && answer[index]++;
        }
    })
    
    return answer;
}
