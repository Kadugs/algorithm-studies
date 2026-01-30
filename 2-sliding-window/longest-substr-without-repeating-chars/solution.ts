class longestSubstringWithoutRepeatingCharsSolution {
  longestSubstringWithoutRepeat(s: string): number {
    let maxSubstringSize = 0,
      currentChars: string[] = [];

    for (let end = 0; end < s.length; end++) {
      const repeatedCharIndex = currentChars.findIndex(
        (char) => char === s[end],
      );
      if (repeatedCharIndex === -1) {
        currentChars.push(s[end]);
        maxSubstringSize = Math.max(maxSubstringSize, currentChars.length);
      } else {
        currentChars = currentChars.slice(repeatedCharIndex);
      }
    }

    return maxSubstringSize;
  }
}
