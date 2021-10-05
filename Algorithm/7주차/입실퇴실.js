function checkFirstLeave(room,leave){
  //제일 처음 퇴실한 대상이 해당 room 배열에 존재한다면
  if(room.indexOf(leave[0]) >= 0 ){
    //해당 값을 room에서 제거 leave의 해당 값 또한 제거
    room.splice(room.indexOf(leave[0]) ,1)
    leave.shift()

    //그다음 퇴실한 대상도 해당 room에 존재하나 재귀함수로
    checkFirstLeave(room,leave)
  }
}

function solution(enter, leave) {
  const room = [];
  let obj = {};
  enter.forEach((num)=>{
    // 1명씩 방에 입장
    room.push(num)

    const Room_Last_Value = room[room.length - 1]

    //해당 room안의 마지막으로 추가한 값과 남아있는 값들은 서로 만났으므로 +1을 한다.
    room.forEach(val=>{
      obj[val] = obj[val] ? obj[val]+1 : 1;
    })

    //해당 room안의 마지막으로 추가한 값은 배열만큼이 아닌 1번 밖에 더해지지 않았기 때문에
    // 배열 전체에서 자기자신과 더한 1을 뺀 나머지 만큼을 추가해야한다.
    // room의 길이가 4이면 3만큼이 추가되어야하는데 1은 이미 추가되므로 남은 2(4-2)만큼이 추가해야한다
    obj[Room_Last_Value] = obj[Room_Last_Value] + room.length - 2

    checkFirstLeave(room,leave,num)
  })

  let realAnswer = new Array(enter.length).fill(0)
  for (const [key, val] of Object.entries(obj)){
    realAnswer[key-1] = val;
  }
  return realAnswer
}

console.log(JSON.stringify(solution(	[3, 2, 1], [2, 1, 3])) === JSON.stringify([1, 1, 2]))
console.log(JSON.stringify(solution(		[3, 2, 1], [1, 3, 2])) === JSON.stringify(	[2, 2, 2]))
console.log(JSON.stringify(solution(	[1, 4, 2, 3], [2, 1, 4, 3])) === JSON.stringify(	[2, 2, 0, 2]))
console.log(JSON.stringify(solution(	[1, 2, 3], [1, 2, 3])) === JSON.stringify(	[0, 0, 0]))
