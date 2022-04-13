function solution(m, musicinfos) {
  let answer = '';
  let currTime = 0;

  m = m.split('').reduce((acc, element) => {
    element === '#' ? acc[acc.length - 1] += element : acc.push(element);
    return acc;
  }, []);

  for (const info of musicinfos) {
    const [start, end, title, melodyStr] = info.split(',');
    const time = Number((end.split(':')[0] - start.split(':')[0]) * 60 + end.split(":")[1] - start.split(":")[1]);

    const melody = melodyStr.split('').reduce((acc, element) => {
      element === '#' ? acc[acc.length - 1] += element : acc.push(element);
      return acc;
    }, []);

    // 시작할 인덱스
    const startIndex = melody.reduce((acc, element, index) => {
      element === m[0] && acc.push(index);
      return acc;
    }, []);

    for (const i of startIndex) {
        let curr = i; 
        let s = [];
        
        while (s.length + i < time && s.length < m.length) {
          s.push(melody[curr]);
            
          if (s.join('') === m.join('')) {
            if (currTime < time) {
              currTime = time;
              answer = title;
            }
            break;
          }
            
          curr = curr < melody.length - 1 ? curr + 1 : 0;
        }
    }

  }
  
  return answer ||  "(None)";
}