const { test, expect } = require('@playwright/test');

test('HBK-19 Contact form submit with invalid phone (too short)', async ({ page }) => {
  await page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });

  await page.getByTestId('ContactName').fill('Fatima Zahra');
  await page.getByTestId('ContactEmail').fill('fatima.qa+test@gmail.com');
  await page.getByTestId('ContactPhone').fill('0747474747');
  await page.getByTestId('ContactSubject').fill('Booking inquiry');
  await page.getByTestId('ContactDescription').fill('Invalid phone length test');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText(/phone must be between 11 and 21 characters/i)).toBeVisible({ timeout: 20000 });
});
