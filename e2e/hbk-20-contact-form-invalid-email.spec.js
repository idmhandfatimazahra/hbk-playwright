const { test, expect } = require('@playwright/test');

test('HBK-20 Contact form submit with invalid email', async ({ page }) => {
  await page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });


  await page.getByTestId('ContactName').fill('Fatima Zahra');
  await page.getByTestId('ContactEmail').fill('fatima-invalid-email');
  await page.getByTestId('ContactPhone').fill('074747474747');
  await page.getByTestId('ContactSubject').fill('Email validation test');
  await page.getByTestId('ContactDescription').fill('Invalid email format');

  await page.getByRole('button', { name: 'Submit' }).click();
});
