DESCRIPTION (inspired by Leetcode.com)
Given a list of intervals intervals and an interval newInterval, write a function to insert newInterval into a list of existing, non-overlapping, and sorted intervals based on their starting points. The function should ensure that after the new interval is added, the list remains sorted without any overlapping intervals, merging them if needed.

Input:

intervals = [[1,3],[6,9]]
newInterval = [2,5]
Output:

[[1,5],[6,9]]
Explanation: The new interval [2,5] overlaps with [1,3], so they are merged into [1,5].
