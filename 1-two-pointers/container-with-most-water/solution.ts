class ContainerWithMostWaterSolution {
  max_area(heights: number[]): number {
    let higherArea: number = 0,
      left = 0,
      right = heights.length - 1;

    while (left < right) {
      const lHeight = heights[left];
      const rHeight = heights[right];
      const minHeight = Math.min(lHeight, rHeight);
      const absWidth = Math.abs(left - right);
      const area = absWidth * minHeight;
      if (area > higherArea) {
        higherArea = area;
      }
      if (lHeight > rHeight) {
        right--;
      } else {
        left++;
      }
    }
    return higherArea;
  }
}
