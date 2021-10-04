function solution(enters, leaves) {
    const room = new Map();
    const answer = new Array(enters.length).fill(0);

    for (let i = 0; i < leaves.length; i++) {
        while(room.get(leaves[i]) === undefined){
            const enter = enters.shift();
            room.set(enter, enter);

        }
        const popped = room.get(leaves[i]);

        answer[popped-1] += room.size - 1;
        room.delete(popped);
    }

    return answer;
}
