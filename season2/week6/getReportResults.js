function solution(ids, reports, stoppedCount) {
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

  for (const report of reports) {
    const [reporterId, targetId] = report.split(" ");

    users[reporterId].reportIds = [
      ...new Set([...users[reporterId].reportIds, targetId]),
    ];
  }

  for (const id of ids) {
    const { reportIds } = users[id];

    for (const reportId of reportIds) {
      if (!users[reportId]) {
        continue;
      }

      users[reportId].stoppedCount += 1;
    }
  }

  const answer = [];
  for (const id of ids) {
    const { reportIds } = users[id];
    const stoppedIds = reportIds.filter(
      (id) => users[id].stoppedCount >= stoppedCount
    );

    answer.push(stoppedIds.length);
  }

  return answer;
}
