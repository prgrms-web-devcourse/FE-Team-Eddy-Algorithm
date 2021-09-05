function solution(table, languages, preference) {
  const score = {};
  table = table.map((column) => {
    column = column.split(' ');
    score[column[0]] = 0;
    return column;
  });
  languages.map((lang, i) => {
    let pref = preference[i];
    table.map((column) => {
      let idx = column.indexOf(lang);
      if (idx !== -1) {
        score[column[0]] += (6 - idx) * pref;
      }
    });
  });
  const max = Math.max(...Object.values(score));
  const ans = [];
  for (let field of Object.keys(score)) {
    if (score[field] === max) {
      ans.push(field);
    }
  }
  if (ans.length > 1) {
    ans.sort();
  }
  return ans[0];
}
