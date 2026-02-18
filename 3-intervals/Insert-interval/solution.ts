class InsertIntervalsSolution {
  insertIntervals(intervals: number[][], newInterval: number[]): number[][] {
    const updatedIntervals: number[][] = [];
    let i = 0;
    let newIntervalGroup = [...newInterval];
    const n = intervals.length;

    while (i < n && intervals[i][1] < newInterval[0]) {
      updatedIntervals.push(intervals[i]);
      i++;
    }

    while (i < n && intervals[i][0] <= newInterval[1]) {
      newIntervalGroup[0] = Math.min(newIntervalGroup[0], intervals[i][0]);
      newIntervalGroup[1] = Math.max(newIntervalGroup[1], intervals[i][1]);
      i++;
    }
    updatedIntervals.push(newIntervalGroup);

    while (i < n) {
      updatedIntervals.push(intervals[i]);
      i++;
    }

    return updatedIntervals;
  }
}
