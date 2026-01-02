const { test, expect } = require('@playwright/test');

test('HBK-16 Admin login with valid credentials', async ({ page }) => {
  await page.goto('https://automationintesting.online/', {
    waitUntil: 'domcontentloaded',
  });

  const adminLink = page.getByRole('link', { name: 'Admin', exact: true });
  await expect(adminLink).toBeVisible({ timeout: 15000 });
  await adminLink.click();

  const username = page.getByPlaceholder('Username');
  await expect(username).toBeVisible({ timeout: 15000 });
  await username.fill('admin');

  const password = page.getByPlaceholder('Password');
  await expect(password).toBeVisible({ timeout: 15000 });
  await password.fill('password');

  await page.getByRole('button', { name: /login/i }).click();

  await expect(
    page.getByRole('button', { name: /logout/i })
  ).toBeVisible({ timeout: 15000 });
});
