function superbowlWin(record) {
  let winningRecord;
  record.find((record) => {
    if (record["result"] === "W") {
      winningRecord = record.year;
      return winningRecord;
    }
  });
  return winningRecord;
}

console.log(superbowlWin(record));
