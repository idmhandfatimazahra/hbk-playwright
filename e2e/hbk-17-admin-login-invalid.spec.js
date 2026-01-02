const { test, expect } = require('@playwright/test');

test('HBK-17 Admin login with invalid credentials', async ({ page }) => {
  await page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });

  const adminLink = page.getByRole('link', { name: /^Admin$/ });
  await adminLink.click();

  const username = page.getByPlaceholder('Username');
  await expect(username).toBeVisible({ timeout: 15000 });
  await username.fill('wrong');

  const password = page.getByPlaceholder('Password');
  await password.fill('wrong');

  await page.getByRole('button', { name: /login/i }).click();

  await expect(page).toHaveURL(/\/admin$/i);
  await expect(page.getByRole('button', { name: /login/i })).toBeVisible();
});
