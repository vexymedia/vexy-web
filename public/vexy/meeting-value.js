(() => {
  'use strict';

  const revenue = document.getElementById('meeting-revenue');
  const margin = document.getElementById('meeting-margin');
  const close = document.getElementById('meeting-close');
  if (!revenue || !margin || !close) return;

  const money = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  });
  const readValue = (input) => {
    const value = Number(input.value);
    return Number.isFinite(value)
      ? Math.min(Number(input.max), Math.max(Number(input.min), value))
      : Number(input.min);
  };

  function update() {
    const revenueValue = readValue(revenue);
    const marginValue = readValue(margin);
    const closeValue = readValue(close);
    const grossProfit = Math.round(revenueValue * marginValue / 100 * closeValue / 100);

    document.getElementById('meeting-revenue-value').textContent = money.format(revenueValue);
    document.getElementById('meeting-margin-value').textContent = marginValue + '%';
    document.getElementById('meeting-close-value').textContent = closeValue + '%';
    document.getElementById('meeting-value-result').textContent = money.format(grossProfit);

    revenue.setAttribute('aria-valuetext', money.format(revenueValue));
    margin.setAttribute('aria-valuetext', marginValue + ' percent');
    close.setAttribute('aria-valuetext', closeValue + ' percent');
  }

  [revenue, margin, close].forEach((input) => input.addEventListener('input', update));
  update();
})();
