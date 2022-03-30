function solution(clothes) {
  const closet = {};

  clothes.forEach(([cloth, type]) => (closet[type] = []));

  clothes.forEach(([cloth, type]) => closet[type].push(cloth));
  const values = Object.values(closet);

  let acc = 1;
  values.forEach((value) => {
    acc = acc * (value.length + 1);
  });

  return acc - 1;
}
