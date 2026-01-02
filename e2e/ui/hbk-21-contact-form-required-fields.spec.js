const { test, expect } = require('@playwright/test');

test('HBK-21 Contact form submit with empty required fields', async ({ page }) => {
  await page.goto('https://automationintesting.online/', {
    waitUntil: 'domcontentloaded'
  });

  await page.locator('#navbarNav').getByRole('link', { name: 'Contact' }).click();

  await page.getByRole('button', { name: 'Submit' }).click();

  const errorBox = page.locator('.alert, .error, .invalid-feedback').first();
  await expect(errorBox).toBeVisible({ timeout: 20000 });
});
