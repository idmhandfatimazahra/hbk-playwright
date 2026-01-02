const { test, expect } = require('@playwright/test');

test('HBK-22 DEBUG - go to Rooms section and list booking buttons', async ({ page }) => {
  await page.goto('https://automationintesting.online/', { waitUntil: 'load' });
  await page.waitForLoadState('networkidle');

  const roomsLink = page.locator('#navbarNav').getByRole('link', { name: 'Rooms' });
  await expect(roomsLink).toBeVisible({ timeout: 20000 });
  await roomsLink.click();

  const roomsHeading = page.getByRole('heading', { name: /rooms/i }).first();
  await expect(roomsHeading).toBeVisible({ timeout: 20000 });
  await roomsHeading.scrollIntoViewIfNeeded();

  await page.waitForTimeout(1500);

  const buttons = await page.locator('button').allTextContents();
  console.log('BUTTONS IN ROOMS AREA:', buttons.map(t => t.trim()).filter(Boolean));

  await page.screenshot({ path: 'hbk22-rooms.png', fullPage: true });
});
