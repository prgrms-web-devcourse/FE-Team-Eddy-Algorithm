// 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다.
// 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 이럴때는 재생된 길이는 끊김 없이 더 추가된 길이지않나???

const getTime = (start, end) => {
  const [startHour, startMinute] = start.split(":");
  const [endHour, endMinute] = end.split(":");
  return (
    (new Date(0, 0, 0, endHour, endMinute) -
      new Date(0, 0, 0, startHour, startMinute)) /
    1000 /
    60
  );
};

function solution(m, musicinfos) {
  let answer = [];

  musicinfos = musicinfos.map((val) => {
    let [start, end, musicName, acbo] = val.split(",");
    acbo = acbo
      .replace(/C#/gi, "P")
      .replace(/D#/gi, "Q")
      .replace(/F#/gi, "R")
      .replace(/G#/gi, "Y")
      .replace(/A#/gi, "Z");
    return [start, end, musicName, acbo];
  });

  m = m
    .replace(/C#/gi, "P")
    .replace(/D#/gi, "Q")
    .replace(/F#/gi, "R")
    .replace(/G#/gi, "Y")
    .replace(/A#/gi, "Z");

  musicinfos.forEach((val) => {
    const [start, end, musicName, acbo] = val;
    const time = getTime(start, end);
    let newAcbo;
    if (acbo.length < time) {
      newAcbo = acbo.repeat(Math.ceil(time / acbo.length));
    } else {
      newAcbo = acbo.slice(0, time);
    }
    const acboIdx = newAcbo.indexOf(m);
    if (acboIdx > -1) {
      answer.push({ musicName, newAcbo: time });
    }
  });
  answer.sort((a, b) => b.newAcbo - a.newAcbo);
  return answer.length !== 0 ? answer[0].musicName : "(None)";
}
