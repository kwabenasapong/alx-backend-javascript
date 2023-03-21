function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = new Map();

  /* budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita; */
  budget.set(`income-${getCurrentYear()}`, income);
  budget.set(`gdp-${getCurrentYear()}`, gdp);
  budget.set(`capita-${getCurrentYear()}`, capita);

  return budget;
}
