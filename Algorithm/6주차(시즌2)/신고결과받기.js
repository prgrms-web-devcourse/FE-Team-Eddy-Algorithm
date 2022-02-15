// 성공코드 14분 소요 1차

function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const reportedTargetArr = [];
  const reportCountObj = {};
  const eraseDuplicateReport = [...new Set(report)];
  eraseDuplicateReport.map((reportStr) => {
    const [reporter, reportedTarget] = reportStr.split(" ");
    reportCountObj[reportedTarget] = reportCountObj[reportedTarget]
      ? reportCountObj[reportedTarget] + 1
      : 1;
  });

  for (let name in reportCountObj) {
    const count = reportCountObj[name];
    if (count >= k) reportedTargetArr.push(name);
  }

  eraseDuplicateReport.map((reportStr) => {
    const [reporter, reportedTarget] = reportStr.split(" ");
    if (reportedTargetArr.indexOf(reportedTarget) > -1) {
      result[id_list.indexOf(reporter)] = result[id_list.indexOf(reporter)]
        ? result[id_list.indexOf(reporter)] + 1
        : 1;
    }
  });

  return result;
}

// 성공코드 가독성 좋게 수정 1차

const addCount = (target, idx) =>
  (target[idx] = target[idx] ? target[idx] + 1 : 1);

function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const reportedTargetArr = [];
  const reportCountObj = {};
  const eraseDuplicateReport = [...new Set(report)];
  eraseDuplicateReport.map((reportStr) => {
    const [reporter, reportedTarget] = reportStr.split(" ");
    addCount(reportCountObj, reportedTarget);
    if (reportCountObj[reportedTarget] >= k)
      reportedTargetArr.push(reportedTarget);
  });

  eraseDuplicateReport.map((reportStr) => {
    const [reporter, reportedTarget] = reportStr.split(" ");
    if (reportedTargetArr.indexOf(reportedTarget) > -1)
      addCount(result, id_list.indexOf(reporter));
  });

  return result;
}

// 성공코드 가독성 좋게 수정 2차

const addCount = (target, idx) =>
  (target[idx] = target[idx] ? target[idx] + 1 : 1);
const checkSuspendUser = (target, idx, maxCountLine, suspendArr) => {
  if (target[idx] >= maxCountLine) suspendArr.push(idx);
};

function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const suspendedUserArr = [];
  const reportCountObj = {};
  const eraseDuplicateReport = [...new Set(report)];
  eraseDuplicateReport.map((reportStr) => {
    const [reporter, reportedTarget] = reportStr.split(" ");
    addCount(reportCountObj, reportedTarget);
    checkSuspendUser(reportCountObj, reportedTarget, k, suspendedUserArr);
  });

  eraseDuplicateReport.map((reportStr) => {
    const [reporter, reportedTarget] = reportStr.split(" ");
    if (suspendedUserArr.indexOf(reportedTarget) > -1)
      addCount(result, id_list.indexOf(reporter));
  });

  return result;
}
