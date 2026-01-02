const { test, expect } = require('@playwright/test');

test('HBK-23 Admin access without login', async ({ page }) => {
  await page.goto('https://automationintesting.online/#/admin', {
    waitUntil: 'domcontentloaded'
  });

  await expect(
    page.getByRole('button', { name: /login/i })
  ).toBeVisible({ timeout: 15000 });
});
