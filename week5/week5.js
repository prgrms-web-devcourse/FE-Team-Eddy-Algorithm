function solution(word) {
  /*
    1자리  1
    2자리 5^1 = 5
    3자리 5^2 = 25
    4자리 5^3 = 125
    5자리 5^4 = 625
    n번째 항까지 등비수열의 합 => (1 - r^n)/(1 - r) 
               => (1 - 5^5)/(1 - 5) = 781
    총 781개 
    
             A E I O U
    사전 idx: 0 1 2 3 4

    각 자리에서 => (char 개수 = 5) - (char의 string에서의 idx - 1) = 5^(4- string idx)까지 등비수열의 합
    (char 개수 - char 사전 idx) 5^4 5^3 5^2 5^1 5^0
    => (1 - 5^(5-idx))/(1-5) * idx + 1
    
    
    E 5^4까지 등비수열 합(1번째 자리수니깐) * 1(사전에서 E는 1번째) + 1 (그 다음 수니깐 1 더해줌) = 782
    I 5^3까지(2번째 자리수) * 2(사전에서 I는 2번째) + 1 = 313
    O 5^2까지(3번째 자리수) * 3(사전에서 3번째) + 1 = 94
    */
  const dict = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const dictLen = Object.keys(dict).length;
  const qmSeq = (base, exp) => (1 - Math.pow(base, exp)) / (1 - base);
  let order = 0;
  [...word].forEach((char, idx) => {
    order += qmSeq(dictLen, dictLen - idx) * dict[char] + 1;
  });
  return order;
}
