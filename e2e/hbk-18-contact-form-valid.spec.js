const { test, expect } = require('@playwright/test');

test('HBK-18 Contact form submit with valid data', async ({ page }) => {
  await page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });

  await page.getByTestId('ContactName').fill('Fatima Zahra');
  await page.getByTestId('ContactEmail').fill('idmhandfatimazahra20@gmail.com');
  await page.getByTestId('ContactPhone').fill('066161616122');
  await page.getByTestId('ContactSubject').fill('Information request');
  await page.getByTestId('ContactDescription').fill('Asking about room availability for March 2026.');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText(/thanks for getting in touch/i)).toBeVisible({ timeout: 20000 });
});
