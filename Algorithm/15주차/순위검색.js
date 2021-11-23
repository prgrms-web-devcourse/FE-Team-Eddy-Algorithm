//15주차 순위검색...

function solution(info, query) {
  var answer = [];
  query.forEach((str) => {
    const [lang, jobGroup, experience, soulFoodAndScore] = str.split(" and ");
    const [soulFood, score] = soulFoodAndScore.split(" ");
    let count = 0;
    info.forEach((infoStr) => {
      const [infoLang, infoJobGroup, infoExperience, infoSoulFood, infoScore] =
        infoStr.split(" ");

      if (
        (lang === "-" || lang === infoLang) &&
        (jobGroup === "-" || jobGroup === infoJobGroup) &&
        (experience === "-" || experience === infoExperience) &&
        (soulFood === "-" || soulFood === infoSoulFood) &&
        Number(score) <= Number(infoScore)
      ) {
        count++;
      }
    });
    answer.push(count);
  });
  return answer;
}
