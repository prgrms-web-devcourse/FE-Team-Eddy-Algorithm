const getPermutations= function (target, num) {
    const results = [];
      
    if (num === 1) {
        return target.map((value) => [value]);
    }
  
    target.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, num - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);
      results.push(...attached);
    });
  
    return results;
};
  
function solution(k, dungeons) {
    let maxVisitedDungeons = 0;
    const permutations = getPermutations(dungeons, dungeons.length);

    for (const permutation of permutations) {
        let currentTired = k;
        let visitedDungeons = 0;
        
        for (const [neededTired, useTired] of permutation) {
            if (currentTired < neededTired) {
                continue;
            }
            
            currentTired -= useTired
            visitedDungeons += 1
            
        }
        maxVisitedDungeons = Math.max(visitedDungeons, maxVisitedDungeons)
    }
    
    return maxVisitedDungeons;
}
