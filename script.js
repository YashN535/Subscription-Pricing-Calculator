function calculatePricing() {
  const productType = document.getElementById("productType").value;
  const developmentCost = document.getElementById("developmentCost").value;
  const targetUsers = document.getElementById("targetUsers").value;
  const competitorPrice = document.getElementById("competitorPrice").value;

  if (!developmentCost || !targetUsers || !competitorPrice) {
    document.getElementById("result").innerHTML = "Please fill out all fields!";
    return;
  }

  // Low-end suggestion: Slightly below competitor price
  const lowEndPrice = Number(competitorPrice) * 0.8;

  // Medium-end suggestion: Based on development cost and target users
  const mediumEndPrice =
    developmentCost / targetUsers + Number(competitorPrice);

  // High-end suggestion: Slightly above competitor price
  const highEndPrice = Number(competitorPrice) * 1.2;

  // Display the results
  document.getElementById("result").innerHTML = `
      <h3>Pricing Suggestions for ${productType.toUpperCase()}:</h3>
      <p><strong>Low-End:</strong> ₹${lowEndPrice.toFixed(
        2
      )} (Budget-friendly)</p>
      <p><strong>Medium-End:</strong> ₹${mediumEndPrice.toFixed(
        2
      )} (Balanced)</p>
      <p><strong>High-End:</strong> ₹${highEndPrice.toFixed(2)} (Premium)</p>
  `;
}
