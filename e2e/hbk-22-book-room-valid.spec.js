const { test, expect } = require('@playwright/test');

test('HBK-22 DEBUG - find booking button after availability search', async ({ page }) => {
  await page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });

  const checkIn = page.getByPlaceholder(/check in/i);
  const checkOut = page.getByPlaceholder(/check out/i);

  await expect(checkIn).toBeVisible({ timeout: 20000 });
  await checkIn.fill('2026-03-20');

  await expect(checkOut).toBeVisible({ timeout: 20000 });
  await checkOut.fill('2026-03-22');

  await page.getByRole('button', { name: /check availability/i }).click();

  await page.waitForTimeout(1500);

  const buttons = await page.locator('button').allTextContents();
  console.log('BUTTONS AFTER SEARCH:', buttons.map(t => t.trim()).filter(Boolean));

  const links = await page.locator('a').allTextContents();
  console.log('LINKS AFTER SEARCH:', links.map(t => t.trim()).filter(Boolean));
});
