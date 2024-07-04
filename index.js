function maxProfit(n) {
  // Initialize dp array and counts array
  let dp = Array(n + 1).fill(0);
  let counts = Array(n + 1).fill([0, 0, 0]);

  // Loop through each time unit
  for (let i = 1; i <= n; i++) {
    let maxEarning = dp[i];
    let bestCount = counts[i];

    // Check if we can add a Theatre
    if (i >= 5) {
      if (dp[i - 5] + 1500 > maxEarning) {
        maxEarning = dp[i - 5] + 1500;
        bestCount = [counts[i - 5][0] + 1, counts[i - 5][1], counts[i - 5][2]];
      }
    }

    // Check if we can add a Pub
    if (i >= 4) {
      if (dp[i - 4] + 1000 > maxEarning) {
        maxEarning = dp[i - 4] + 1000;
        bestCount = [counts[i - 4][0], counts[i - 4][1] + 1, counts[i - 4][2]];
      }
    }

    // Check if we can add a Commercial Park
    if (i >= 10) {
      if (dp[i - 10] + 3000 > maxEarning) {
        maxEarning = dp[i - 10] + 3000;
        bestCount = [
          counts[i - 10][0],
          counts[i - 10][1],
          counts[i - 10][2] + 1,
        ];
      }
    }

    dp[i] = maxEarning;
    counts[i] = bestCount;
  }

  return {
    earnings: dp[n],
    properties: {
      theatres: counts[n][0],
      pubs: counts[n][1],
      commercialParks: counts[n][2],
    },
  };
}

// Test cases
console.log(maxProfit(7)); // Test Case 1
console.log(maxProfit(8)); // Test Case 2
console.log(maxProfit(13)); // Test Case 3
