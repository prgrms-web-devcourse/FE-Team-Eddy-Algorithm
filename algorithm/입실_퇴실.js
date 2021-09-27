function solution(enter, leave) {
  const initialMeetCount = 0;
  const personMeetCount = Object.fromEntries(
    Array.from({ length: enter.length }, (e, i) => [i + 1, initialMeetCount])
  );
  const personInRoom = new Map();
  let leaveIdx = 0;
  enter.forEach((enterPerson) => {
    for (const [person] of personInRoom) {
      personMeetCount[person]++;
    }
    personMeetCount[enterPerson] += personInRoom.size;
    personInRoom.set(enterPerson, true);
    while (personInRoom.get(leave[leaveIdx])) {
      personInRoom.delete(leave[leaveIdx]);
      leaveIdx++;
    }
  });
  return Object.values(personMeetCount);
}
