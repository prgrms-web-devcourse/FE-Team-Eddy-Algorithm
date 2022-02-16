/*
  Todo : users의 값이 함수호출마다 변하는데 함수형으로 개선할 수 없을까?
*/
const calculateStoppedIdsNum = (ids, users, stoppedCount) => {
  const answer = [];

  for (const id of ids) {
    const { reportIds } = users[id];
    const stoppedIds = reportIds.filter(
      (id) => users[id].stoppedCount >= stoppedCount
    );

    answer.push(stoppedIds.length);
  }

  return answer;
};

const calculateStoppedCount = (ids, users) => {
  for (const id of ids) {
    const { reportIds } = users[id];

    for (const reportId of reportIds) {
      if (!users[reportId]) {
        continue;
      }

      users[reportId].stoppedCount += 1;
    }
  }
};

const setReportIds = (reports, users) => {
  for (const report of reports) {
    const [reporterId, targetId] = report.split(" ");

    users[reporterId].reportIds = [
      ...new Set([...users[reporterId].reportIds, targetId]),
    ];
  }
};

const initializeUsers = (ids) => {
  const users = {};

  for (const id of ids) {
    (users[id] = {
      reportIds: [],
    }),
      (users[id] = {
        ...users[id],
        stoppedCount: 0,
      });
  }

  return users;
};

const solution = (ids, reports, stoppedCount) => {
  const users = initializeUsers(ids);

  setReportIds(reports, users);

  calculateStoppedCount(ids, users);

  return calculateStoppedIdsNum(ids, users, stoppedCount);
};
