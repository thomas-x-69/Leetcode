/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
        if (meetings.length === 0) return days;

    let intervals = meetings.sort((a,b)=>a[0]-b[0])
    const result = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = result[result.length - 1];
    
    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      result.push(current);
    }
  }
  console.log(result)
    let totalMeetingDays = result.reduce((total, interval) => 
        total + (interval[1] - interval[0] + 1), 0);
    
    return days - totalMeetingDays;
};